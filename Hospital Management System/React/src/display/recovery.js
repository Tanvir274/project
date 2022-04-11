import React from 'react';
import axios from "axios";
import { useHistory } from "react-router";
import { useForm } from 'react-hook-form';


export default function App() {
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();

  var onSubmit = data=> {
    var obj ={username:data.username,password:data.password,email:data.email,type:data.type};

            axios.post("/recovery/submit",obj)
            .then(resp=>{
                alert("Password Recover Succesfully");
                axios.post("/",obj)
                history.push("/");

                //console.log(resp.data);

                
            })
            .catch(err=>{
                console.log(err.data);
            })
        

  } 

  const back = e => {
    history.push("/");
}
  
  return (
      
    <form onSubmit={handleSubmit(onSubmit)}>
      
       <br/><br/><br/> <h3>Recovery Account</h3><br/><br/>
      
      <span>User Name</span><br/>
      <input type="text" placeholder="username" {...register("username", {required: true,minLength: 3, maxLength: 10})} /><br/>
      <span>Email</span><br/>
      <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} /><br/>
      <span></span>
      <span>Password</span><br/>
      <input type="text" placeholder="Password" {...register("password", {required: true,minLength: 4, maxLength: 10})} /><br/>
      
      
      <span>Select User Type</span><br/>
      <select {...register("type", { required: true })}>
        <option value="pataint">Pataint</option>
        <option value="doctor">Doctor</option>
        <option value="pharmacy">Pharmacian</option>
        <option value="nurse">Nurse</option>
        <option value="admin">Admin</option>
        
      </select><br/><br/>
      

      <input type="submit" /><br/><br/><br/>
      <button onClick={back}>Back</button>
    </form>
  );
}