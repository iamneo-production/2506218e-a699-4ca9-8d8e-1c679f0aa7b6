<<<<<<< HEAD
import { Routes, Route } from "react-router-dom"

import Login from './Auth/Login';
import Signup from "./Auth/Signup";
import Addjob from './CustomerSide/Addjob'
import ApplyJob from "./JobSeekerSide/ApplyJob";
import EditJob from "./CustomerSide/EditJob";
import CustomerHomePage from "./CustomerSide/CustomerHomePage";
import ViewAppliedCandiates from "./CustomerSide/ViewAppliedCandiates";
import MyJobs from "./CustomerSide/MyJobs";
import JobList from "./JobSeekerSide/JobList";
import AppliedJobs from "./JobSeekerSide/AppliedJobs";
import AdminHomePage from './AdminSide/AdminHomePage'
import AddJobSeeker from "./AdminSide/AddJobSeeker";

import Profiles from "./AdminSide/AdminOpenings";
import AdminJobs from "./AdminSide/AdminJobs";
import AdminCandidates from "./AdminSide/AdminCandidates";
import AdminEditAppliedJob from "./AdminSide/AdminEditAppliedJob";
import EditAppliedJob from "./JobSeekerSide/EditAppliedJob";
function App() {
  return (
<Routes>
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route exact path="/" element={ <Login/> } />
            -----------------------//USER//-----------------------
        <Route path="/home" element={ <CustomerHomePage/> } />
        
        <Route path="myjobs/editjob/*" element={ <EditJob/> } /> 
        <Route path="home/alljobs" element={ <CustomerHomePage/> } />
        <Route path="home/addjob/" element={ <Addjob/> } /> 
        <Route path="/appliedcandidates" element={ <ViewAppliedCandiates/> } /> 
        <Route path="/myjobs" element={<MyJobs />}/>
        -----------------------//TRAINER//-----------------------
        <Route path="/joblist/applyjob/*" element={ <ApplyJob/> } /> 
        <Route path="/joblist" element={ <JobList/> } /> 
        <Route path="/appliedjobs" element={ <AppliedJobs/> } /> 
        <Route path="/appliedjob/editjob/*" element={ <EditAppliedJob/> } /> 

 -----------------------//ADMIN//-----------------------
 //<Route path="/admin/home" element={ <AdminHomePage/> } />  
 <Route path="/admin/addjobseeker" element={ <AddJobSeeker/> } />  
 //<Route path="/admin/viewprofiles" element={ <Profiles/> } /> 
 <Route path="/admin/alljobs" element={ <AdminJobs/> } />  
 <Route path="/admin/alljobs/editjob/*" element={ <EditJob/> } />  
 <Route path="/admin/allcandidates" element={ <AdminCandidates/> } />  
 <Route path="/admin/editappliedjob/*" element={ <AdminEditAppliedJob/> } />  
      </Routes>
  );
}


export default App;
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.j</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 7489cb0b60a5a4583ef25db5202af3cb2da80f54
