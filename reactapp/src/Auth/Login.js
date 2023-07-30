import React, { useState,useEffect } from 'react'
import { Link,useNavigate  } from "react-router-dom"; //REACT HOOK 
import axios from "axios"
import "../Styles/login.css"

const Login = () => {
 
  const baseURl='https://8080-ebcbaeeffeefeacfddbabccaafbedddce.project.examly.io/login'
   
  const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [password,setpassWord]=useState("")
const [stateid,setStateId]=useState("")
const[logstate,setLogstate]=useState({})
const[logdata,setLogdata]=useState("")
const idURL=`https://8080-ebcbaeeffeefeacfddbabccaafbedddce.project.examly.io/login?email=${email}&password=${password}`
  const [logAcess,setLogAccess]=useState(false)
  const [localLogData,setLocalogdata]=useState({})


const checkLogin=(response)=>{
  


  


  if(response=="user"|| response=="admin" || response=="jobseeker"){
  
 if(response=="user")   
 {
  const userUrl=`http://localhost:8080/api/user/fetch/withemail/${email}`
  axios.get(userUrl, 

    ) 
    .then((response) => {
 
    //  setLogdata(response.data)

 const loguserdata={
      "email":response.data.email,
      "password":response.data.password,
      "userId":response.data.id
  
    }
    
    

      localStorage.setItem('logdata', JSON.stringify(loguserdata));
    }, (error) => {
      console.log(error);
     
    });
navigate("/home")

}
 if(response=="admin")  {
  
  const userUrl=`http://localhost:8080/api/admin/fetch/withemail/${email}`
  axios.get(userUrl, 

    ) 
    .then((response) => {
 
    //  setLogdata(response.data)
alert(response.data.email)
    
      var loguserdata={
        "email":response.data.email,
        "password":response.data.password,
        "userId":response.data.adminId
    
      }
      localStorage.setItem('logdata', JSON.stringify(loguserdata));
    }, (error) => {
      console.log(error);
     
    });
 navigate("/admin/alljobs")

  }
 if(response=="jobseeker"){
  alert("seeker")
  const userUrl=`http://localhost:8080/api/trainer/fetch/withemail/${email}`
  axios.get(userUrl, 

    ) 
    .then((response) => {
 
    //  setLogdata(response.data)

    
      var loguserdata={
        "email":response.data.email,
        "password":response.data.password,
        "userId":response.data.id
    
      }
      localStorage.setItem('logdata', JSON.stringify(loguserdata));
    }, (error) => {
      console.log(error);
     
    });
 navigate("/joblist")

  

}
   
  }else{

    
alert("Invalid Email or Password")
  }
}
  const formSubmit=(e)=>{
   // alert(idURL)
 //alert(email+""+password)
    e.preventDefault();
    // if(email&&mobilenumber&&password&&username&&confirmPassword!=''){
    //   alert("All the field are mandetory");
    //   return
    // }
// if(confirmPassword!=password){alert("Passowords doesnt match")
// setConfirmPassword("")
// setPassword("")
// return
// }
axios.get(idURL, 

  )
  .then((response) => {
  if(response.data===null) console.log("null error")
   checkLogin(response.data)
   
  }, (error) => {
    console.log(error);
   
  });
  }
  

/*useEffect(() => {


return null;
}, [])*/

  return (

    <div>
    {/* <JSNavbar/> */}
   <div className="main-con">
  
     <div className="ct-con">
       <div className="im-con">
         <img
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp4bOQmfAXjDlXW_hMOAKX0P_4y_LRvdXmEw&usqp=CAU"
           alt="website login"
           className="ima"
         />
       </div>
       <form className="form-el">
         <h1 className="header">YOGA PRECEPTOR LOGIN</h1>
         <div className="inp-con">
           <label htmlFor="user" className="lab">
         Email
           </label>
           <input
             id="user"
             onChange={(e)=>setEmail(e.target.value)}
             placeholder="Enter User Name"
             className="inp"
             type="email"
    
        
           />
         </div>
         <div className="inp-con">
           <label htmlFor="pin" className="lab">
             PASSWORD
           </label>
           <input
             placeholder="Enter Password"
             id="pin"
             className="inp"
           
             onChange={(e)=>setpassWord(e.target.value)}
             type="password"
      
           />
         </div>
        
           <button 
           onClick={formSubmit}
           className="but" type="button">Login
           </button>
        
           <a href='/signup'>New User</a>
       </form>
     </div>
   </div>
   </div>
  )
}

export default Login