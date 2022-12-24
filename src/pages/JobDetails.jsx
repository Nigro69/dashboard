import React from 'react'
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
import { employeesData} from '../data/dummy';
import { CandiCards } from '../components';

export default function JobDetails() {
    let { position } = useParams();
  return (
    <div className="m-2  p-2  bg-gray-200 ">
        
        <div className='flex justify-between'>
            
            <div className='flex'>
                <div>
                <button className='rounded-full bg-white hover:bg-gray-300 mt-6 ml-3 h-9 w-9'><Link className='items-center' to={'/jobs'}><IoIosArrowBack className='h-7 w-7'/></Link></button>
                </div>
                <div>
                <p className=" ml-5 font-semibold uppercase">Design</p>
                <p className=' ml-5 font-bold text-2xl'>Senior Product Designer</p>
                <p className=" ml-5 font-semibold text-gray-600">Job type  -  Fulltime</p>
                </div>
            </div>

            <div className='flex place-items-center gap-5 mr-10'>
                <button class="bg-transparent hover:bg-lime-600 text-lime-700 font-semibold hover:text-white py-1 px-4 border border-lime-600 hover:border-transparent rounded">Share & Promote</button>
                <select class="bg-lime-600 border border-lime-600 text-white rounded py-1 px-4 ">
                    <option selected>Published</option>
                    <option value="Draft">Draft</option>
                    <option value="Expired">Expired</option>
                    <option value="Full">Full</option>
                </select>
            </div>

        </div>

        <div>
            <div className='flex p-2 my-7 gap-4'>
            <button class="bg-transparent hover:bg-gray-500 text-gray-600 font-semibold hover:text-white py-1 px-4 border border-black hover:border-transparent rounded uppercase">Candidates</button>
            <button class="bg-transparent hover:bg-gray-500 text-gray-600 font-semibold hover:text-white py-1 px-4 border border-black hover:border-transparent rounded uppercase">job details</button>
            <button class="bg-transparent hover:bg-gray-500 text-gray-600 font-semibold hover:text-white py-1 px-4 border border-black hover:border-transparent rounded uppercase">Timeline & Notes</button>
            <button class="bg-transparent hover:bg-gray-500 text-gray-600 font-semibold hover:text-white py-1 px-4 border border-black hover:border-transparent rounded uppercase">Hiring team</button>
            <button class="bg-transparent hover:bg-gray-500 text-gray-600 font-semibold hover:text-white py-1 px-4 border border-black hover:border-transparent rounded uppercase">settings</button>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-y-10'>
            {employeesData.map(candidate=>(
            <CandiCards key={candidate.EmployeeID} EmployeeImage={candidate.EmployeeImage} Name={candidate.Name} HireDate={candidate.HireDate} ReportsTo={candidate.ReportsTo} />
            ))}
        </div>
      
    </div>
  )
}
