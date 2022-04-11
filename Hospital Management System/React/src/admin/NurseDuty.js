import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useForm } from 'react-hook-form';
import {useParams}  from 'react-router-dom';


const ChangeStatus=()=>{
    const {name,username} = useParams();
    const {duty} = useParams();
    const history = useHistory();
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    var onSubmit = data=> {
        var obj ={username:{username},duty:data.duty};
    
                axios.post("/NurseDutySet",obj)
                .then(resp=>{
                    alert("Duty Area Change Succesfully");
    
                    console.log(resp.data);
                    history.push("/NurseList");
    
                    
                })
                .catch(err=>{
                    console.log(err.data);
                })
            
    
      } 

    return(
        
     <form onSubmit={handleSubmit(onSubmit)}>
       <br/><br/><br/> <h3> Nurse Name : <h2>{name}</h2></h3><br/><br/>
       <span><h3>Present Duty Area : <h2>{duty}</h2></h3></span><br/><br/>
       <span>Set Duty Area</span><br/>
       <input type="text" placeholder="Duty Area" {...register("duty", {required: true,minLength: 4, maxLength: 30})} /><br/>
       
       <input type="submit" />
     </form>
    )
}
export default ChangeStatus;