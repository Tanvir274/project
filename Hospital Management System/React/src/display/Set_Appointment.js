import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useForm } from 'react-hook-form';
import {useParams}  from 'react-router-dom';
import Header from "./header";

const Appointment=()=>{
    const history = useHistory();
    const {id} = useParams();
    const {name} = useParams();
    let object= JSON.parse( localStorage.getItem('user'));
    let username = object.username;
    const { register, handleSubmit, formState: { errors } } = useForm();
    var onSubmit = data=> {
        var obj ={primary_id:{id},username:{username},date:data.date};
    
                axios.post("/appointment/submit",obj)
                .then(resp=>{
                    alert("Appointment Succesfully");
                    history.push("/home");
    
                    console.log(resp.data);
    
                    
                })
                .catch(err=>{
                    console.log(err.data);
                })
            
    
      } 

    return(
        
     <form onSubmit={handleSubmit(onSubmit)}>
         <Header/>
       <br/><br/><br/> <h3>Confirm Doctor Appointment:<h2>{name}</h2></h3><br/><br/>
       <span></span>
       <span>Select Date</span><br/>
       <input type="date"  {...register("date", {required: true})} /><br/>
       <span></span>
       
       <input type="submit" />
     </form>
    )
}
export default Appointment;