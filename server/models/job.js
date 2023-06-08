import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Company Name is required']
    },
    position: {
        type: String,
        required: [true, 'Job position is required'],
        maxLength: 100
    },
    status: {
        type: String,
        enum: ["pending", "reject", "interview"],
        default: "pending"
    },
    workLocation: {
        type: String,
        default: "Delhi",
        required: [true, 'Work location is required']
    },
    workType: {
        type: String,
        default: "Full-time",
        enum: ["Full-time", "Part-time", "Internship", "contract"]
    },
    jobType: {
        type: String,
        default: "Development",
        required: [true, 'Job type is required']
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    }
},
    { timestamps: true }
)

export default mongoose.model('Job', jobSchema)