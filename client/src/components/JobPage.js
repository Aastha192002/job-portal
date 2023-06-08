import React, { useEffect, useState } from 'react'

export default function JobPage() {

    const [job, setJob] = useState([])

    useEffect(() => {
        fetchApiData()
    }, [])

    function fetchApiData() {
        fetch('http://localhost:5000/job/getAllJobs')
            .then(res => res.json())
            .then(data => {
                data.jobs.map(e => {
                    console.log(e.company, e.position)
                })
                setJob(data)
            })
    }
    return (
        <div>

        </div>
    )
}
