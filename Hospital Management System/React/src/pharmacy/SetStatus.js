import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useForm } from 'react-hook-form';
import {useParams}  from 'react-router-dom';


const ChangeStatus=()=>{
    const {group_name} = useParams();
    const {status} = useParams();
    const history = useHistory();
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    var onSubmit = data=> {
        var obj ={name:{group_name},status:data.status};
    
                axios.post("/UpdateStatus",obj)
                .then(resp=>{
                    alert("Status Change Succesfully");
    
                    console.log(resp.data);
                    history.push("/P_MedicinList");
    
                    
                })
                .catch(err=>{
                    console.log(err.data);
                })
            
    
      } 

    return(
        
     <form onSubmit={handleSubmit(onSubmit)}>
       <br/><br/><br/> <h2> Medicin Group Name : {group_name}</h2><br/><br/>
       <span><h3>Present Status :{status}</h3></span><br/>
       <span>Change Status: </span>
       <select {...register("status", { required: true })}>
        <option value="Available">Available</option>
        <option value="Not Available">Not Available</option>
      </select><br/><br/>
       
       <input type="submit" />
     </form>
    )
}
export default ChangeStatus;