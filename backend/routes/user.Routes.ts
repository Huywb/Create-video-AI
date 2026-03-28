import express from 'express'
import { getAllProjects, getProjectById, getUserCredits, toggleProjectPublic } from '../controller/UserController.js'


const router = express.Router()

router.get('/credits', getUserCredits)
router.get('/projects', getAllProjects)
router.get('/projects/:projectId', getProjectById)
router.post('/publish/:projectId', toggleProjectPublic)

export default router