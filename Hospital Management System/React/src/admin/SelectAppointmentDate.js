import React,{useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useForm } from 'react-hook-form';
import {useParams}  from 'react-router-dom';

import Button from 'react-bootstrap/Button';

const Appointment=()=>{
    const {name,username} = useParams();
    const[List,setList]=useState([]);
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    var onSubmit = data=> {
        var obj ={username:{username},date:data.date};
    
                axios.post("/AppointmentRequestList",obj)
                .then(resp=>{
                  
                  /*if(resp.data=="null")
                  {
                    alert("Not Found Appointment");

                  }
                  else
                  {
                    alert(" Found Appointment");

                  }*/

                  setList(resp.data);

                    //alert("Found Appointment");
    
                    //console.log(resp.data);
    
                    
                })
                .catch(err=>{
                    alert("Not Found Appointment");
                    //console.log(err.data);
                })
            
    
      } 

    return(
    <>   
     <form onSubmit={handleSubmit(onSubmit)}>
        
       <br/><br/><br/> <h3>Doctor Name <h2>{name}</h2> </h3><br/><br/>
       <span></span>
       <span>Select Date</span><br/>
       <input type="date"  {...register("date", {required: true})} /><br/>
       <span></span>
       
       <input type="submit" />
     </form><br/><br/><br/>

     <h3>Appointment Request List</h3>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>Doctor Name</td>
                      <td>Pataint Name</td>
                      
                      <td>Checkup Date</td>
                      <td>Checkup Time</td>
                      <td>Action(Set Checkup Time)</td>
                  </tr>

              </thead>
              <tbody>
              {
                List.map(post => (
                    <tr key={post.id}>
                            <td>{post.doctor_name}</td>
                            <td>{post.pataint_name}</td>
                            <td>{post.app_date}</td>
                            <td>{post.app_time}</td>
                            <td><Link to={`/AdminSetAppointmentTime/${post.doctor_username}/${post.pataint_username}/${post.app_date}`}><Button variant="primary">Change</Button></Link></td>
 
                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>

     </>
    )
}
export default Appointment;