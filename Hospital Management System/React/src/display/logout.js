import React from "react";
import { useHistory } from "react-router";

const Logout=()=>{
    const history = useHistory();
    const logout = e => {

        localStorage.removeItem('user');

        localStorage.removeItem('username');

        alert('logged out');

        e.preventDefault();
        history.push("/");




    }
    return(
        <>
        <br/><br/><br/><br/><br/><br/>
        <button onClick={logout}>Confirm Logout</button>
        </>
    )
}
export default Logout;