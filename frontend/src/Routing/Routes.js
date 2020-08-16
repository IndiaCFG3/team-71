import React from 'react';
import { Switch } from 'react-router-dom';
import { connect } from "react-redux";

import Register from '../Components/Auth/Register';
import Login from '../Components/Auth/Login';

import PrivateRoute from './PrivateRoute';
import DefaultLayoutRoute from './DefaultLayout';
import DashBoard from '../Components/DashBoard';
import NotFound from '../Components/NotFound';

import OurAssociates from '../Components/OurAssociates';
import OurSchools from '../Components/OurSchools';
// import AssociatedSchool from '../Components/AssociatedSchool';
import AssociatedSchool from '../Components/AssociatedSchool'
import Teacher from '../Components/Teacher';

const Routes = ({auth,isAuthenticated}) => {
  return (
    // <section className="container">
      <Switch>
        <DefaultLayoutRoute exact path="/register" component={Register} />
        <DefaultLayoutRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={DashBoard} />


        <PrivateRoute exact path="/our-associates" component={OurAssociates} />
        <PrivateRoute exact path="/our-schools" component={OurSchools} />
        <PrivateRoute exact path="/my-school" component={AssociatedSchool} />
        <PrivateRoute exact path="/teacher" component={Teacher} />
{/* 
        <PrivateRoute exact path="/dashboard" component={DashBoard} />
        <PrivateRoute exact path="/dashboard" component={DashBoard} /> */}




        {/* <PrivateRoute exact path="/myProfile" component={DashBoard} /> */}

        {
          isAuthenticated ?
          <PrivateRoute component={NotFound} />
          :
          <DefaultLayoutRoute component={NotFound} />

        }
      </Switch>
    /* </section> */
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Routes);
