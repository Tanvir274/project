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
        <button onClick={logout}>Log Out</button>
        </>
    )
}
export default Logout;