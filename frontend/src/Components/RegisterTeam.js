import React from "react";
import {Link} from 'react-router-dom';

const RegisterTeam = () => {
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

        <div id="newsPinboard">

        </div>
        <div className="content-boxed bg-theme shadow-large bottom-30">
            <h2 className="center-text font-800 font-30 uppercase">Student Teachers</h2>


                                    <table className="mb-0 table table-striped">
                                        <thead>
                                        <tr>
                                            <th>Student Name</th>
                                            <th>Remove</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td> awfgsdhfjgkuhlij;ok'p</td>
                                            <td>
                                              <a className="mb-2 mr-2 btn btn-danger" id="<?php echo $result['id'];?>" href="prescription_update.php?id=<?php echo e_d('e',$result['id']); ?>">Remove</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div className="content right-20 left-20">
                                      <a className="top-30 button button-m round-small button-full shadow-small button-border color-highlight border-highlight bottom-40">
                                        Add a Student Teacher
                                      </a>
                                    </div>


        </div>
        <div className="content-boxed bg-theme shadow-large bottom-30">
            <h2 className="center-text font-800 font-30 uppercase">Existing Teams</h2>


                                    <table className="mb-0 table table-striped">
                                        <thead>
                                        <tr>
                                            <th>Team Name</th>
                                            <th>View/add Students</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td> awfgsdhfjgkuhlij;ok'p</td>
                                            <td>
                                              <a className="mb-2 mr-2 btn btn-primary" id="<?php echo $result['id'];?>" href="prescription_update.php?id=<?php echo e_d('e',$result['id']); ?>">View/Update</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>



        </div>

        <div className="content-boxed bg-theme shadow-large bottom-30">
            <h5 className="center-text font-800 font-30 uppercase">Add Team</h5>
            <form action="functionality/prescription_act.php" method="POST">
                                      <b>Team Name</b>
                                      <div className="table-responsive">
                                        <table className="table " id="dynamic_field">
                                          <tr>
                                            <td><input type="text" name="symptoms[]" placeholder="Team Name" className="form-control name_list transparent-input" /></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </form>
                                    <div className="content right-20 left-20">
                                      <a className="top-30 button button-m round-small button-full shadow-small button-border color-highlight border-highlight bottom-40">
                                        Submit
                                      </a>
                                    </div>
        </div>


    </div>

       </div>
  );
}

export default RegisterTeam;
