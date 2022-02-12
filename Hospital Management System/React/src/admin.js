import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import axios from 'axios';

import Style from './display/style';


import AdminHeader from './admin/AdminHeader';
import AdminDashboard from './admin/AdminDashboard';
import AdminProfile from './admin/AdminProfile';
import EditAdminProfile from './admin/EditAdminProfile'; 
import DoctorList from './admin/DoctorList';
import AddDoctor from './admin/AddDoctor';
import DeleteDoctor from './admin/DeleteDoctor';
import PataintList from './admin/PataintList';
import DeletePataint from './admin/DeletePataint';
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

          <PataintList/>

        </Route>
        <Route exact path='/DeletePataint/:name/:username/:phone/:email/:address'>
          <AdminHeader/>

          <DeletePataint/>

        </Route>

        
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('admin')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();