import React from "react";
import "./navbar_style.css";
import { useNavigate } from "react-router-dom";
const CustomerNavBar = () => {
 const nav1=useNavigate();
    const logout=()=>{
       
        localStorage.clear();
        nav1("/login")
    }
  return (
    <nav className="mn1">
            <div className="lg1">
                <h2>
                    <span>Y</span>oga preceptor
                </h2>
            </div>

            <div className="ml1">
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="home/addjob/">Add Openings</a>
                    </li>
                    <li>
                        <a href="/appliedcandidates">Applied Candidates</a>
                    </li>
                    <li>
                        <a href="/myjobs">My Jobs</a>
                    </li>
                </ul>
            </div>

            <div className="e1">
                <ul>
                    <li>
                        <a onClick={logout} href="#">Logout</a>
                    </li>
                </ul>

            </div>
        </nav>
  );
};

export default CustomerNavBar;
