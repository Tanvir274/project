import React from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';
import {useParams}  from 'react-router-dom';
import Header from "./header";

const Labtest=()=>{
    const {id} = useParams();
    const {name} = useParams();
    let object= JSON.parse( localStorage.getItem('user'));
    let username = object.username;
    const { register, handleSubmit, formState: { errors } } = useForm();
    var onSubmit = data=> {
        var obj ={primary_id:{id},username:{username},date:data.date};
    
                axios.post("/cabin/submit",obj)
                .then(resp=>{
                    alert("Cabin Booking Succesfully");
    
                    console.log(resp.data);
    
                    
                })
                .catch(err=>{
                    console.log(err.data);
                })
            
    
      } 
    return(
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <Header/>
        <br/><br/><br/> <h1>Confirm Cabin Appointment:{name}</h1><br/><br/>
        <span>Select Date</span><br/>
        <input type="date"  {...register("date", {required: true})} /><br/>
        <span></span>
        
        <input type="submit" />
      </form>
    )
}
export default Labtest;