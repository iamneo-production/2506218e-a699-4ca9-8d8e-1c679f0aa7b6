import React from "react";
import "./navbar_style2.css";
import { useNavigate } from "react-router-dom";
const JobseekerNavbar = () => {

    const nav1=useNavigate();
    const logout=()=>{
       
        localStorage.clear();
        nav1("/login")
    }
  return (
    <nav className="mn">
            <div className="lg">
                <h2>
                    <span>Y</span>oga preceptor
                </h2>
            </div>

            <div className="ml">
                <ul>
                    <li>
                        <a href="/joblist">Home</a>
                    </li>
                    <li>
                        <a href="/appliedjobs">Applied Jobs</a>
                    </li>
                </ul>
            </div>

            <div className="e">
                <ul>
                    <li>
                       <a onClick={logout} href="#">Logout</a>
                    </li>
                </ul>

            </div>
        </nav>
  );
};

export default JobseekerNavbar;
