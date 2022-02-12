import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import axios from 'axios';
import PataintHeader from './display/header';
import Login from './display/login';
import Home from './display/home';
import Registration from './display/registration';
import Style from './display/style';
import Doctor from './display/Set_Appointment';
import Cabin from './display/Set_Cabin';
import Labtest from './display/Set_labtest';
import D_review from './display/doctor_review';
import C_review from './display/cabin_review';
import L_review from './display/lab_review';
import Profile from './display/profile';
import EditProfile from './display/editProfile';
import Recovery from './display/recovery';
import Rating from './display/rating';
import Admin from './display/admin';
import Service from './display/service';
import Review from './display/review'
import Logout from './display/logout';




import AdminHeader from './admin/AdminHeader';
import AdminDashboard from './admin/AdminDashboard';
import AdminProfile from './admin/AdminProfile';
import EditAdminProfile from './admin/EditAdminProfile'; 
import DoctorList from './admin/DoctorList';
import AddDoctor from './admin/AddDoctor';
import DeleteDoctor from './admin/DeleteDoctor';
import Nurse from './admin/NurseList';
import AddNurse from './admin/AddNurse';
import DeleteNurse from './admin/DeleteNurse';
import Pataint from './admin/PataintList';
import DeletePataint from './admin/DeletePataint';
import Pharmacy from './admin/PharmacyList';
import AddEmployee from './admin/AddPharmacyEmployee';
import DeleteEmployee from './admin/DeletePharEmpl';





import DoctorHeader from './doctor/DoctorHeader';
import DoctorDashboard from './doctor/DoctorDashboard';
import DoctorProfile from './doctor/DoctorProfile';
import EditDoctorProfile from './doctor/DoctorProfileEdit';


var token=null;
if(localStorage.getItem('user'))
{
  
  var obj = JSON.parse(localStorage.getItem('user'));
  token = obj.token;       
}
axios.defaults.baseURL="http://localhost:8000/api";
axios.defaults.headers.common['Authorization']=token;
ReactDOM.render(
  <React.StrictMode>
    <Router>
    
      <Switch>
        
        <Route exact path='/'>

          <Login/>

        </Route>
        <Route exact path='/home'>

         <Home/>

        </Route>
        <Route exact path='/registration'>

          <Registration/>

        </Route>
        <Route exact path='/doctor_appointment/:id/:name'>

          <Doctor/>

        </Route>
        <Route exact path='/cabin_appointment/:id/:name'>

          <Cabin/>

        </Route>
        <Route exact path='/lab_appointment/:id/:name'>

          <Labtest/>

        </Route>
        <Route exact path='/doctor_review/:id/:name'>

          <D_review/>

        </Route>
        <Route exact path='/cabin_review/:id/:name'>

          <C_review/>

        </Route>
        <Route exact path='/lab_review/:id/:name'>

          <L_review/>

        </Route>
        <Route exact path='/profile'>

          <Profile/>

        </Route>
        <Route exact path='/editprofile/:id/:name/:password/:phone/:email/:address'>

          <EditProfile/>

        </Route>
        <Route exact path='/recovery'>

          <Recovery/>

        </Route>
        <Route exact path='/rating'>

          <Rating/>

        </Route>
        <Route exact path='/admin'>

          <Admin/>

        </Route>
        <Route exact path='/histray'>

          <Service/>

        </Route>
        <Route exact path='/review'>

          <Review/>

        </Route>
        <Route exact path='/logout'>

          <Logout/>

        </Route>
        








        

        <Route exact path='/AdminDashboard'>
          <AdminHeader/>
          <AdminDashboard/>

        </Route>
        <Route exact path='/AdminProfile'>
          <AdminHeader/>

          <AdminProfile/>

        </Route>
        <Route exact path='/EditAdminProfile/:username/:name/:password/:phone/:statement/:address'>
          <AdminHeader/>

          <EditAdminProfile/>

        </Route>
        <Route exact path='/DoctorList'>
          <AdminHeader/>

          <DoctorList/>

        </Route>
        <Route exact path='/AddDoctor'>
          <AdminHeader/>

          <AddDoctor/>

        </Route>
        <Route exact path='/DeleteDoctor/:name/:username/:phone/:email/:address'>
          <AdminHeader/>

          <DeleteDoctor/>

        </Route>
        <Route exact path='/PataintList'>
          <AdminHeader/>
          <Pataint/>

        </Route>
        <Route exact path='/DeletePataint/:name/:username/:phone/:email/:address'>
          <AdminHeader/>
          <DeletePataint/>
        </Route>

        <Route exact path='/NurseList'>
          <AdminHeader/>

          <Nurse/>

        </Route>
        <Route exact path='/AddNurse'>
          <AddNurse/>


        </Route>
        <Route exact path='/DeleteNurse/:name/:username/:phone/:email/:address'>
          <AdminHeader/>

          <DeleteNurse/>

        </Route>

        <Route exact path='/PharmacyEmployee'>
          <AdminHeader/>

          <Pharmacy/>

        </Route>
        <Route exact path='/AddEmployee'>
          <AddEmployee/>


        </Route>
        <Route exact path='/DeleteEmployee/:name/:username/:phone/:email/:address'>
          <AdminHeader/>

          <DeleteEmployee/>

        </Route>









        <Route exact path='/DoctorDashboard'>
          <DoctorHeader/>
          <DoctorDashboard/>

        </Route>
        <Route exact path='/DoctorProfile'>
          <DoctorHeader/>
          <DoctorProfile/>

        </Route>
        <Route exact path='/EditDoctorProfile/:username/:name/:password/:phone/:address'>
          <AdminHeader/>

          <EditDoctorProfile/>

        </Route>
        


        
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
