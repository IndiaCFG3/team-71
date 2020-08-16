import React from "react";
import {Link} from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";
import api from "../Utils/api";
import { useState } from "react";

const OurSchools = () => {

  const [schools,setSchools] = useState(null)
  useEffect(()=>{

    (async function () {
      const schools = await api.get('/schools');
      console.log(schools.data)
      setSchools(schools.data);
    })();

  },[])
  return (
    <div>
<div id="page-preloader">
      <div className="loader-main"><div className="preload-spinner border-highlight"></div></div>
    </div>


<div className="page-content">

    <div data-height="150" className="page-title-bg bg-20"></div>
    <div data-height="150" className="page-title-bg dark-mode-tint"></div>
    <div data-height="150" className="page-title-bg opacity-90 bg-highlight"></div>

    <div className="page-title-small color-white bottom-30">
        <h1 onclick="window.location='dashboard.html'"><i className="fa fa-arrow-left back-button"></i>Schools</h1>
        <a href="#" data-menu="menu-main" className="shadow-huge scale-box bg-fade-gray2-dark" id="UserProfileImage"></a>
    </div>

    <div id="recipesPinboard">

    </div>


    {/* <div className="content-boxed bg-theme shadow-large bottom-30">
        <h2 className="center-text font-800 font-30 uppercase">My Assigned School</h2>
        <p className="center-text under-heading opacity-70 font-12 bottom-0"><span className="color-highlight">School Name</span></p>

        <div className="content right-20 left-20">
            <a className="top-30 button button-m round-small button-full shadow-small button-border color-highlight border-highlight bottom-40">
              View Details
            </a>
          </div>
</div> */}
  {
    schools && schools.map((school,index)=>{

      return(
        <div key={index} className="content-boxed bg-theme shadow-large bottom-30">
    {/* <img src="./images/schools/banner9.jpg" className="card-img-top" alt="..." /> */}
      <h2 className="center-text font-800 font-30 uppercase">{school.name}</h2>

    <p className="center-text under-heading opacity-70  bottom-0"><span className="color-highlight">Principal: {school.principalName}</span></p>


    <div className="content right-20 left-20">
        <Link to={{pathname:'/teachers',state:school._id}} className="top-30 button button-m round-small button-full shadow-small button-border color-highlight border-highlight bottom-40">
          View Teachers
        </Link>
      </div>
      <div className="content right-20 left-20">
        <a className="top-30 button button-m round-small button-full shadow-small button-border color-highlight border-highlight bottom-40">
          Edit School Details
        </a>
      </div>
   </div>
      )
    })
  }
 {/* <div className="content-boxed bg-theme shadow-large bottom-30">
    <img src="./images/schools/banner9.jpg" className="card-img-top" alt="..." />
    <h2 className="center-text font-800 font-30 uppercase">School-1</h2>

    <p className="center-text under-heading opacity-70  bottom-0"><span className="color-highlight">Description of school-1</span></p>


    <div className="content right-20 left-20">
        <a className="top-30 button button-m round-small button-full shadow-small button-border color-highlight border-highlight bottom-40">
          View Details
        </a>
      </div>
   </div> */}
      </div>
    </div>
    
  );
}

export default OurSchools;