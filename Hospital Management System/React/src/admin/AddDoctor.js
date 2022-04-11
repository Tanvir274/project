import React from 'react';
import axios from "axios";
import { useHistory } from "react-router";
import { useForm } from 'react-hook-form';


export default function App() {
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();

  var onSubmit = data=> {
    var obj ={name:data.name,username:data.username,password:data.password,phone:data.digit,
        email:data.email,group:data.blood,dob:data.dob,address:data.address};

            axios.post("/AddDoctor",obj)
            .then(resp=>{
                alert("Registration Succesfull");

                console.log(resp.data);
                history.push("/DoctorList");

                
            })
            .catch(err=>{
                console.log(err.data);
            })
        

  } 

  
    
  
  
  return (
      
    <form onSubmit={handleSubmit(onSubmit)}>
      
       <br/><br/><br/> <h3>Registration Doctor</h3><br/><br/>
      <span>Name</span><br/>
      <input type="text" placeholder="Name" {...register("name", {required: true,minLength: 3, maxLength: 20})} /><br/>
      <span></span>
      <span>User Name</span><br/>
      <input type="text" placeholder="username" {...register("username", {required: true,minLength: 3, maxLength: 20})} /><br/>
      <span></span>
      <span>Password</span><br/>
      <input type="text" placeholder="Password" {...register("password", {required: true,minLength: 4, maxLength: 10})} /><br/>
      <span>Email</span><br/>
      <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} /><br/>
      <span>Mobile Number</span><br/>
      <input type="number" placeholder="Mobile number" {...register("digit", {required: true, minLength: 6, maxLength: 12})} /><br/>
      <span>Blood Group</span><br/>
      <select {...register("blood", { required: true })}>
        <option value="A+">A+</option>
        <option value="O+">O+</option>
        <option value="B+">B+</option>
        <option value="AB+">AB+</option>
        <option value="A-">A-</option>
        <option value="O-">O-</option>
        <option value="B-">B-</option>
        <option value="AB-">AB-</option>
      </select><br/><br/>
      <span>Date Of Birth </span><br/>
      <input type="DATE" placeholder="Date of birth" {...register("dob", {required: true})} /><br/>
      <span>Address</span><br/>
      <input type="text" placeholder="Address" {...register("address", {required: true,minLength: 4, maxLength: 30})} /><br/>

      <input type="submit" /><br/><br/><br/>
      
    </form>
  );
}