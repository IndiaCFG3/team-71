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
import RegisterTeacher from '../Components/RegisterTeacher';
import RegisterStudent from '../Components/RegisterStudent';
import RegisterTeam from '../Components/RegisterTeam';
import RegisterSchool from '../Components/RegisterSchool';
import RegisterAssociate from '../Components/RegisterAssociate';
import ClassObservationForm from '../Components/ClassObservationForm';
 import UnitEvaluationForm from '../Components/UnitEvaluationForm';
import ReactCharts from '../Components/ReactCharts';
import Sts from '../Components/Sts';


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
        <PrivateRoute exact path="/teachers" component={Teacher} />
        <PrivateRoute exact path="/register-team" component={RegisterTeam} />
        <PrivateRoute exact path="/register-school" component={RegisterSchool} />
        <PrivateRoute exact path="/register-teacher" component={RegisterTeacher} />
        <PrivateRoute exact path="/register-student" component={RegisterStudent} />
        <PrivateRoute exact path="/register-associates" component={RegisterAssociate} />
        <PrivateRoute exact path="/class-observation-form" component={ClassObservationForm} />
        <PrivateRoute exact path="/unit-evaluation-form" component={UnitEvaluationForm} />
<PrivateRoute exact path="/dataVisualization" component={ReactCharts} />
<PrivateRoute exact path="/sts" component={Sts} />
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
