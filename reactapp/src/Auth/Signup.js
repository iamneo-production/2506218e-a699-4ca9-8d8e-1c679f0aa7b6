import React, { useState } from 'react'
import { useNavigate  } from "react-router-dom";
import axios from "axios"
import signup_side from "../images/signup_side.jpg"
import "../Styles/signup.css"
// import JSNavbar from '../Navbar/JSNavbar'
const Signup = () => {

  const navigate=useNavigate()
  const baseURl=`https://8080-ebcbaeeffeefeacfddbabccaafbedddce.project.examly.io/register/`
  const jobseekerURL='https://8080-ebcbaeeffeefeacfddbabccaafbedddce.project.examly.io/newregister'
  
 // const baseTrainerURl=`http://localhost:8080/api/trainer/register/${userRole}`


  const [email,setEmail]=useState("");
  const [statemobilenumber,setMobilenumber]=useState("");
  const [password,setPassword]=useState("");
  const [username,setUsername]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [userrole,setuserRole]=useState("");
  const [userlog,setUserLog]=useState("")
  const [stateid,setStateId]=useState("")
  let id = (Math.random() + 1).toString(36).substring(7);

const userdata={
  "id":id,
  "email":email,
  "moblieNumber":statemobilenumber,
  "password":password,
  "username":username,
  "userRole":userrole
}

var loguserdata={
  "email":email,
  "password":password,
  "userId":id

}
 
  const formSubmit=(e)=>{
    const jobseeker={
      "id":userdata.id,
      "email":userdata.email,
      "moblieNumber":userdata.statemobilenumber,
      "password":userdata.password,
      "username":userdata.username,
      "userRole":"jobseeker" 
    }
 alert(statemobilenumber)
    e.preventDefault();
    // if(email&&mobilenumber&&password&&username&&confirmPassword!=''){
    //   alert("All the field are mandetory");
    //   return
    // }
if(confirmPassword!==password){alert("Passowords doesnt match")
setConfirmPassword("")
setPassword("")
return
}
axios.post(baseURl, 
userdata
)
.then((response) => {
  alert("user sucessfull")
}).then(()=>{
  localStorage.setItem('logdata', JSON.stringify(loguserdata));
  navigate("/home")
}
, (error) => {
  console.log(error);
});
if(userrole=="jobseeker"){
axios.post(jobseekerURL, 
  jobseeker
  )
  .then((response) => {
    alert("user sucessfull")
  }).then(()=>{
    localStorage.setItem('logdata', JSON.stringify(loguserdata));
    navigate("/joblist")
  }
  , (error) => {
    console.log(error);
  });
}
  }
  return (
    <div className='mcls'>
  
    <div className='cls'>
        <form action="#" className='form'>
        <h2>SIGN IN</h2>

  
  <select required className='box'
  onChange={(e)=>setuserRole(e.target.value)}
  >
  
  <option style={{color: 'grey'}}

    value="" disabled selected hidden>Enter admin/user/jobseeker </option>
  {/* <option value="admin">Admin</option> */}
  <option value="user">User</option>
  <option value="jobseeker">JobSeeker</option>
  </select> 
  <input 
       onChange={ (e)=>setEmail(e.target.value)}
  type='email' name='email' className='box' placeholder='Enter Email'></input>
  <input 
     onChange={ (e)=>setUsername(e.target.value)}
  type='username' name='username' className='box' placeholder='Enter Username'></input>
  <input 
     onChange={ (e)=>setMobilenumber(e.target.value)}
 name='mobilenumber' className='box' placeholder='Enter Mobile number'></input>
  <input
     onChange={ (e)=>setPassword(e.target.value)}
     value={password}
   type='password' name='password' className='box' placeholder='Enter Password'></input>
  <input
  value={confirmPassword}
     onChange={ (e)=>setConfirmPassword(e.target.value)}
   type='password' name='password' className='box' placeholder='Confirm Password'></input>
  <input onClick={formSubmit} value="SIGN IN" id="submit"></input>
  <a href='/login'>Already a user? Login</a>
        </form>
        <div className="side">
          <img src= "https://img.freepik.com/premium-vector/cartoon-doodle-woman-doing-yoga-various-poses_6997-2892.jpg" alt='login_side'></img>
        </div>
    </div>
    </div>
  )
}

export default Signup;
