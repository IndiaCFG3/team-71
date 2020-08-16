import React from "react";
import {Link} from 'react-router-dom';

const OurAssociates = () => {
  return (
    <div>

  <div className="header header-fixed header-logo-app header-auto-show">
        <a href="dashboard.html" className="header-subtitle">Back</a>
    <a href="#" data-back-button className="header-icon header-icon-1"><i className="fas fa-arrow-left"></i></a>
    <a href="#" data-toggle-theme className="header-icon header-icon-2"><i className="fas fa-lightbulb"></i></a>
    <a href="settings.html" className="header-icon header-icon-3"><i className="fas fa-cog"></i></a>
  </div>

    <div className="page-content">

        <div data-height="150" className="page-title-bg bg-20"></div>
        <div data-height="150" className="page-title-bg dark-mode-tint"></div>
        <div data-height="150" className="page-title-bg opacity-90 bg-highlight"></div>

        <div className="page-title-small color-white bottom-30">
            <h1 onclick="window.location='dashboard.html'"><i className="fa fa-arrow-left back-button"></i>Our Associates</h1>
            <a href="#" data-menu="menu-main" className="shadow-huge scale-box bg-fade-gray2-dark" id="UserProfileImage"></a>
        </div>





     <div className="content-boxed bg-theme shadow-large bottom-30">
        <h2 className="center-text font-800 font-30 uppercase">Associate 1</h2>

        <p className="center-text under-heading opacity-70  bottom-0"><span className="color-highlight">Description of Associate-1</span></p>


        <div className="content right-20 left-20">
            <a className="top-30 button button-m round-small button-full shadow-small button-border color-highlight border-highlight bottom-40">
              Edit Details
            </a>
          </div>
       </div>
       </div>
       </div>
  );
}

export default OurAssociates;
