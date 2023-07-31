import React from 'react'
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import "../Styles/addjob.css"
import { DatePicker } from 'antd';
import axios from "axios"
import CustomerNavBar from '../NavBar/CustomerNavBar';
function Addjob() {
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
    const baseURl='http://localhost:8080/api/user/addjob'


    const [jobdescription,setJobDescription]=useState("");
    const [joblocation,setJobLocation]=useState("");
    const [phonenumber,setPhoneNumber]=useState("");
    const [fromdate,setFromDate]=useState("");
    const [todate,setToDate]=useState("");
    const [wageperday,setWagePerDay]=useState("");
    const [stateuserId,setStateUserId]=useState("");
  
    let id = (Math.random() + 1).toString(36).substring(7);
  
  const jobdata={
    "jobId":id,
    "activeStatus":"yes",
    "from_date":fromdate,
    "job_description":jobdescription,
    "job_location":joblocation, //JSON FOR JOB
    "to_date":todate,
    "userId":stateuserId,
    "wage_per_day":wageperday,
    "phone_number":phonenumber
  }

  useEffect(() => {
  //  const items = JSON.parse(localStorage.getItem('userId'));
    const data = JSON.parse(localStorage.getItem("logdata"));
   setStateUserId(data.userId)
  }, []);
  const formSubmit=()=>{
    //alert("helo")
   console.log(jobdata)
    // e.preventDefault();
    // if(jobdescription&&joblocation&&fromdate&&todate&&wageperday!=''){
    //   alert("All the field are mandetory");
    //   return
    // }

axios.post(baseURl, 
jobdata
)
.then((response) => {
  alert("job added sucessfull")
  nav1("/home")
}, (error) => {
  console.log(error);
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
        <div> <CustomerNavBar />
        <br></br>
            <div className="mid">
                <br /><br />
                <br /><br />
                <br />
                <input
                
                    type="text" placeholder="Enter the Job Description"
                    required
                    
                    onChange={ (e)=>setJobDescription(e.target.value)} />
                    <input type="text" placeholder="Enter the Job Location"
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
                         id="startDate" 
                       placeholder="Enter the From date "
                       onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")}
                       onChange={ (e)=>setFromDate(e.target.value)}
                  />
                 <input type="text"
                         id="endDate" 
                       placeholder="Enter the To date "
                       onFocus={(e) => (e.target.type = "date")}
                       onBlur={(e) => (e.target.type = "text")}
                       onChange={ (e)=>setToDate(e.target.value)}
                  />
                <br /><br /><br />
                <br /><br />
                <input type="text"
              onChange={ (e)=>setWagePerDay(e.target.value)}
                 placeholder="Enter the Wage for day" />
                <input
                  maxlength="10"
                  pattern="[0-9]{10}"
                    onChange={ (e)=>setPhoneNumber(e.target.value)}
                 type="number" placeholder="Enter the Phone Number"
                 required />
                  <img className="imgcont" src="https://freedesignfile.com/upload/2019/08/Business-woman-at-the-desk-is-working-on-the-laptop-computer-vector.jpg" alt="My Image" />
                <input onClick={formSubmit} type="button" value="Add Job" />
                <br />
                <br />

            </div>
            </div>
        </>
    );
}
export default Addjob;