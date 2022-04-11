import React,{useEffect,useState} from "react";
import {Link} from 'react-router-dom';
import { useHistory } from "react-router";
import axios from "axios";


import Button from 'react-bootstrap/Button';


const Login=()=>{
    const history = useHistory();
    let [token,setToken]=useState();
    let [username,setUser]=useState();
    let [password,setPass]=useState();

    const loginSubmit=()=>{
        //alert(username+" "+password);
        //var obj ={username:"Tanvir01",password:"1234"};

        var obj ={username:username,password:password};
            axios.post("/check",obj)
            .then(resp=>{

                //console.log(resp.data);

                var token = resp.data;
                var user={username:token.username, token:token.token};
                
                localStorage.setItem('user',JSON.stringify(user));

                console.log(localStorage.getItem('user'));
                //alert("login Sucessfull");
                if (token.token != null && token.type =="pataint") 
                {
                  alert("login Sucessfull");
                  history.push("/home");
                }
                else if(token.token != null && token.type =="admin")
                {
                    alert("login Sucessfull");
                    history.push("/AdminDashboard");
                }
                else if(token.token != null && token.type =="doctor")
                {
                    alert("login Sucessfull");
                    history.push("/DoctorDashboard");
                }
                else if(token.token != null && token.type =="pharmacy")
                {
                    alert("login Sucessfull");
                    history.push("/P_MedicinList");
                }
                else if(token.token != null && token.type =="nurse")
                {
                    alert("login Sucessfull");
                    history.push("/NurseHome");
                }
                else{
                    alert("Don't found Account");
                } 
                
                
    
            })
            .catch(err=>{
                console.log(err);
                alert("Username or Password Invalid");
            })


            
    
        
    }
    var req = true;

    return(
        <div>
            
            <br/><br/><br/><h2>Welcome : ABC Hospital</h2><br/><br/><br/><br/><h3><b>Log In</b></h3>
            <form>
                <span>Username </span>
                <input type= "text"  value={username}   onChange={(e)=>setUser(e.target.value)} /><br/>
                <span>Password </span>
                <input type= "password" value={password}  onChange={(e)=>setPass(e.target.value)} />
            </form>
            <button onClick={loginSubmit}>Login</button><br/><br/><br/>
            
            
                     
            <span>No Account ☞ ➤ </span><span><Link to="/registration"> <Button variant="outline-primary">Sign Up</Button></Link></span>
                
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        
            <span>Forgot Password ☞ ➤ </span><span><Link to="/recovery"><Button variant="outline-info">Recover</Button></Link></span>
                
        </div>
    )
}
export default Login;
