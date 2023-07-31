import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Styles/appliedjob.css';
import axios from "axios"
import JobseekerNavbar from '../NavBar/JobSeekerNavBar';

const ApplyJob = () => {
    const nav2= useNavigate()
const [appliedJobData,setAppliedJobData]=useState({})
    const[firstName,setFirstName]= useState('')
    const[address,setAddress]= useState('')
    const[email,setEmail]= useState('')
    const[experience,setExperience]= useState('')
    const[phone,setPhone]= useState('')
    const[job_data,setJob_data]=useState({})
    const[statepersonid,setstatepersonid]=useState('')
const[stateuserid,setuserId]=useState('')
    let id = (Math.random() + 1).toString(36).substring(7);
    const addApplyJobURL='http://localhost:8080/api/trainer/applyjob/newjob'
    const jobuserURL=`http://localhost:8080/api/user/job/fetch/${window.location.pathname.split("/").pop()}`
    const jobURL=`http://localhost:8080/api/user/editjob/${window.location.pathname.split("/").pop()}`

    var applyjobdata={
        "appliedJobId":id,
        "jobId":window.location.pathname.split("/").pop(),
        "personId":statepersonid,
        "firstName":firstName,
        "address":address,
        "email":email,
        "phoneNumber":phone,
        "jobStatus":"available",
        "jobUserId":stateuserid,
        "yearOfExperience":experience,
        "job_description":job_data.job_description,
      "to_date":job_data.to_date,
        "from_date":job_data.from_date,
        "wage_per_day":job_data.wage_per_day,
        "phone_number":job_data.phone_number,
        "activeStatus":job_data.activeStatus
      }
    const launch_toast=()=> {
        var x = document.getElementById("toast")
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
    }
    
      useEffect(() => {
        const data = JSON.parse(localStorage.getItem("logdata"));
        setstatepersonid(data.userId)// JOB SEEKER ID
        axios.get(jobuserURL,{
    
        })
        .then(response => {
            setuserId(response.data)
 
        
 
        //console.log(jobData)
        })
        .catch(error => {
  
        
        });
        axios.get(jobURL,{

        })
        .then(response => {
            console.log(response.data)
     setJob_data(response.data)
      applyjobdata={
        "appliedJobId":id,
        "jobId":window.location.pathname.split("/").pop(),
        "personId":statepersonid,
        "firstName":firstName,
        "address":address,
        "email":email,
        "phoneNumber":phone,
        "jobStatus":"available",
        "jobUserId":stateuserid,
        "yearOfExperience":experience,
        "job_description":job_data.job_description,
"job_location":job_data.job_location,
        "from_date":job_data.from_date,
        "wage_per_day":job_data.wage_per_day,
        "phone_number":job_data.phone_number,
        "activeStatus":job_data.activeStatus,
        "to_date":job_data.to_data
      }
        //console.log(jobData)
        })
        .catch(error => {
  
        
        });
      
      }, [])
      
    const formsubmit=(e)=>{
        console.log(appliedJobData)
e.preventDefault();
if(firstName&&address&&email&&experience&&phone!=''){

    axios.post(addApplyJobURL, 
        applyjobdata
        )
        .then((response) => {
          alert("job added sucessfull")
          nav2("/joblist")
        }, (error) => {
          console.log(error);
        });

}else{
    alert("All fields must be filled")
}
    }
  return (
    <>
    <div>
        < JobseekerNavbar />
    <div className="form-container1">
    
    <form name="formContact" id=""
        action="" 
    > <h1 className="text-center">Apply Job</h1>
    <br></br>
        <div className="row1">
            <div className="inline-block right-margin">
                <div className="label">
                    First Name <span id="firstName-info"
                        className="info"></span>
                </div>
                <input
                
                onChange={ (e)=>setFirstName(e.target.value)}
                 type="text" className="input-field"
                    name="contact-first-name"
                    id="contact-first-name"
                    
                    required
                     />
            </div>
            <div className="inline-block responsive">
                <div className="label">
                    Address <span id="Address-info" className="info"></span>
                </div>
                <input 
                   onChange={ (e)=>setAddress(e.target.value)}
                type="text" className="input-field"
                    name="contact-Address" id="contact-Address" />
            </div>
        </div>
        <div className="row1">
            <div className="inline-block responsive">
                <div className="label">
                    Email <span id="email-info" className="info"></span>
                </div>
                <input
                   onChange={ (e)=>setEmail(e.target.value)}
                 type="text" className="input-field"
                    name="contact-email" id="contact-email" />
            </div>
            <div className="inline-block responsive">
                <div className="label">
                    Phone <span id="phone-info" className="info"></span>
                </div>
                <input 
                pattern="[0-9] {10}"
                maxlength="10"
                    onChange={ (e)=>setPhone(e.target.value)}
                type="tel" className="input-field"
                    name="contact-phone" id="contact-phone" />
            </div>
        </div>
        <div className="row1">
            <div className="inline-block right-margin">
                <div className="label">
                    Years of Experience <span id="email-info" className="info"></span>
                </div>
                <input 
                   onChange={ (e)=>setExperience(e.target.value)}
                type="number" className="input-field"
                    name="contact-experience" id="contact-experience" />
            </div>
            
        </div>
        <div className="row1">
            <input type="submit" name="send" onClick={formsubmit} className="btn-submit"
                value="Submit" />
        </div>
        <div className="row1">
  
                </div>
      
    </form>
    

    <div id="toast">

   
 
    </div>

</div>
</div>
</>
  )
}


export default ApplyJob;
