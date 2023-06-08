import React from 'react'

export default function CreateJobs() {
    return (
        <div>
            <form>
                <label>Company Name:</label>
                <input type='text' name='company' required />
                <label>Job Position:</label>
                <input type='text' name='position' required />
                <label>Status:</label>
                <input type='text' name='status' required />
                <label>Location:</label>
                <input type='text' name='location' />
                <label>Work Type:</label>
                <input type='text' name='work-type' required />
                <label>Job Type:</label>
                <input type='text' name='job-type' required />
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}
