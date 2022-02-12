import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import { useHistory } from "react-router";
import axios from 'axios';

const Doctor=()=>{
    const history = useHistory();

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
            <h1>Available Doctor And Checkup Time </h1>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>Name</td>
                      <td>Username</td>
                      <td>Phone</td>
                      <td>Email</td>
                      <td>Address</td>
                      <td>Checkup Time</td>
                      <td>Remove</td>
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
                        <td>{post.available}</td>
                        <td><Link to={`/DeleteDoctor/${post.doc_name}/${post.username}/${post.phone}/${post.email}/${post.address}`}>Delete</Link></td>
                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>
            <Link to={"/AddDoctor"}>Add Doctor</Link>
        </div>

    )
}
export default Doctor;