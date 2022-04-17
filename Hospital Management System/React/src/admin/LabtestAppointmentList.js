import React,{useState} from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';




const Appointment=()=>{
    
    const[List,setList]=useState([]);
    const[Date,setDate]=useState([]);
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    var onSubmit = data=> {
        var obj ={date:data.date};
        setDate(data.date)
    
                axios.post("/A_LabtestAppointmentList",obj)
                .then(resp=>{
                  
                  if(resp.data==0)
                  {
                    alert("Not Found Appointment");

                  }
                  else
                  {
                    alert(" Found Appointment");
                    setList(resp.data);

                  }

                  //setList(resp.data);

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
        
       <br/><br/><br/> <h2> Patient Appointment List for Labtest  </h2><br/><br/>
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
                      <td>Labtest Name </td>
                      <td>Test Date</td>
                      <td>Test Time</td>
                  </tr>

              </thead>
              <tbody>
              {
                List.map(post => (
                    <tr key={post.id}>
                            <td>{post.pataint_name}</td>
                            <td>{post.test_name}</td>
                            <td>{post.date}</td>
                            <td>{post.time}</td>
 
                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>

     </>
    )
}
export default Appointment;