import React from 'react'
import { JobsData } from '../data/dummy';
import { Header } from '../components';
import Card from '../components/Card';



const Jobs = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl ">
      <Header category="Recruitment" title="Jobs" />
      <div className='grid grid-cols-3 gap-y-10'>
        {JobsData.map((job)=>(
          <Card key={job.id} id={job.id} position={job.postition} jobType={job.jobType} totalCandidates={job.totalCandidates} newCandidates={job.newCandidates} time={job.time}/>
        ))};
      </div>
    </div>
  )
}

export default Jobs