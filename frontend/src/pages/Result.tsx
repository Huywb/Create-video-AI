import { useEffect, useState } from "react"
import type { Project } from "../types"
import { dummyGenerations } from "../assets/assets"
import { ImageIcon, Loader2Icon, RefreshCwIcon, SparkleIcon, Video, VideoIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { GhostButton, PrimaryButton } from "../components/Buttons"

const Result = () => {

  const [project, setProject] = useState({} as Project)
  const [loading, setLoading] = useState(true)
  const [isGenerating, setIsGenerating] = useState(false)

  const fetchProjectData = async () => {
    setTimeout(()=>{
      setProject(dummyGenerations[0])
      setLoading(false)
    },3000)
  }

  const handleGenerationVideo = async () => {
    setIsGenerating(true)
  }

  useEffect(()=>{
    fetchProjectData()
  },[])



  return loading ? (
    <div className="h-screen w-full flex items-center justify-center">
        <Loader2Icon className="animate-spin text-indigo-50 size-9"></Loader2Icon>
    </div>
  ) : (
    <div className="min-h-screen text-white p-6 md:p-12 mt-20">
        <div className="max-w-6xl mx-auto">
            <header className="flex justify-between items-center mb-8">
              <h1 className="text-2xl md:text-3xl font-medium">Generation Result</h1>
              <Link to='/generate' className="btn-secondary text-sm flex items-center gap-2">
                <RefreshCwIcon className="w-4 h-4"></RefreshCwIcon>
                <p className="max-sm:hidden">New Generation</p>
              </Link>
            </header>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div className="glass-panel inline-block p-2 rounded-2xl">
                      <div className={`${project?.aspectRatio === '9:16' ? 'aspect-9/16' : 'aspect-video'} sm:max-h-200 rounded-xl bg-gray-900 overflow-hidden relative`}>
                        {project?.generatedVideo ? (
                            <video src={project.generatedVideo} controls autoPlay loop className="w-full h-full object-cover">
                            </video>
                        ) : (
                          <img src={project?.generatedImage} alt="Generated Image" className="w-full h-full object-cover" />
                        )}
                      </div>
                    </div>
                </div>

            <div className="space-y-6">
                <div className="glass-panel p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-4">Actions</h3>
                    <div className="flex flex-col gap-3">
                      <a href={project.generatedImage} download>
                        <GhostButton disabled={!project?.generatedImage} 
                        className="w-full justify-center rounded-md py-3 disabled:opacity-50 disabled:cursor-not-allowed">
                            <ImageIcon className="size-4.5"></ImageIcon>
                            Download Image
                        </GhostButton>
                      </a>

                      <a href={project.generatedVideo} download>
                        <GhostButton disabled={!project?.generatedVideo} 
                        className="w-full justify-center rounded-md py-3 disabled:opacity-50 disabled:cursor-not-allowed">
                            <VideoIcon className="size-4.5"></VideoIcon>
                            Download Video
                        </GhostButton>
                      </a>
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <VideoIcon className="size-24"></VideoIcon>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Video Magic</h3>
                    <p className="text-gray-400 text-sm mb-6">Turn this static image into a dynamic video</p>
                    {
                      !project.generatedVideo ? (
                        <PrimaryButton onClick={handleGenerationVideo} disabled={isGenerating} className="w-full ">
                          {isGenerating ? (
                            <>
                              <Loader2Icon className="size-4 animate-spin"></Loader2Icon>
                              Generating...
                            </>
                          ) : (
                            <>
                              <SparkleIcon className="size-4"></SparkleIcon>
                              Generate Video
                            </>
                          )}
                        </PrimaryButton>
                      ): (
                        <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-center text-sm font-medium">
                          Video Generated Successfully
                        </div>
                      )
                    }
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Result
