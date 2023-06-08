// const express = require('express');
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './database/conn.js';
import authRoute from './route/authRoute.js'
import jobRoute from './route/jobRoute.js'
import error from './middleware/errorMiddleware.js'

const app = express();

//Environment Variables
dotenv.config()

//Middleware
app.use(express.json())
app.use(cors())
app.use('/auth', authRoute)
app.use('/job', jobRoute)

app.use(error)

//MongoDB Connection
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`)
})