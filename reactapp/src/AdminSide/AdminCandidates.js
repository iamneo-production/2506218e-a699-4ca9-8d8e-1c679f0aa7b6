import React,{useEffect, useState} from 'react'
import { BiTimeFive } from "react-icons/bi";
import "../Styles/viewappliedcandidates.css"
import axios  from 'axios';
import { Button } from 'react';
import AdminNavBar from '../NavBar/AdminNavBar';


const ViewAppliedCandiates = () => {
const [appliedCandidatesData,setaAppliedCandidateData]=useState([])
const [oldAppliedJobData,setOldAppliedJobData]=useState({})
const [validateAuth,setValidateAuth]=useState(true)
const [jobstatus,setJobStatus]=useState("")

  
  useEffect(() => {      
     const logdata = JSON.parse(localStorage.getItem("logdata"));
     
    const data = JSON.parse(localStorage.getItem("logdata"));
    const baseURl=`http://localhost:8080/api/trainer/fetch/allappliedjobs`
    alert(baseURl)
    axios.get(baseURl)
    .then(response => {
    setaAppliedCandidateData(response.data)
    console.log(appliedCandidatesData)
  
    })
    .catch(error => {
 
    
    });
    
  }, [])
   const deleteJob=(appliedJobId)=>{
    console.log(` http://localhost:8080/api/trainer/jobs/delete/appliedjob/${appliedJobId}` )
 axios.delete(` http://localhost:8080/api/trainer/jobs/delete/appliedjob/${appliedJobId}` )
  .then(response => {
    console.log('Deletetion Succesful');
  })
  .catch(error => {
    console.error(error);
  });
   }
  const updateappliedJob=(status,appliedJobId)=>{
    var baseURl=`http://localhost:8080/api/trainer/jobs/fetch/${appliedJobId}`
    alert(baseURl)
    axios.get(baseURl)
    .then(response => {
    setOldAppliedJobData(response.data)
    console.log(appliedCandidatesData)
  
    })
    baseURl=`http://localhost:8080/api/trainer/jobs/updatejobstatus/${appliedJobId}`
    oldAppliedJobData.jobStatus=status
    console.log(oldAppliedJobData)
    alert(oldAppliedJobData.jobStatus)
   axios.put(baseURl, 
     oldAppliedJobData
  )
  .then((response) => {

    alert("Changes saved sucessfull")
  
  }, (error) => {
    
  });
  }
  if(validateAuth)
  return (
    <div>
    <AdminNavBar/>
    <div className="w-[85%] mt-3  h-max m-auto ">
    
    <div className=" h-max flex gap-10 justify-center flex-wrap items-center py-5">
      {appliedCandidatesData.map(({ appliedJobId, firstName, address, phoneNumber, email, yearOfExperience }) => {
        return (
          <div key={appliedJobId}
         className="group group/item singleJob w-[550px] p-[30px]
             bg-white rounded-[10px] hover:bg-blue1 hover:opacity-[.9] 
             shadow-lg shadow-greyIsh-400/700 hover:shadow-lg
             transition duration-500 hover:scale-105">
            <span className="flex justify-between items-center gap-4">
              <h1 className="text-[17px] mb-[5px] font-semibold text-textColor group-hover:text-white">
              Name of Candidate:  {firstName}
              </h1>
             
            </span>
             <h1 className="text-[15px] font-semibold text-textColor group-hover:text-white">
            Address: {address}
              </h1>
            <h2 className="text-[14px] mb-[10px] pt-[10px] border-t-[2px] text-[#6a6a6a] mt-[20px] group-hover:text-white">
              Phone Number:{phoneNumber}
            </h2>
            <h2 className="text-[#6a6a6a] mb-[10px] text-[14px] group-hover:text-white">
             Email: {email}
            </h2>
            <p className="text-[14px] mb-[1rem] text-[#6a6a6a]  group-hover:text-white">
             Year Of Experience {yearOfExperience}
            </p>

            <div className="button_group1 ">   
              <span  className="px-4 py-2 mr-2 text-sm font-medium text-primary-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white 
               dark:hover:text-white dark:hover:bg-gray-600 dark:focus:
               ring-blue-500 dark:focus:text-white">
              <Button
onClick={()=>updateappliedJob("accepted",appliedJobId)}
         >Edit</Button>
  </span>
  <span 
 
  className="px-5 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
  <Button
onClick={()=>deleteJob(appliedJobId)}
    
         >Deletee</Button>
  </span> 
    </div>
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

export default ViewAppliedCandiates;