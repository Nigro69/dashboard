import React from 'react'
import avatar from '../data/avatar.jpg';

export default function CandiCards({Name,HireDate,ReportsTo,EmployeeImage}) {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-gray-100'>
      <div className="px-6 py-4 flex">
        <img
              className="rounded-full w-12 h-12"
              src={EmployeeImage}
              alt="user-profile"
            />
        <div className="font-bold text-xl mb-2 p-2 ml-4">{Name}</div>
        </div>
        <p className='font-semibold text-gray-700 ml-4'>Team manager: {ReportsTo}</p>
        <hr class="my-4 h-px bg-gray-500 border-0 dark:bg-gray-700"></hr>
        <div className='font-semibold text-center p-2 bg-gray-400'>Hiring Date : {HireDate}</div>

    </div>
  )
}
