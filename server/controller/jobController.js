import jobModel from '../models/job.js'

//POST api to create new jobs
export const createJobs = async (req, res, next) => {
    try {
        const { company, position, jobType } = req.body

        if (!company || !position) {
            next('Provide all the required fields')
        }

        if (jobType === 'Teaching') {
            next('Teaching jobs are not allowed')
        }

        const newJob = await jobModel.create({
            company,
            position,
            jobType
        })

        res.status(200).send({
            success: true,
            message: 'New Job created successfully',
            newJob
        })

    }
    catch (e) {
        // console.log(e)
        next('New job could not be created')
    }
}

//GET api for getting all jobs
export const getAllJobs = async (req, res, next) => {
    try {
        const jobs = await jobModel.find()
        res.status(200).send({
            success: true,
            jobs,
            totalJobs: jobs.length
        })
    }
    catch (e) {
        console.log(e)
        next('Error in getting all jobs')
    }
}

//Update a job
export const updateJob = async (req, res, next) => {
    try {
        const { id } = req.params
        const { workLocation, position } = req.body

        if (!workLocation || !position) {
            next('Provide all the required fields')
        }

        //finding the job with given id in the api
        const job = await jobModel.findOne({ _id: id })
        if (!job) {
            next(`No job found with this id: ${id}`)
        }

        //Updating the found job with the updated details
        const updateJob = await jobModel.findOneAndUpdate({ _id: id }, {
            workLocation,
            position
        })

        //Another way of writing the above updation statement 
        //const updateJob = await jobModel.findOneAndUpdate({ _id: id }, req.body)}

        res.status(200).send({
            success: true,
            message: 'Updated job successfully',
            update: updateJob
        })
    }
    catch (e) {
        console.log(e)
        next('Failed to update job')
    }
}

//Delete a job
export const deleteJob = async (req, res, next) => {
    try {
        const { id } = req.params

        //finding the job with given id in the api
        const job = await jobModel.findOne({ _id: id })
        if (!job) {
            next(`No job found with this id: ${id}`)
        }

        //Deleting the found job with the updated details
        const deleteJob = await jobModel.findOneAndDelete({ _id: id })

        res.status(200).send({
            success: true,
            message: 'Job deleted successfully',
            update: deleteJob
        })
    }
    catch (e) {
        console.log(e)
        next('Failed to delete job')
    }
}