import React from 'react';
import {Link} from 'react-router-dom';
function header()
{
    return(
    <div>
        <Link to="/AdminDashboard"><b>DashBoard</b></Link> &nbsp;&nbsp;&nbsp;
        <Link to="/DoctorList"><b>Doctor</b></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/PataintList"><b>Pataint</b></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/NurseList"><b>Nurse</b></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/PharmacyEmployee"><b>Pharmacy Employee</b></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/AdminProfile"><b>Profile</b></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/logout"><b>Log Out</b></Link>

        

    </div>
    )
}
export default header;