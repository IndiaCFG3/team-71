import React from "react";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div id="footer-menu" class="footer-menu-5-icons footer-menu-style-1">
        <a href="trending.html">
            <i data-feather="heart" data-feather-line="1" data-feather-size="21" data-feather-color="red2-dark" data-feather-bg="red2-fade-light"></i>
            <span>Schools</span>
        </a>
        <a href="recipe.html">
            <i data-feather="globe" data-feather-line="1" data-feather-size="21" data-feather-color="green1-dark" data-feather-bg="green1-fade-light"></i>
            <span>Other Associates</span>
        </a>
        <a href="dashboard.html" class="active-nav4">
            <i data-feather="home" data-feather-line="1" data-feather-size="21" data-feather-color="blue2-dark" data-feather-bg="blue2-fade-dark"></i>
            <span>Home</span>
        </a>
        <a href="news.html">
            <i data-feather="file" data-feather-line="1" data-feather-size="21" data-feather-color="brown1-dark" data-feather-bg="brown1-fade-light"></i>
            <span>About Us</span>
        </a>
        <a href="settings.html">
            <i data-feather="settings" data-feather-line="1" data-feather-size="21" data-feather-color="gray2-dark" data-feather-bg="gray2-fade-light"></i>
            <span>Settings</span>
        </a>
        <div class="clear"></div>
    </div>
    // <div className="font-small pt-4 " style={{backgroundColor:'#040B1C', color:"white",width:'100%'}}>
    //   <div className="text-center pl-5 text-md-left container-fluid">
    //     <div className="row">
    //       <div className="col-sm-6">
    //         <h3 className="title">Meet the developer</h3>
    //           <p><i className="fa fa-user" aria-hidden="true"></i> Rohan Dutt</p>
    //           <p><i className="fa fa-phone" aria-hidden="true"></i> 9634886259</p>
    //           <p><i className="fa fa-envelope" aria-hidden="true"></i> duttrohan0302@gmail.com</p>
    //           <p><i className="fa fa-github" aria-hidden="true"></i>&nbsp;<a href='https://github.com/duttrohan0302'>cyberRohan</a></p>
    //           <p><i className="fa fa-linkedin" aria-hidden="true"></i>&nbsp;<a href='https://www.linkedin.com/in/rohandutt0302/'>Rohan Dutt</a></p>

    //       </div>
    //       <div className="col-sm-6">
    //         <ul>
    //           <li className="list-unstyled">
    //             <h4>Links</h4>
    //           </li>
    //           <li className="list-unstyled">
    //             <Link to="/">Home</Link>
    //           </li>
    //           <li className="list-unstyled">
    //             <Link to="/create-event">Team</Link>
    //           </li>
    //           <li className="list-unstyled">
    //             <Link to="/see-invitations">Go to the platform</Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="footer-copyright pl-5 py-1" style={{backgroundColor:'white',color:'black'}}>
    //     <div>
    //       &copy; Copyright {new Date().getFullYear()} Team 71&reg; Hackathon @ JPMC Code For Good | All Rights Reserved
    //     </div>
    //   </div>
    // </div>
  );
}

export default Footer;