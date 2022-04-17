import React from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';



const Appointment=()=>{
    
    let object= JSON.parse( localStorage.getItem('user'));
    let username = object.username;
    const { register, handleSubmit, formState: { errors } } = useForm();
    var onSubmit = data=> {
        var obj ={username:{username},time:data.time};
    
                axios.post("/CheckupTimeSet",obj)
                .then(resp=>{
                    alert("Set Time Succesfully");
    
                    console.log(resp.data);
    
                    
                })
                .catch(err=>{
                    console.log(err.data);
                })
            
    
      } 

    return(
        
     <form onSubmit={handleSubmit(onSubmit)}>
     
       <br/><br/><br/> <h2>Set Your Availability</h2><br/><br/>
       <select {...register("time", { required: true })}>
        <option value="Available">Available</option>
        <option value="Not Available">Not Available</option>
      </select><br/><br/>
       
       <input type="submit" />
     </form>
    )
}
export default Appointment;