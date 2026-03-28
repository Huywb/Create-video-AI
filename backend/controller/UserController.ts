import { Request, Response } from 'express';
import { prisma } from '../configs/prisma.js';

export const getUserCredits = async(req: Request, res: Response) => {
    try {
        const {userId} = req.auth()
        if(!userId){
            return res.status(401).json({message: "Unauthorized"})
        }
        
        const user = await prisma.user.findUnique({
            where: {id: userId}
        })
        res.json({message:"Get user credits successful", data : user?.credits })
    } catch (error) {
        console.error("Error fetching user credits:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const getAllProjects = async(req: Request, res: Response) => {
    try {
        const {userId} = req.auth()
        if(!userId){
            return res.status(401).json({message: "Unauthorized"})
        }
        const projects = await prisma.project.findMany({
            where: {userId},
            orderBy: { createdAt: "desc" }
        })
        res.json({message:"Get all projects successful", data : projects })
    } catch (error) {
        console.error("Error fetching all projects:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const getProjectById = async(req: Request, res: Response) => {
    try {
        const {userId} = req.auth()
        const projectId = req.params
        if(!userId){
            return res.status(401).json({message: "Unauthorized"})
        }
        const project = await prisma.project.findUnique({
            where: {id : projectId.id.toString(), userId}
        })
        if(!project){
            return res.status(404).json({message: "Project not found"})
        }
        res.json({message:"Get project by ID successful", data : project })
    } catch (error) {
        console.error("Error fetching project by ID:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const toggleProjectPublic = async(req: Request, res: Response) => {
    try {
        const {userId} = req.auth()
        const projectId = req.params
        if(!userId){
            return res.status(401).json({message: "Unauthorized"})
        }
        const project = await prisma.project.findUnique({
            where: {id : projectId.toString(), userId}
        })
        if(!project){
            return res.status(404).json({message: "Project not found"})
        }

        if(!project.generatedImage || !project.generatedVideo){
            return res.status(400).json({message: "Project is not ready to be published"})
        }

        await prisma.project.update({
            where: {id: projectId.toString(), userId},
            data: {isPublished: !project.isPublished}
        })
        res.json({message:"Toggle project public status successful", data : project })
    } catch (error) {
        console.log("Error toggling project public status:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
