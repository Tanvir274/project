import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

import Button from 'react-bootstrap/Button';

const Pataint=()=>{
    


    const[pataint,setPataint]=useState([]);

    useEffect(()=>{
        axios.get("/Pataintlist")
        .then(resp=>{
            console.log(resp.data);
            //console.log(resp.data[0]);
            setPataint(resp.data);
            
            

        })
        .catch(err=>{
            console.log(err);
        })

    },[]);


    

    return(
        <div>
            <br/><br/><br/>
            <h3>Pataient List </h3><br/>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>Name</td>
                      <td>Username</td>
                      <td>Phone</td>
                      <td>Email</td>
                      <td>Blood Group</td>
                      <td>Address</td>
                      <td>Remove</td>
                  </tr>

              </thead>
              <tbody>
              {
                pataint.map(post => (
                    <tr key={post.id}>
                        <td>{post.name}</td>
                        <td>{post.username}</td>
                        <td>{post.phone}</td>
                        <td>{post.email}</td>
                        <td>{post.group}</td>
                        <td>{post.address}</td>
                        <td><Link to={`/DeletePataint/${post.name}/${post.username}/${post.phone}/${post.email}/${post.address}`}><Button variant="danger">Delete</Button></Link></td>
                        
                    </tr>
                    
                ))
              }           
              </tbody>
            </table><br/><br/><br/>
        </div>

    )
}
export default Pataint;