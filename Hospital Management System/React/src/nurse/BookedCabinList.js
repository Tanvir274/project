import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import { useForm } from 'react-hook-form';

import Button from 'react-bootstrap/Button';

const Cabin=()=>{
    



    const[List,setList]=useState([]);
    const[Date,setDate]=useState([]);
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    var onSubmit = data=> {
        var obj ={date:data.date};
        setDate(data.date)
    
                axios.post("/N_BookedCabinList",obj)
                .then(resp=>{
                  
                  if(resp.data==0)
                  {
                    alert("Not Found Booked Cabine");

                  }
                  else
                  {
                    alert(" Found Booked Cabine");
                    setList(resp.data);

                  }

                  //setList(resp.data);

                    //alert("Found Appointment");
    
                    //console.log(resp.data);
    
                    
                })
                .catch(err=>{
                    alert("Not Found ");
                    //console.log(err.data);
                })
            
    
      } 



    

    return(
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
        
            <br/><br/><br/> <h2> Patient Booked Cabine List  </h2><br/><br/>
            <span></span>
            <span>Select Date</span><br/>
            <input type="date"  {...register("date", {required: true})} /><br/>
            <span></span>
            
            <input type="submit" />
          </form><br/><br/><br/>
 
        <h3>Select Date: {Date}</h3>
                <table align='center' border= '1px solid black' border-radius= '10px'>
                <thead>
                    <tr>
                        <td>Pataint Name</td>
                        <td>Cabin No</td>
                        <td>Action(Status Change)</td>
                    </tr>

                </thead>
                <tbody>
                {
                    List.map(post => (
                        <tr key={post.id}>
                            <td>{post.pataint_name}</td>
                            <td>{post.cabin_no}</td>
                            
                            <td><Link to={`/N_ChangeCabinStatus/${post.cabin_no}`}><Button variant="success">Change Status</Button></Link></td>

                            
                        </tr>
                    ))
                }           
                </tbody>
                </table><br/>
            
        </div>

    )
}
export default Cabin;