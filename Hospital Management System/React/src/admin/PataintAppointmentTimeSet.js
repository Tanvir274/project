import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useForm } from 'react-hook-form';
import {useParams}  from 'react-router-dom';


const ChangeStatus=()=>{
    const {doctor_username,pataint_username,appointment_date} = useParams();
    const history = useHistory();
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    var onSubmit = data=> {
        var obj ={doctor:{doctor_username},pataint:{pataint_username},date:{appointment_date},time:data.time};
    
                axios.post("/AdminSetAppointmentTime",obj)
                .then(resp=>{
                    alert("Appointment Time Set Succesfully");
    
                    console.log(resp.data);
                    //history.push("/DoctorList");
    
                    
                })
                .catch(err=>{
                    console.log(err.data);
                })
            
    
      } 

    return(
        
     <form onSubmit={handleSubmit(onSubmit)}>
       <br/><br/><br/> <h3>Pataint Name: <h2>{pataint_username}</h2></h3><br/><br/>
       
       <span>Set Appointment Time</span><br/>
       <input type="time"  {...register("time", {required: true})} /><br/>
       
       <input type="submit" />
     </form>
    )
}
export default ChangeStatus;