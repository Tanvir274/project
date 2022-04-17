import React from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router";
import {useParams}  from 'react-router-dom';



const CabinStatus=()=>{
    const history = useHistory();

    const {cabin} = useParams();
    
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    var onSubmit = data=> {
        var obj ={cabin:{cabin},status:data.status};
    
                axios.post("/N_ChangeCabinStatus",obj)
                .then(resp=>{
                    alert("Change Succesfully");
                    history.push("/N_CabinList");
    
                    console.log(resp.data);
    
                    
                })
                .catch(err=>{
                    console.log(err.data);
                })
            
    
      } 

    return(
        
     <form onSubmit={handleSubmit(onSubmit)}>
     
       <br/><br/><br/> <h2>Set Cabin Availability</h2><br/><br/>
       <select {...register("status", { required: true })}>
        <option value="Booked">Booked</option>   
        <option value="Available">Available</option> 
      </select><br/><br/>
       
       <input type="submit" />
     </form>
    )
}
export default CabinStatus;