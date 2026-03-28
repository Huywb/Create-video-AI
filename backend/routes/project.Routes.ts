import express from 'express'
import { createProject, createVideo, deleteProject, getAllPublishedProjects } from '../controller/projectController.js'
import { protect } from '../middleware/auth.js'
import upload from '../configs/multer.js'


const router = express.Router()

router.post('/create',upload.array('images',2), protect, createProject)
router.post('/video', protect, createVideo)
router.get('/published', getAllPublishedProjects)
router.delete('/:projectId', protect, deleteProject)

export default router