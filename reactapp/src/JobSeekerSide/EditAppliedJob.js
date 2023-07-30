
import React, { useState,useEffect } from 'react'

import submit_job from '../images/submit_img.png'
import "../Styles/jobs.css"
import axios from "axios"
const EditAppliedJob = () => {

    const [oldappliedJobData,setOldAppliedJobData]=useState({})
    const[firstName,setFirstName]= useState('')
    const[address,setAddress]= useState('')
    const[email,setEmail]= useState('')
    const[currentAppliedJob,setCurrentAppliedJob]=useState(window.location.pathname.split("/").pop())
    const[experience,setExperience]= useState('')
    const[phone,setPhone]= useState('')
   
    useEffect(() => {
        let  id2=window.location.pathname.split("/").pop();
    
    const jobFindURL=`http://localhost:8080/api/trainer/jobs/fetch/${id2}`
        axios.get(jobFindURL)
        .then(response => {
            setOldAppliedJobData(response.data)
    
        })
        .catch(error => {
       
        
        });
     console.log(oldappliedJobData)
        }, []);
  
        const formSubmit=()=>{
            const appliedJobData={
                "appliedJobId":oldappliedJobData.appliedJobId,
                "jobId":window.location.pathname.split("/").pop(),
                "personId":oldappliedJobData.personId,
                "firstName":firstName,
                "address":address,
                "email":email,
                "phoneNumber":phone,
                "jobStatus":"available",
                "jobUserId":oldappliedJobData.stateuserid,
                "yearOfExperience":experience,  
                "job_description":oldappliedJobData.job_description,
              "to_date":oldappliedJobData.to_date,
                "from_date":oldappliedJobData.from_date,
                "wage_per_day":oldappliedJobData.wage_per_day,
               
                "activeStatus":oldappliedJobData.activeStatus
                
            }
            alert(appliedJobData.address+" "+appliedJobData.yearOfExperience)
            const baseURl=`http://localhost:8080/api/trainer/jobs/updatejobstatus/${window.location.pathname.split("/").pop()}`
            axios.put(baseURl, 
                appliedJobData
                )
                .then((response) => {
                  alert("Changes saved sucessfull")
                 
                }, (error) => {
                  console.log(appliedJobData);
                });
        }
  return (
    <div>
 
    <div className="form-container1">
    <h1 className="text-center">Apply Job</h1>
    <form name="formContact" id=""
        action="" 
    >
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
            <div className=" responsive">
            <img className='img1' src={submit_job} alt='login_side'></img>
            </div>
        </div>
        <div className="row1">
            <input type="submit" name="send" onClick={formSubmit} className="btn-submit"
                value="Submit" />
        </div>
        <div className="row1">
  
                </div>
      
    </form>
    

    <div id="toast">

    <div id="desc">Applied Job Successfully!</div>
 
    </div>

</div>
</div>
  )
}

export default EditAppliedJob