import React from 'react';
import {Link} from 'react-router-dom';
function header()
{
    return(
    <div>
        <Link to="/home"><b>DashBoard</b></Link> &nbsp;&nbsp;&nbsp;
        <Link to="/profile"><b>Profile</b></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/admin"><b>Admin</b></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/histray"><b>History</b></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/review"><b>Review</b></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/rating"><b>Give Rating</b></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/logout"><b>Log Out</b></Link>

    </div>
    )
}
export default header;