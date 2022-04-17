import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './display/App.css';
//import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import axios from 'axios';
import PataintHeader from './display/header';
import Login from './display/login';
import Home from './display/home';
import Registration from './display/registration';
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
import NurseDutySet from './admin/NurseDuty';
import Pataint from './admin/PataintList';
import DeletePataint from './admin/DeletePataint';
import Pharmacy from './admin/PharmacyList';
import AddEmployee from './admin/AddPharmacyEmployee';
import DeleteEmployee from './admin/DeletePharEmpl';
import PharmacyDutySet from './admin/PharmacyDuty';
import A_MedicinList from './admin/Admin_MedicinList';
import A_SellerList from './admin/Admin_SellerList';
import AppointmentRequestListAdmin from './admin/SelectAppointmentDate';
import AdminSetAppointmentTime from './admin/PataintAppointmentTimeSet';
import A_DoctorAppointmentList from './admin/DoctorAppointmentList';
import A_LabtestAppointmentList from './admin/LabtestAppointmentList';
import A_LabtestList from './admin/LabTestList';
import A_AddLabtest from './admin/AddLabtest';





import DoctorHeader from './doctor/DoctorHeader';
import DoctorDashboard from './doctor/DoctorDashboard';
import DoctorProfile from './doctor/DoctorProfile';
import EditDoctorProfile from './doctor/DoctorProfileEdit';
import SetTime from './doctor/SetCheckupSchedule';
import Reviewer from './doctor/PataintReview';
import DoctorToPataintAppointment  from './doctor/PataintAppointment';




import PharmacyHeader from './pharmacy/PharmacyHeader';
import P_MedicinList from './pharmacy/MedicinList';
import P_MedicinStatus from './pharmacy/SetStatus';
import P_DeleteMedicin from './pharmacy/DeleteMedicin';
import P_AddMedicin from './pharmacy/Add_Medicine';
import P_EmployeeProfile from './pharmacy/EmployeeProfile';
import P_EditProfile from './pharmacy/EmplyeeProfileEdit';
import P_MedicinSell from './pharmacy/MedicineSell';
import P_SellHistory from './pharmacy/SellerList';




import NurseHeader from './nurse/NurseHeader';
import NurseHome from './nurse/NurseDashboard';
import NurseProfile from './nurse/NursePrifile';
import Nurse_EditProfile from './nurse/NurseEditProfile';
import N_BookedCabin from './nurse/BookedCabinList';
import N_ChangeCabinStatus from './nurse/ChangeCabinStatus';
import N_CabinList from './nurse/CabinList';
import N_BookedCabinAll from './nurse/BookedCabinAll';





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
          <PataintHeader/>

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
        <Route exact path='/AppointmentRequestList/:name/:username'>
          <AdminHeader/>

          <AppointmentRequestListAdmin/>

        </Route>
        <Route exact path='/AdminSetAppointmentTime/:doctor_username/:pataint_username/:appointment_date'>
          <AdminHeader/>

          <AdminSetAppointmentTime/>

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
        <Route exact path='/NurseDutySet/:name/:username/:duty'>
          <AdminHeader/>

          <NurseDutySet/>

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
        <Route exact path='/PharmacyDutySet/:name/:username/:duty'>
          <AdminHeader/>

          <PharmacyDutySet/>

        </Route>
        <Route exact path='/A_MedicinList'>
          <AdminHeader/>

          <A_MedicinList/>

        </Route>
        <Route exact path='/A_SellerList'>
          <AdminHeader/>

          <A_SellerList/>

        </Route>
        <Route exact path='/A_DoctorAppointmentList'>
          <AdminHeader/>
          <A_DoctorAppointmentList/>

        </Route>
        <Route exact path='/A_LabtestAppointmentList'>
          <AdminHeader/>
          <A_LabtestAppointmentList/>

        </Route>
        <Route exact path='/A_LabtestList'>
          <AdminHeader/>
          <A_LabtestList/>

        </Route>
        <Route exact path='/A_AddLabtest'>
          <AdminHeader/>
          <A_AddLabtest/>

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
          <DoctorHeader/>

          <EditDoctorProfile/>

        </Route>
        <Route exact path='/CheckupTime'>
          <DoctorHeader/>
          <SetTime/>

        </Route>
        <Route exact path='/PataintReview'>
          <DoctorHeader/>
          <Reviewer/>

        </Route>
        <Route exact path='/PataintAppointmentList'>
          <DoctorHeader/>
          <DoctorToPataintAppointment/>

        </Route>










        <Route exact path='/P_MedicinList'>
          <PharmacyHeader/>
          <P_MedicinList/>

        </Route>

        <Route exact path='/P_ChangeStatus/:group_name/:status'>
          <PharmacyHeader/>

          <P_MedicinStatus/>

        </Route>
        <Route exact path='/P_DeleteMedicin/:group_name'>
          <PharmacyHeader/>

          <P_DeleteMedicin/>

        </Route>
        <Route exact path='/P_AddMedicin'>
          <PharmacyHeader/>
          <P_AddMedicin/>

        </Route>
        
        <Route exact path='/P_Profile'>
          <PharmacyHeader/>
          <P_EmployeeProfile/>

        </Route>
        <Route exact path='/P_EditProfile/:username/:name/:password/:phone/:address'>
          <PharmacyHeader/>

          <P_EditProfile/>

        </Route>
        <Route exact path='/P_MedicinSell'>
          <PharmacyHeader/>
          <P_MedicinSell/>

        </Route>
        <Route exact path='/P_SellHistory'>
          <PharmacyHeader/>
          <P_SellHistory/>

        </Route>






        <Route exact path='/NurseHome'>
          <NurseHeader/>
          <NurseHome/>

        </Route>
        <Route exact path='/Nurse_Profile'>
          <NurseHeader/>
          <NurseProfile/>

        </Route>
        <Route exact path='/Nurse_EditProfile/:username/:name/:password/:phone/:address'>
          <NurseHeader/>

          <Nurse_EditProfile/>

        </Route>
        <Route exact path='/N_CabinList'>
          <NurseHeader/>

          <N_CabinList/>

        </Route>
        <Route exact path='/N_BookedCabinAll'>
          <NurseHeader/>

          <N_BookedCabinAll/>

        </Route>

        <Route exact path='/N_BookedCabin'>
          <NurseHeader/>

          <N_BookedCabin/>

        </Route>
        <Route exact path='/N_ChangeCabinStatus/:cabin'>
          <NurseHeader/>

          <N_ChangeCabinStatus/>

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
