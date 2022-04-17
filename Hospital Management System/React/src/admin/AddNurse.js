import React from 'react';
import axios from "axios";
import { useHistory } from "react-router";
import { useForm } from 'react-hook-form';


export default function App() {
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();

  var onSubmit = data=> {
    var obj ={name:data.name,username:data.username,password:data.password,phone:data.digit,
        email:data.email,dob:data.dob,duty:data.duty,address:data.address};

            axios.post("/AddNurse",obj)
            .then(resp=>{
              if(resp.data==1)
              {
                alert("Your enter username already used"+"\n"+ "Change Username");

              }
              else
              {
                alert("Registration Succesfull");

                //console.log(resp.data);
                history.push("/NurseList");
              }

                
            })
            .catch(err=>{
                console.log(err.data);
            })
        

  } 

  
    
  
  
  return (
      
    <form onSubmit={handleSubmit(onSubmit)}>
      
       <br/><br/><br/> <h3>Registration Nurse</h3><br/><br/>
      <span>Name</span><br/>
      <input type="text" placeholder="Name" {...register("name", {required: true,minLength: 3, maxLength: 30})} /><br/>
      <span></span>
      <span>User Name</span><br/>
      <input type="text" placeholder="username" {...register("username", {required: true,minLength: 3, maxLength: 15})} /><br/>
      <span></span>
      <span>Password</span><br/>
      <input type="text" placeholder="Password" {...register("password", {required: true,minLength: 4, maxLength: 15})} /><br/>
      <span>Email</span><br/>
      <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} /><br/>
      <span>phone Number</span><br/>
      <input type="text" placeholder="Phone number" {...register("digit", {required: true,pattern:[0-9], minLength: 8, maxLength: 15})} /><br/>
      <span>Set Duty Area</span><br/>
      <input type="text" placeholder="Duty Area" {...register("duty", {required: true,minLength: 4, maxLength: 30})} /><br/>
      
      <span>Date Of Birth </span><br/>
      <input type="DATE" placeholder="Date of birth" {...register("dob", {required: true})} /><br/>
      <span>Address</span><br/>
      <input type="text" placeholder="Address" {...register("address", {required: true,minLength: 4, maxLength: 50})} /><br/>

      <input type="submit" /><br/><br/><br/>
      
    </form>
  );
}