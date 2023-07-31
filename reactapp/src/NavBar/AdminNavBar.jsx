import React from "react";
import "./navbar_style3.css";
import { useNavigate } from "react-router-dom";
const AdminNavBar = () => {
    const nav1=useNavigate();
    const logout=()=>{
       
        localStorage.clear();
        nav1("/login")
    }
  return (
    <nav className="mn2">
            <div className="lg2">
                <h2>
                    <span>Y</span>oga preceptor
                </h2>
            </div>

            <div className="ml2">
                <ul>
                    <li>
                        <a href="/admin/alljobs">Openings</a>
                    </li>
                    <li>
                        <a href="/admin/allcandidates">Candidates</a>
                    </li>
                </ul>
            </div>

            <div className="e2">
                <ul>
                    <li>
                    <a onClick={logout} href="#">Logout</a>
                    </li>
                </ul>

            </div>
        </nav>
  );
};

export default AdminNavBar;
