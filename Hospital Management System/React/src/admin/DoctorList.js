import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

import Button from 'react-bootstrap/Button';

const Doctor=()=>{
    

    const[doctors,setDoctor]=useState([]);

    useEffect(()=>{
        axios.get("/Doctorlist")
        .then(resp=>{
            console.log(resp.data);
            //console.log(resp.data[0]);
            setDoctor(resp.data);
            
            

        })
        .catch(err=>{
            console.log(err);
        })

    },[]);


    

    return(
        <div>
            <br/><br/><br/>
            <h3>Available Doctor And Checkup Time </h3><br/>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>Name</td>
                      <td>Username</td>
                      <td>Phone</td>
                      <td>Email</td>
                      <td>Address</td>
                      <td>Checkup Status</td>
                      <td>Action(Appointment Request)</td>
                      <td>Action(Delete)</td>
                  </tr>

              </thead>
              <tbody>
              {
                doctors.map(post => (
                    <tr key={post.id}>
                        <td>{post.doc_name}</td>
                        <td>{post.username}</td>
                        <td>{post.phone}</td>
                        <td>{post.email}</td>
                        <td>{post.address}</td>
                        <td>{post.status}</td>
                        <td><Link to={`/AppointmentRequestList/${post.doc_name}/${post.username}`}><Button variant="success">List</Button></Link></td>

                        <td><Link to={`/DeleteDoctor/${post.doc_name}/${post.username}/${post.phone}/${post.email}/${post.address}`}><Button variant="danger">Delete</Button></Link></td>
                    </tr>
                ))
              }           
              </tbody>
            </table><br/>
            <Link to={"/AddDoctor"}><Button variant="primary">Add Doctor</Button></Link>
        </div>

    )
}
export default Doctor;