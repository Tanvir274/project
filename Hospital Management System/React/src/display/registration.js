import React from 'react';
import axios from "axios";
import { useHistory } from "react-router";
import { useForm } from 'react-hook-form';


export default function App() {
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();

  var onSubmit = data=> {
    var obj ={name:data.name,username:data.username,password:data.password,phone:data.digit,
        email:data.email,group:data.blood,gender:data.gender,dob:data.dob,address:data.address};

            axios.post("/registration/submit",obj)
            .then(resp=>{

              if(resp.data==1)
              {
                alert("Your enter username already used"+"\n"+ "Change Username");

              }
              else
              {
                alert("Registration Succesfull");
                history.push("/");

              }
                

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
      
       <br/><br/><br/> <h2>Sign Up</h2><br/><br/>
      <h4>Name</h4>
      <input type="text" placeholder="Name" {...register("name", {required: true,minLength: 3, maxLength: 30})} /><br/>
      <span></span>
      <h4>User Name</h4>
      <input type="text" placeholder="username" {...register("username", {required: true,minLength: 3, maxLength: 15})} /><br/>
      <span></span>
      <h4>Password</h4>
      <input type="password" placeholder="Password" {...register("password", {required: true,minLength: 4, maxLength: 15})} /><br/>
      <h4>Email</h4>
      <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} /><br/>
      <h4>Phone Number</h4>
      <input type="text" placeholder="Mobile number" {...register("digit", {required: true,pattern:[0-9], minLength: 8, maxLength: 15})} /><br/>
      <h4>Blood Group</h4>
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
      <h4>Gender</h4>
      <select {...register("gender", { required: true })}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select><br/><br/>
      <h4>Date Of Birth</h4>
      <input type="DATE" placeholder="Date of birth" {...register("dob", {required: true})} /><br/>
      <h4>Address</h4>
      <input type="text" placeholder="Address" {...register("address", {required: true,minLength: 4, maxLength: 50})} /><br/>

      <input type="submit" /><br/><br/><br/>
      <button onClick={back}>Back</button>
    </form>
  );
}