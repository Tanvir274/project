import React from "react";
import {Link} from 'react-router-dom';
import { useHistory } from "react-router";
import { useForm } from 'react-hook-form';
import axios from "axios";


import Button from 'react-bootstrap/Button';


const Login=()=>{
    const history = useHistory();
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    var onSubmit = data=> {
        
        

        var obj ={username:data.username,password:data.password};
            axios.post("/check",obj)
            .then(resp=>{

                //console.log(resp.data);

                var token = resp.data;
                var user={username:token.username, token:token.token};
                
                localStorage.setItem('user',JSON.stringify(user));

                console.log(localStorage.getItem('user'));
                
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
    

    return(
        <div>
            
            <br/><br/><br/><h2>Welcome : ABC Hospital</h2><br/><br/><br/><br/><h3><b>Log In</b></h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <span>Username: </span>
                <input type="text" placeholder="Username" {...register("username", {required: true,minLength: 3})} /><br/>
                
                <span>Password: </span>
                <input type="password" placeholder="Password" {...register("password", {required: true,minLength: 3})} /><br/>
                <input type="submit" />
            </form><br/><br/><br/>
             
            
            
                     
            <span>No Account ☞ ➤ </span><span><Link to="/registration"> <Button variant="outline-primary">Sign Up</Button></Link></span>
                
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        
            <span>Forgot Password ☞ ➤ </span><span><Link to="/recovery"><Button variant="outline-info">Recover</Button></Link></span>
                
        </div>
    )
}
export default Login;
