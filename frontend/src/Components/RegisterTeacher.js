import React from "react";
import {Link} from 'react-router-dom';

const RegisterTeacher = () => {
  return (
    <div>
    <div className="page-content">

        <div data-height="150" className="page-title-bg bg-20"></div>
        <div data-height="150" className="page-title-bg dark-mode-tint"></div>
        <div data-height="150" className="page-title-bg opacity-90 bg-highlight"></div>

        <div className="page-title-small color-white bottom-30">
            <h1 onclick="window.location='dashboard.html'"><i className="fa fa-arrow-left back-button"></i>Registration Form</h1>
            <a href="#" data-menu="menu-main" className="shadow-huge scale-box bg-fade-gray2-dark" id="UserProfileImage"></a>
        </div>


        <div className="content-boxed bg-theme shadow-large bottom-30">
        <h5 className="center-text font-800 font-30 uppercase">Teacher Registration</h5>
            <form action="functionality/prescription_act.php" method="POST">
                                      <b>Teacher Name</b>
                                      <div className="table-responsive">
                                        <table className="table " id="dynamic_field">
                                          <tr>
                                            <td><input type="text" name="teachername" placeholder="Enter Teacher Name" className="form-control name_list transparent-input" /></td>
                                          </tr>
                                        </table>
                                      </div>
																			<b>Address</b>
                                      <div className="table-responsive">
                                        <table className="table " id="dynamic_field2">
                                          <tr>
                                            <td><input type="text" name="address" placeholder="Enter Address" className="form-control name_list transparent-input" /></td>
                                          </tr>
                                        </table>
                                      </div>
																			<b>Email</b>
                                      <div className="table-responsive">
                                        <table className="table " id="dynamic_field4">
                                          <tr>
                                            <td><input type="email" name="mail" placeholder="Enter Email" className="form-control name_list transparent-input" /></td>
                                          </tr>
                                        </table>
                                      </div>
																			<b>Phone Number</b>
                                      <div className="table-responsive">
                                        <table className="table " id="dynamic_field3">
                                          <tr>
                                            <td><input type="text" name="phonenumber" placeholder="Enter Phone Number" className="form-control name_list transparent-input" /></td>
                                          </tr>
                                        </table>
                                      </div>
                                      <b>Password</b>
                                      <div className="table-responsive">
                                        <table className="table " id="dynamic_field3">
                                          <tr>
                                            <td><input type="text" name="phonenumber" placeholder="Enter Password" className="form-control name_list transparent-input" /></td>
                                          </tr>
                                        </table>
                                      </div>
                                      <b>My Description</b>
                                      <div className="table-responsive">
                                        <table className="table " id="dynamic_field3">
                                          <tr>
                                            <td><input type="text" name="phonenumber" placeholder="Enter Description" className="form-control name_list transparent-input" /></td>
                                          </tr>
                                        </table>
                                      </div>


                                      <div className="content right-20 left-20">
                                        <a className="top-30 button button-m round-small button-full shadow-small button-border color-highlight border-highlight bottom-40">
                                          Submit
                                        </a>
                                      </div>
                                  </form>

    </div>
    </div>
       </div>
  );
}

export default RegisterTeacher;
