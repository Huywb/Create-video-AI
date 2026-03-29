import React, { useEffect, useState } from 'react'
import type { Project } from '../types'
import { dummyGenerations } from '../assets/assets'
import { Loader2Icon } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import { PrimaryButton } from '../components/Buttons'
import { useAuth, useUser } from '@clerk/react'
import { useNavigate } from 'react-router-dom'
import api from '../config/axios'
import toast from 'react-hot-toast'

const MyGenerations = () => {

  const {user,isLoaded} = useUser()
  const {getToken} = useAuth()
  const navigate = useNavigate()
  const [generations, setGenerations] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  const fetchGenerations = async () => {
    try {
      const token = await getToken()
      console.log(2)
      const res = await api.get('/api/v1/user/projects',{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(res.data.data)
      if(res.data.data<19){
      setGenerations(res.data.data.projects)
      }else {
        setGenerations(dummyGenerations)
      }
      setLoading(false)
    } catch (error : any) {
      toast.error(error.message)
      console.log(error.message)
      
    }

  }

  useEffect(() => {
    if(user){
      fetchGenerations()
    }else if(isLoaded && !user){
      navigate('/')
    }
  }, [])

  return loading ? (

    <div className="flex items-center justify-center min-h-screen">
      <Loader2Icon className="size-7 animate-spin text-indigo-400"></Loader2Icon>
    </div>
  ) : (
    <div className="min-h-screen text-white p-6 md:p-12 my-28">
      <div className="max-w-6xl  mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">My Generations</h1>
          <p className="text-gray-400">
            View and manager your generated videos.
          </p>
        </header>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {generations?.map(generation => (
            <div>
              <ProjectCard key={generation.id} gen={generation} setGenerations={setGenerations} forCommunity={false}></ProjectCard>
            </div>
          )
          )}
        </div>

        {generations.length === 0 && (
          <div className="text-center py-20 bg-white/5 rounded-xl border border-white/10">
              <h3 className='text-xl font-medium mb-2'>No generations yet.</h3>
              <p className='text-gray-400 mb-6'>Start creating some videos!</p>
              <PrimaryButton onClick={()=>window.location.href = '/generate'} >Create New Generation</PrimaryButton>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyGenerations
