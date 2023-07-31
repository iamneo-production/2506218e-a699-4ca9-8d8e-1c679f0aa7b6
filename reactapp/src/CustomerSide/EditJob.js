import React from 'react'
import {useState,useEffect} from 'react'

import {useNavigate} from 'react-router-dom'
import "../Styles/addjob.css"
import { DatePicker } from 'antd';
import axios from "axios"
function EditJob() {
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
  
  
const [oldJobData,setOldjobData]=useState({})
    const [jobdescription,setJobDescription]=useState("");
    const [joblocation,setJobLocation]=useState("");
    const [phonenumber,setPhoneNumber]=useState("1234");
    const [fromdate,setFromDate]=useState("");
    const [todate,setToDate]=useState("");
    const [wageperday,setWagePerDay]=useState("");
    const [userId,setIserId]=useState("");
  
    let id = (Math.random() + 1).toString(36).substring(7);
    var jobdata={
        "jobId":"",
        "from_date":fromdate,
        "job_description":jobdescription,
        "job_location":joblocation,
        "to_date":todate,
        "userId":id,
        "wage_per_day":wageperday,
        "phone_number":phonenumber,
        "activeStatus":"noo"
      }
 
  useEffect(() => {
    let  id2=window.location.pathname.split("/").pop();

const jobFindURL=`http://localhost:8080/api/user/editjob/${id2}`//job data
    axios.get(jobFindURL)
    .then(response => {
    setOldjobData(response.data)


    })
    .catch(error => {
   
    
    });
 console.log(oldJobData)

 
    }, []);
  const formSubmit=()=>{
    let  id2=window.location.pathname.split("/").pop();
    const baseURl=`http://localhost:8080/api/user/jobs/editjob/${id2}` // send the request to edit the data
    console.log(jobdata);
    alert(baseURl)
    if(fromdate=="")setFromDate(oldJobData.fromdate)
if(joblocation=="")setJobLocation(oldJobData.joblocation)
if(wageperday=="")setWagePerDay(oldJobData.wageperday)
if(todate=="")setToDate(oldJobData.todate)
if(phonenumber=="")setPhoneNumber(oldJobData.phonenumber)
if(jobdescription=="")setJobDescription(oldJobData.jobdescription)
   jobdata={
    "jobId":oldJobData.jobId,
    "from_date":fromdate,
    "job_description":jobdescription,
    "job_location":joblocation,
    "to_date":todate,
    "userId":oldJobData.id,
    "wage_per_day":wageperday,
    "phone_number":phonenumber,
    "activeStatus":"noo"
  }
    // e.preventDefault();
    // if(jobdescription&&joblocation&&fromdate&&todate&&wageperday!=''){
    //   alert("All the field are mandetory");
    //   return
    // }

axios.put(baseURl, 
jobdata
)
.then((response) => {
  alert("Changes saved sucessfull")
  nav1("/home")
}, (error) => {
  console.log(jobdata);
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
            <br /><br />
            <div className="mid">
                <br /><br />
               
                <br />
                <input
                    type="text" placeholder={oldJobData.job_description}
                    required

                    onChange={ (e)=>setJobDescription(e.target.value)} />
                <input type="text" 
                placeholder={oldJobData.job_location}
                    required
             
                    onChange={ (e)=>setJobLocation(e.target.value)} />
                <br /><br /><br />
                <br /><br />

                {/* <DatePicker style={datepickerStyle}
   value={fromdate}
   dateFormat="yyyy/MM/dd"
    // onChange={(date) => {
    // //   const d = new Date(date).toLocaleDateString('fr-FR');
    // //   console.log(d);
    // //   setFromDate(d);
    // }}
                    placeholder="Enter the From Date" />

                <DatePicker 
                //  onChange={ (e)=>setToDate(e.target.value)}
                //  value={fromdate}
                style={datepickerStyle}
                    placeholder="Enter the To Date" /> */}
<input type="text"
onFocus={(e) => (e.target.type = "date")}
onBlur={(e) => (e.target.type = "text")}
placeholder={oldJobData.from_date}
              onChange={ (e)=>setFromDate(e.target.value)}
                 />
                 <input type="text"
                 onFocus={(e) => (e.target.type = "date")}
                 onBlur={(e) => (e.target.type = "text")}
                 placeholder={oldJobData.to_date}
                 onChange={ (e)=>setToDate(e.target.value)}
            />
                <br /><br /><br />
                <br /><br />
                <input type="number"
                placeholder={oldJobData.wage_per_day}
              onChange={ (e)=>setWagePerDay(e.target.value)}
                 />
                <input
                placeholder={oldJobData.phone_number}
                    onChange={ (e)=>setPhoneNumber(e.target.value)}
               type='text'
                 pattern="[0-9]{10}"required />
                  <img className="imgcont" src="https://freedesignfile.com/upload/2019/08/Business-woman-at-the-desk-is-working-on-the-laptop-computer-vector.jpg" alt="My Image" />
                <input onClick={formSubmit} type="button" value="Save Changes" />


             

            </div>
        </>
    );
}
export default EditJob;
