import React,{useEffect,useState} from "react";
import {Link} from 'react-router-dom';
import { useHistory } from "react-router";
import axios from "axios";


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
                else{
                    alert("Don't found Account");
                } 
                
                
    
            })
            .catch(err=>{
                console.log(err);
                alert("Username or Password Invalid");
            })
    
        
    }

    return(
        <div>
            
            <br/><br/><br/><br/><br/><h1><b><i>LOG IN</i></b></h1><br/>
            <form>
                <span>Username</span>
                <input type= "text" value={username} onChange={(e)=>setUser(e.target.value)} /><br/>
                <span>Password</span>
                <input type= "text" value={password} onChange={(e)=>setPass(e.target.value)} />
            </form>
            <button onClick={loginSubmit}>Login</button><br/><br/>
            <table align='center' border= '2px solid black' border-radius= '10px'>
                <tr>
                    <td>No Account !!!</td>
                    <td><Link to="/registration">Sign Up</Link></td>
                </tr>
                <tr>
                    <td>Forget Password</td>
                    <td><Link to="/recovery">Recover</Link></td>
                </tr>
            </table>
        </div>
    )
}
export default Login;
