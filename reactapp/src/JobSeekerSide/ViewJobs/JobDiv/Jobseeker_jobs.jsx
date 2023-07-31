import React, { useEffect, useState } from "react";

import { BiTimeFive } from "react-icons/bi"; //USE EFFECT REACT HOOK
import axios from "axios"
import { data } from "autoprefixer";
import "../../../Styles/jobs.css"
import {Link} from "react-router-dom"

const jobs_base_url="http://localhost:8080/api/user/jobs"

// const Data = [
//   {
//     jobId: 1,
//     job_location: "Chennai",
//     to_date: "09/02/2024",
//     time: "Now",
//     job_description: "Yoga Master",
//     phone_number: "9995559990",
//     wage_per_day: "2000",
//   },
//   {
//     id: 2,
//     location: "Delhi",
//     to_date: "12/12/2025",
//     time: "14 hrs",
//     job_description: "Yoga Master",
//     phone_number: "9315669990",
//     wage_per_day: "2500",
//   },
//   {
//     id: 3,
//     job_location: "Delhi",
//     to_date: "12/12/2025",
//     time: "14 hrs",
//     job_description: "Yoga Master",
//     phone_number: "9315669990",
//     wage_per_day: "2500",
//   },
//   {
//     id: 4,
//     job_location: "Trichy",
//     to_date: "23/11/2023",
//     time: "1 day",
//     job_description: "Yoga Master",
//     phone_number: "9291159990",
//     wage_per_day: "3500",
//   },
//   {
//     id: 5,
//     job_location: "Karur",
//     to_date: "11/05/2024",
//     time: "Now",
//     job_description: "Yoga Master",
//     phone_number: "9995559990",
//     wage_per_day: "2000",
//   },
//   {
//     id: 6,
//     job_location: "Chennai",
//     to_date: "10/08/2025",
//     time: "1 hr",
//     job_description: "Yoga Master",
//     phone_number: "9995539990",
//     wage_per_day: "4000",
//   },
//   {
//     id: 7,
//     job_location: "Kochi",
//     to_date: "12/12/2025",
//     time: "3 days",
//     job_description: "Yoga Master",
//     phone_number: "9315669990",
//     wage_per_day: "2500",
//   },
//   {
//     id: 8,
//     job_location: "Madurai",
//     to_date: "25/12/2025",
//     time: "3 days",
//     job_description: "Yoga Master",
//     phone_number: "9291159990",
//     wage_per_day: "3500",
//   },
// ];


const Jobseeker_jobs = () => {
  const fun1=()=>{
    axios.get(jobs_base_url)
  .then(response => {
   // (response.data )
   setjobData(response.data)
  //console.log(jobData)
  })
  .catch(error => {
  setJobdisplay(0)
  
  });
  }
const [jobData,setjobData]=useState([])
const [jobdisplay,setJobdisplay]=useState(1)
const [jobavailability,setJobavailability]=useState("available")
const [toastdisplay,setToastdisplay]=useState("none")
const [deletejobID,setDelteJobID]=useState("")
useEffect(() => {
//alert("hello1")
axios.get(jobs_base_url)
.then(response => {
 // (response.data )
 setjobData(response.data)
 //alert("hello2")
 console.log(response.data)
//console.log(jobData)
})
.catch(error => {
setJobdisplay(0)

});

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

if(1){
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
   {/* <div className="button-container">
      <button 
     onClick={()=>setToastdisplay("none")}
        className="cancel-button" 
        >
          Cancel
      </button>
      <button 
      onClick={confirmDeleteJob}
        className="confirmation-button">
          Delete
        </button>
</div>*/}
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
               
           <button> <a
      href={"/joblist/applyjob/"+jobId}>
         Apply Now</a></button>
              </button>
     
           
            </div> 
          );
        })}
      </div>
    </div>
  );
      }else{
        return(
          <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
                 <button onClick={fun1}>click me</button>
                <h1>No Jobs to display</h1>  
               
          </div>
  
        )
      }

  
};

export default Jobseeker_jobs;
