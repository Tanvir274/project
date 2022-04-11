import React,{useState,useEffect} from "react";
import axios from 'axios';


const Appointment=()=>{
    const[appointment,setAppintment]=useState([]);
    
    let object= JSON.parse( localStorage.getItem('user'));
    let username = object.username;
    /*const mydoctor =doctors.filter(doctors => doctors. pataint_username ==username)
    console.log(mydoctor)*/

    
    useEffect(()=>{
        var obj={username:{username}}
        axios.post("/PataintToDoctorAppointment",obj)
        .then(resp=>{
            //console.log(resp.data);
            

            setAppintment(resp.data);
            

        })
        .catch(err=>{
            console.log(err);
        })

    },[]);



    return(
        <div>
            <br/><br/><br/>
            
            <h3>Pataint confirmed Appointment List</h3>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>Name</td>
                      <td>Checkup Time</td>
                      <td>Checkup Date</td>
                  </tr>

              </thead>
              <tbody>
              {
                appointment.map(post => (
                    <tr key={post.id}>
 
                            <td>{post.pataint_name}</td>
                            <td>{post.app_time}</td>
                            <td>{post.app_date}</td>
 
                    </tr>
                ))
              }           
              </tbody>
            </table>
            
        </div>
    )
}
export default Appointment;