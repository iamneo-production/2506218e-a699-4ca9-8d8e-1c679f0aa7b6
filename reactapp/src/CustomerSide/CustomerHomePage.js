import React from 'react'
import Search from './ViewJobs/SearchDiv/Search';


import "../index.css"
import CustomerNavBar from "../NavBar/CustomerNavBar"
import Jobseeker_jobs from '../JobSeekerSide/ViewJobs/JobDiv/Jobseeker_jobs';
import Customer_jobs from './ViewJobs/JobDiv/Customer_jobs';
const CustomerHomePage = () => {
  return (
    <div>
    <CustomerNavBar
    />
  <div className="w-[85%] mt-5 mb-4 m-auto  ">

    <Customer_jobs />


  
  </div>
  </div>
  )
}

export default CustomerHomePage;