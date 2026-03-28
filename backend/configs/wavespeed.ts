export const WAVESPEED_BASE = "https://api.wavespeed.ai/api/v3";

// Map aspectRatio → size string (theo docs chính thức)
export const getSizeFromAspectRatio = (aspectRatio: string): string => {
  const map: Record<string, string> = {
    "16:9": "1280*720",
    "9:16": "720*1280",
  };
  return map[aspectRatio] ?? "720*1280"; // default 9:16
};

// Duration chỉ nhận 5 hoặc 10
export const getValidDuration = (targetLength: number): 5 | 10 => {
  return targetLength <= 7 ? 5 : 10;
};

// Poll kết quả — theo docs: GET /predictions/{requestId}/result
export const pollWavespeedResult = async (
  requestId: string,
  maxAttempts = 60,
  intervalMs = 5000
): Promise<string> => {
  for (let i = 0; i < maxAttempts; i++) {
    await new Promise((r) => setTimeout(r, intervalMs));

    const res = await fetch(
      `${WAVESPEED_BASE}/predictions/${requestId}/result`,
      {
        headers: {
          Authorization: `Bearer ${process.env.WAVESPEED_API_KEY}`,
        },
      }
    );

    if (!res.ok) throw new Error(`WaveSpeed poll error: ${res.statusText}`);

    const json = await res.json();
    const status: string = json?.data?.status;
    
    if (status === "completed") {
      const videoUrl = json?.data?.outputs?.[0];
      if (!videoUrl) throw new Error("No video URL in response");
      return videoUrl;
    }
    if (status === "failed") {
      throw new Error(json?.data?.error || "WaveSpeed generation failed");
    }
    // status: "processing" → tiếp tục poll
  }
  throw new Error("WaveSpeed timeout");
};
