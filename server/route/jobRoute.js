import express from 'express'
import { createJobs, getAllJobs, updateJob, deleteJob } from '../controller/jobController.js'
const route = express.Router()

//Create new jobs
route.post('/createJobs', createJobs)
//Get all jobs
route.get('/getAllJobs', getAllJobs)
//Update a job
route.patch('/updateJob/:id', updateJob)
//Delete a job
route.delete('/deleteJob/:id', deleteJob)



export default route