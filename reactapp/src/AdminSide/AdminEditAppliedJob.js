import React from 'react'
import {useState,useEffect} from 'react'

import {useNavigate} from 'react-router-dom'
import "../Styles/addjob.css"
// import { DatePicker } from 'antd';
import axios from "axios"
function AdminEditAppliedJob() {
  const nav1=useNavigate();
    const datepickerStyle = {
        marginLeft: "190px",
        padding: "19px 105px",
        border: "none",
        borderRadius: "10px",
        marginRight: "200px",
        fontSize: "17px",
        color: "black",
    };
   // const baseURl='http://localhost:8080/api/user/jobs/editjob/q1er111'

const [oldAppliedJobData,setOldAppliedJobData]=useState({})
    const [firstName,setFirstName]=useState("");
    const [address,setAddress]=useState("");
    const [email,setEmail]=useState("1234");
    const [phoneNumber,setPhoneNumber]=useState("");
    const [yoe,setYoe]=useState("");

    const [userId,setIserId]=useState("");
  
    let id = (Math.random() + 1).toString(36).substring(7);
  
  const appliedjobdata={
    "appliedJobId":oldAppliedJobData.appliedJobId,
    "jobId":window.location.pathname.split("/").pop(),
    "personId":oldAppliedJobData.personId,
    "firstName":firstName,
    "address":address,
    "email":email,
    "phoneNumber":phoneNumber,
    "jobStatus":"available",
    "jobUserId":oldAppliedJobData.jobUserId,
    "yearOfExperience":yoe
  }
  useEffect(() => {
    let  id2=window.location.pathname.split("/").pop();

const jobFindURL=`http://localhost:8080/api/trainer/jobs/fetch/${id2}`
    axios.get(jobFindURL)
    .then(response => {
        setOldAppliedJobData(response.data)

    })
    .catch(error => {
   
    
    });
 console.log(oldAppliedJobData)
    }, []);
  const formSubmit=()=>{
    let  id2=window.location.pathname.split("/").pop();
    const baseURl=`http://localhost:8080/api/trainer/jobs/updatejobstatus/${id2}`
    console.log(appliedjobdata);

    // e.preventDefault();
    // if(jobdescription&&joblocation&&fromdate&&todate&&wageperday!=''){
    //   alert("All the field are mandetory");
    //   return
    // }

axios.put(baseURl, 
    appliedjobdata
)
.then((response) => {
  alert("Changes saved sucessfull")
  nav1("/home")
}, (error) => {
  console.log(appliedjobdata);
});
  }
    return (
        <>
        {/* <nav className="main-nav">
            <div className="logo">
                <h2>
                    <span>Y</span>oga preceptor
                </h2>
            </div>

            <div className="menu-link">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Add openings</a>
                    </li>
                    <li>
                        <a href="#">Applied Candidates</a>
                    </li>
                </ul>
            </div>

            <div className="exit">
                <ul>
                    <li>
                        <a href="#">Logout</a>
                    </li>
                </ul>

            </div>
        </nav> */}
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
                    onChange={ (e)=>setPhoneNumber(e.target.value)}
                type="number" className="input-field"
                    name="contact-phone" id="contact-phone" />
            </div>
        </div>
        <div className="row1">
            <div className="inline-block right-margin">
                <div className="label">
                    Years of Experience <span id="email-info" className="info"></span>
                </div>
                <input 
                   onChange={ (e)=>setYoe(e.target.value)}
                type="number" className="input-field"
                    name="contact-experience" id="contact-experience" />
            </div>
            <div className=" responsive">
            <img className='img1'  alt='login_side'></img>
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
        </>
    );
}
export default AdminEditAppliedJob;
