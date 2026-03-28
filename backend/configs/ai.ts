import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GOOLE_CLOUD_API_KEY
})

export default ai