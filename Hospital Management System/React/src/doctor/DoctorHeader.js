import React from 'react';
import {Link} from 'react-router-dom';
function header()
{
    return(
    <div>
        <Link to="/DoctorDashboard"><b>DashBoard</b></Link> &nbsp;&nbsp;&nbsp;
        <Link to="/DoctorProfile"><b>Profile</b></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/logout"><b>Log Out</b></Link>

    </div>
    )
}
export default header;