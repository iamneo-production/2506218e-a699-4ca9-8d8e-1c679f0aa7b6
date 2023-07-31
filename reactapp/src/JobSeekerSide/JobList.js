import React from 'react'
import Search from './ViewJobs/SearchDiv/Search';
import JSNavbar from './ViewJobs/NavBar/NavBar'
import index from "../index.css"
import Customer_jobs from '../CustomerSide/ViewJobs/JobDiv/Customer_jobs';
import Jobseeker_jobs from './ViewJobs/JobDiv/Jobseeker_jobs';
import JobseekerNavbar from '../NavBar/JobSeekerNavBar';


const JobList = () => {
  return (
    <div>
    <JobseekerNavbar/>
  <div className="w-[85%] m-auto mt-16">
{/* 
   */}
    <Jobseeker_jobs />


  
  </div>
  </div>
  )
}

export default JobList
