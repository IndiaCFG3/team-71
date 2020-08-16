import React from "react";
import {Link, useLocation} from 'react-router-dom';
import { useEffect } from "react";
import api from "../Utils/api";
import { useState } from "react";

const Teacher = () => {
  const [school,setSchool] = useState({name:'',principalName:''})

  const id = useLocation().state

  useEffect(()=>{
    (async function () {
      const school = await api.get(`/schools/${id}`);
      console.log(school.data)
      setSchool(school.data);
    })();

  },[])
  return (
    <div>
<div className="page-content">

<div data-height="150" className="page-title-bg bg-20"></div>
<div data-height="150" className="page-title-bg dark-mode-tint"></div>
<div data-height="150" className="page-title-bg opacity-90 bg-highlight"></div>

<div className="page-title-small color-white bottom-30">
    <i className="fa fa-arrow-left back-button"></i>TeachersInfo
    <a href="#" data-menu="menu-main" className="shadow-huge scale-box bg-fade-gray2-dark" id="UserProfileImage"></a>
</div>

<div id="recipesPinboard">

</div>



</div>
<div className="content-boxed bg-theme shadow-large bottom-30">
{/* <img src="./images/schools/banner9.jpg" className="card-img-top" alt="..." /> */}
<h2 className="center-text font-800 font-30 uppercase">{school.name}</h2>

<p className="center-text under-heading opacity-70  bottom-0"><span className="color-highlight">Principal: {school.principalName}</span></p>

</div>
<div className="content-boxed bg-theme shadow-large bottom-30">
{/* <img src="./images/schools/banner9.jpg" className="card-img-top" alt="..." /> */}
<h2 className="center-text font-800 font-30 uppercase">teacher-1</h2>

<p className="center-text under-heading opacity-70  bottom-0"><span className="color-highlight">Description of teacher-1 </span></p>


<div className="content right-20 left-20">
    <a className="top-30 button button-m round-small button-full shadow-small button-border color-highlight border-highlight bottom-40">
      View Details
    </a>
  </div>
</div>
    </div>
    
  );
}

export default Teacher;