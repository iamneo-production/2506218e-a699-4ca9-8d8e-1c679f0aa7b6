import React,{useEffect, useState} from 'react'
import { BiTimeFive } from "react-icons/bi";
import "../Styles/appliedjob.css"
import {Link} from "react-router-dom"
import axios  from 'axios';
import { Button } from 'antd';
import JobseekerNavbar from '../NavBar/JobSeekerNavBar';



const AppliedJobs = () => {
const [appliedCandidatesData,setaAppliedCandidateData]=useState([])
const [oldAppliedJobData,setOldAppliedJobData]=useState({})
const [validateAuth,setValidateAuth]=useState(true)
const [jobstatus,setJobStatus]=useState("")

  
  useEffect(() => {      
     const logdata = JSON.parse(localStorage.getItem("logdata"));
 
   const verifyUserUrl=`http://localhost:8080/api/user/verifyuser/${logdata.userId}`
    axios.get(verifyUserUrl)
.then(response => {
if(response.data==="granted")
setValidateAuth(true)
else 
setValidateAuth(false)
})
.catch(error => {


});
    const data = JSON.parse(localStorage.getItem("logdata"));
    const baseURl=`http://localhost:8080/api/trainer/jobs/fetch/data/${data.userId}`
    alert(baseURl)
    axios.get(baseURl)
    .then(response => {
    setaAppliedCandidateData(response.data)

  
    })
    .catch(error => {
 
    
    });
    
  }, [])
   
const deleteAppliedJobId=(appliedjobid)=>{
  alert('http://localhost:8080/api/trainer/jobs/delete/appliedjob/'+appliedjobid)
  axios.delete('http://localhost:8080/api/trainer/jobs/delete/appliedjob/'+appliedjobid)
  .then(response => {
    alert('Deletetion Succesful');
  })
  .catch(error => {
    console.error(error);
  });

}
  if(true)
  return (
    <div>
    <JobseekerNavbar />
    <div className="w-[85%] mt-3  h-max m-auto">
    
    <div className="jobContainer flex gap-5 justify-center flex-wrap items-center py-10">
      {/* {Data.map(({ job_id, job_location, to_date, job_description, wage_per_day, phone_number_number }) => { */}

        {appliedCandidatesData.map(({    appliedJobId,
    job_location,
    to_date,

    job_description,
    phoneNumber,
    wage_per_day }) => {
          return (
            <div key={appliedJobId} className="group group/item singleJob w-[250px] p-[20px]
             bg-white rounded-[10px] hover:bg-blue1 hover:opacity-[.9] 
             shadow-lg shadow-greyIsh-400/700 hover:shadow-lg
             transition duration-500 hover:scale-105"
             >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[17px] mb-[5px] font-semibold text-textColor group-hover:text-white">
                  {job_location}  <span className="available">available</span>
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
           {"Now"}
                </span>
              </span>
              <h6 className="text-[#ccc] text-[15px]">
                DeadLine to Apply: {to_date}
              </h6>
              <h2 className="text-[14px] mb-[10px] pt-[20px] border-t-[2px] text-[#6a6a6a] mt-[20px] group-hover:text-white">
                Wage per day : {wage_per_day}
              </h2>
              <h2 className="text-[#6a6a6a] mb-[10px] text-[14px] group-hover:text-white">
                Number: {phoneNumber}
              </h2>
              <p 
               
              className="text-[14px] mb-[1rem] text-[#6a6a6a]  group-hover:text-white">
         
                Job Description: {job_description}
              </p>
            </div> 
          );
        })}
      </div>
  </div>
  </div>
  )
  else
  return(
    <h1>ACESS DENIED</h1>
  )
}

export default AppliedJobs
