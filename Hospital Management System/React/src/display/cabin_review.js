import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useForm } from 'react-hook-form';
import {useParams}  from 'react-router-dom';
import Header from "./header";

const Appointment=()=>{
    const {id} = useParams();
    const {name} = useParams();
    const history = useHistory();
    let object= JSON.parse( localStorage.getItem('user'));
    let username = object.username;
    const { register, handleSubmit, formState: { errors } } = useForm();
    var onSubmit = data=> {
        var obj ={primary_id:{id},username:{username},comment:data.comment,rating:data.rating};
    
                axios.post("/cabin_review",obj)
                .then(resp=>{
                    alert("Thank You");
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
        <br/><br/><br/> <h3>Comment And Rating: <h2>{name}</h2></h3><br/><br/>
       <span>Enter Valuable Comment</span><br/>
       <input type="text"  {...register("comment", {required: true,minLength: 4, maxLength: 200})} /><br/>
       
       <span>Select Rating </span><br/>
       <select {...register("rating", { required: true })}>
         <option value="*">*</option>
         <option value="**">**</option>
         <option value="***">***</option>
         <option value="****">****</option>
         <option value="*****">*****</option>
       </select><br/><br/>
       
 
       <input type="submit" />
     </form>
    )
}
export default Appointment