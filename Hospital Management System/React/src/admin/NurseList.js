import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import { useHistory } from "react-router";
import axios from 'axios';

import Button from 'react-bootstrap/Button';

const Nurse=()=>{
    const history = useHistory();

    const[nurses,setNurse]=useState([]);

    useEffect(()=>{
        axios.get("/Nurselist")
        .then(resp=>{
            console.log(resp.data);
            //console.log(resp.data[0]);
            setNurse(resp.data);
            
            

        })
        .catch(err=>{
            console.log(err);
        })

    },[]);


    

    return(
        <div>
            <br/><br/><br/>
            <h3>Available Nurse  </h3><br/>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>Name</td>
                      <td>Username</td>
                      <td>Phone</td>
                      <td>Email</td>
                      <td>Address</td>
                      <td>Duty Area</td>
                      <td>Action(Set Duty)</td>
                      <td>Action(Delete)</td>
                  </tr>

              </thead>
              <tbody>
              {
                nurses.map(post => (
                    <tr key={post.id}>
                        <td>{post.name}</td>
                        <td>{post.username}</td>
                        <td>{post.phone}</td>
                        <td>{post.email}</td>
                        <td>{post.address}</td>
                        <td>{post.duty}</td>
                        <td><Link to={`/NurseDutySet/${post.name}/${post.username}/${post.duty}`}><Button variant="success">Change Duty</Button></Link></td>
                        <td><Link to={`/DeleteNurse/${post.name}/${post.username}/${post.phone}/${post.email}/${post.address}`}><Button variant="danger">Delete</Button></Link></td>
                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>
            <Link to={"/AddNurse"}><Button variant="primary">Add Nurse</Button></Link>
        </div>

    )
}
export default Nurse;