import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useForm } from 'react-hook-form';


const SellAdd=()=>{

    const history = useHistory();
    
    let object= JSON.parse( localStorage.getItem('user'));
    let username = object.username;
    const { register, handleSubmit, formState: { errors } } = useForm();
    var onSubmit = data=> {
        var obj ={username:username,date:data.date,amount:data.amount};
    
                axios.post("/MedicinSell",obj)
                .then(resp=>{
                    alert("Successfully Sell Update");
    
                    console.log(resp.data);
                    history.push("/P_SellHistory");
    
                    
                })
                .catch(err=>{
                    console.log(err.data);
                })
            
    
      } 

    return(
        
     <form onSubmit={handleSubmit(onSubmit)}>
       <br/><br/><br/> <h3>Sell Add Section</h3><br/><br/>
       <span>Amount</span><br/>
       <input type="number" placeholder="TK" {...register("amount", {required: true})} /><br/>
       <span></span>
       <span>Select Date</span><br/>
       <input type="date"  {...register("date", {required: true})} /><br/>
       <span></span>
       
       <input type="submit" />
     </form>
    )
}
export default SellAdd;