import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import { useHistory } from "react-router";
import axios from 'axios';

const Pharmacy=()=>{
    const history = useHistory();

    const[Employee,setEmployee]=useState([]);

    useEffect(()=>{
        axios.get("/PharmacyEmployeeList")
        .then(resp=>{
            console.log(resp.data);
            //console.log(resp.data[0]);
            setEmployee(resp.data);
            
            

        })
        .catch(err=>{
            console.log(err);
        })

    },[]);


    

    return(
        <div>
            <h1>Pharmacy Employee List  </h1>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>Name</td>
                      <td>Username</td>
                      <td>Phone</td>
                      <td>Email</td>
                      <td>Address</td>
                      <td>Duty Pharmacy No</td>
                      <td>Remove</td>
                  </tr>

              </thead>
              <tbody>
              {
                Employee.map(post => (
                    <tr key={post.id}>
                        <td>{post.name}</td>
                        <td>{post.username}</td>
                        <td>{post.phone}</td>
                        <td>{post.email}</td>
                        <td>{post.address}</td>
                        <td>{post.duty}</td>
                        <td><Link to={`/DeleteEmployee/${post.name}/${post.username}/${post.phone}/${post.email}/${post.address}`}>Delete</Link></td>
                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>
            <Link to={"/AddEmployee"}>Add Pharmacy Employee</Link>
        </div>

    )
}
export default Pharmacy;