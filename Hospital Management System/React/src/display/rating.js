import React from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';
import Header from "./header";


const Rating=()=>{
    
    let object= JSON.parse( localStorage.getItem('user'));
    let username = object.username;
    const { register, handleSubmit, formState: { errors } } = useForm();
    var onSubmit = data=> {
        var obj ={username:username,comment:data.comment,rating:data.rating};

        //console.log(obj);
    
                axios.post("/comment/submit",obj)
                .then(resp=>{
                    alert("Thank You");
    
                    console.log(resp.data);
    
                    
                })
                .catch(err=>{
                    console.log(err.data);
                })
            
    
      }

    return(
        
    <form onSubmit={handleSubmit(onSubmit)}>
      <Header/>
        <br/><br/><br/> <h1> <i>WELL COME</i><br/> Hospital System Review Page </h1><br/><br/>
       <span>Enter Valuable Comment</span><br/>
       <input type="text"  {...register("comment", {required: true,minLength: 4, maxLength: 200})} /><br/>
       
       <span>Select Rating :</span>
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
export default Rating;