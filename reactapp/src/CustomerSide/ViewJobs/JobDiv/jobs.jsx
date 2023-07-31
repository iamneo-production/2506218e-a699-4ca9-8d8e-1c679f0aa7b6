import React, { useEffect, useState } from "react";

import { BiTimeFive } from "react-icons/bi";
import axios from "axios"
import { data } from "autoprefixer";
import "../../../Styles/jobs.css"
import {Link} from "react-router-dom"

//const jobs_base_url="http://localhost:8080/api/user/jobs"
const jobs_base_url="http://localhost:8080/api/user/jobs/fetch/appliedjobs"



const Jobs = () => {
const [jobData,setjobData]=useState([])
const [jobdisplay,setJobdisplay]=useState(1)
const [jobavailability,setJobavailability]=useState("available")
const [toastdisplay,setToastdisplay]=useState("none")
const [deletejobID,setDelteJobID]=useState("")

useEffect(() => {
  var idlist=[]
  axios.get(jobs_base_url,{
    
  })
  .then(response => {
   
   // (response.data )
setjobData(response.data)
  //console.log(jobData)
  })
  .catch(error => {
  setJobdisplay(0)
  
  });
// axios.get(jobs_base_url)
// .then(response => {
//  // (response.data )
//  setjobData(response.data)
// //console.log(jobData)
// })
// .catch(error => {
// setJobdisplay(0)

// });

}, []);

const [delTask, setDelTask] = useState(false)

// const handleConfirmationBox = () => {
//   if (!delTask) {
//     document.getElementsByClassName(".confirm-bg").style.display = "flex"
//     document.getElementsByClassName(".container").style.display = "flex"
//     setDelTask(true)
//   } else {
//     document.getElementsByClassName(".confirm-bg").style.display = "none"
//     document.getElementsByClassName(".container").style.display = "none"
//     setDelTask(false)
//  }

//}
const deletejob=(link)=>{
  setToastdisplay("flex")
setDelteJobID(link)
}
const confirmDeleteJob=()=>{
  console.log(`http://localhost:8080/api/user/jobs/delelejob/${deletejobID}`)
 axios.delete('http://localhost:8080/api/user/jobs/delelejob'+deletejobID)
  .then(response => {
    console.log('Deletetion Succesful');
  })
  .catch(error => {
    console.error(error);
  });
}

if(jobdisplay){
  return (


    <div>
    <>
  <div
   style={{
    display:toastdisplay
  }}
   className="container">
    <div className="confirmation-text">
      Do you really want to delete this task?
    </div>
    <div className="button-container">
      <button 
     onClick={()=>setToastdisplay("none")}
        className="cancel-button" 
        >
          Cancel
      </button>
      <button 
      onClick={confirmDeleteJob}
        className="confirmation-button"
      >
          Delete
        </button>
    </div>
  </div>
  <div 
    className="confirm-bg"
    style={{
    display:toastdisplay
  }}>
  </div>
</>
      <div className="jobContainer flex gap-5 justify-center flex-wrap items-center py-10">
      {/* {Data.map(({ job_id, job_location, to_date, job_description, wage_per_day, phone_number_number }) => { */}

        {jobData.map(({    jobId,
    job_location,
    to_date,

    job_description,
    phone_number,
    wage_per_day }) => {
          return (
            <div key={jobId} className="group group/item singleJob w-[250px] p-[20px]
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
                Number: {phone_number}
              </h2>
              <p 
               
              className="text-[14px] mb-[1rem] text-[#6a6a6a]  group-hover:text-white">
         
                Job Description: {job_description}
              </p>

              <button className="border-[2px] rounded-[10px] block p-[10px]
               w-full text-[14px] font-semibold text-textColor hover:bg-lightblue group-hover/item:text-textColor  ">
               
           <Link
      to={"applyjob/"+jobId}
         >Apply Now</Link>
              </button>
         <div className="button_group">   
              <span  className="px-6 py-2 mr-2 text-sm font-medium text-primary-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white 
               dark:hover:text-white dark:hover:bg-gray-600 dark:focus:
               ring-blue-500 dark:focus:text-white">
              <Link
      to={"editjob/"+jobId}
         >Edit</Link>
  </span>
  <span 
 
  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
  <Link
 onClick={()=>deletejob(jobId)}
    
         >Delete</Link>
  </span> 
  
    </div>


            </div> 
          );
        })}
      </div>
    </div>
  );
  


      }else{
        return(
          <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

                <h1
               
                >No Jobs to display</h1>  
          </div>
  
        )
      }

  
};

export default Jobs;
