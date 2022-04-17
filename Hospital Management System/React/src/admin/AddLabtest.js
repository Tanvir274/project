import React from 'react';
import axios from "axios";
import { useHistory } from "react-router";
import { useForm } from 'react-hook-form';


export default function App() {
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();

  var onSubmit = data=> {
    var obj ={name:data.name};

            axios.post("/A_AddlabTest",obj)
            .then(resp=>{

              
                alert("Labtest Add Successfully");

                //console.log(resp.data);
                history.push("/A_LabtestList");
             

                
            })
            .catch(err=>{
                alert("Already Added this Labtest");
                console.log(err.data);
            })
        

  } 

  
    
  
  
  return (
      
    <form onSubmit={handleSubmit(onSubmit)}>
      
       <br/><br/><br/> <h3>Add Labtest</h3><br/><br/>
      <span>Name</span><br/>
      <input type="text" placeholder="Name" {...register("name", {required: true,minLength: 5, maxLength: 30})} /><br/>
      <span></span>
      
      <input type="submit" /><br/><br/><br/>
      
    </form>
  );
}