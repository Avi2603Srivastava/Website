import React from 'react'
import JobDetailsPage from './JobPage'
import WorkBrand from '../Component/WorkBrand';
import ChooseUs from '../Component/ChooseUs';

export default function Parentforjobpage() {
    const sampleEvent = {
        title: "Event Manager Needed",
        description: "Looking for an experienced event manager for a corporate event.",
        requirements: [
          "5+ years of experience",
          "Strong organizational skills",
          "Excellent communication",
        ],
        location: "New York, NY",
        compensation: "$500 per day",
        employer: "XYZ Events Co.",
        applicantsCount: 10,
      };
  return (
    <>
    <div className="row ms-2">
      <div className="col-md-6"><JobDetailsPage event={sampleEvent} /></div>
      <div className="col-md-6"><JobDetailsPage event={sampleEvent} /></div>
      </div>
      <ChooseUs />
      <WorkBrand />
   
   </>
)
}
