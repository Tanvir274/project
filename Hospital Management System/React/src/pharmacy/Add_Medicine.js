import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useForm } from 'react-hook-form';



const AddMedicine=()=>{
    
    const history = useHistory();
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    var onSubmit = data=> {
    
        var obj ={name:data.name,status:data.status};
    
                axios.post("/MedicinAdd",obj)
                .then(resp=>{
                    alert("Add Medicine Succesfully");
    
                    console.log(resp.data);
                    history.push("/P_MedicinList");
    
                    
                })
                .catch(err=>{
                    console.log(err.data);
                })
            
    
      } 

    return(
        
     <form onSubmit={handleSubmit(onSubmit)}>
       <br/><br/><br/> <h3>Add Medicin </h3><br/><br/>
       
       <span>Name</span><br/>
       <input type="text" placeholder="Medicin Name" {...register("name", {required: true,minLength: 3, maxLength: 10})} /><br/>
       <span></span>
       <span>Status</span><br/>
       <select {...register("status", { required: true })}>
        <option value="Available">Available</option>
        <option value="Not Available">Not Available</option>
      </select><br/><br/>
       
       <input type="submit" />
     </form>
    )
}
export default AddMedicine;