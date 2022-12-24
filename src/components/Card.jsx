import React from "react";
import { Link , } from "react-router-dom";
import { JobDetails } from "../pages";

export default function Card({
  id,
  position,
  jobType,
  totalCandidates,
  newCandidates,
  time,
}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
      <hr class="mx-auto w-sm h-1 bg-green-200 rounded border-0 dark:bg-gray-700"></hr>
      <div className="e-card" id="basic ">
        <div className="e-card-header">
          <div className="e-card-header-caption">
            <p className="font-semi-bold uppercase">{jobType}</p>
            <div className="e-card-title text-xl font-bold">{position}</div>
          </div>
        </div>

        <p className="ml-3 mt-5 font-bold text-gray-600">Candidates:</p>
        <div className="flex grid grid-cols-2 divide-x divide-gray-300 divide-solid bg-gray-200">
          <div className="text-center">
            <p className="text-l uppercase font-semibold text-gray-500">
              Total
            </p>
            <p className="text-3xl font-semibold">{totalCandidates}</p>
          </div>
          <div className="text-center">
            <p className="text-l uppercase font-semibold text-gray-500">new</p>
            <p className="text-3xl font-semibold">{newCandidates}</p>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="font-semibold text-gray-500 mt-4">Job Type</div>
          <div className="font-semibold text-gray-500 mt-4">-</div>
          <div className="font-semibold text-gray-500 mt-4">{time}</div>
        </div>
        <hr class="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        
          <Link className="hover:bg-gray-200 font-bold" to={`/jobs/details/${position}`}>See details</Link>
        
      </div>
    </div>
  );
}
