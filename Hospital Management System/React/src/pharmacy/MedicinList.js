import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

import Button from 'react-bootstrap/Button';

const MedicinList=()=>{
    

    const[List,setList]=useState([]);

    useEffect(()=>{
        axios.get("/MedicinList")
        .then(resp=>{
            console.log(resp.data);
            //console.log(resp.data[0]);
            setList(resp.data);
            
            

        })
        .catch(err=>{
            console.log(err);
        })

    },[]);

    const[Name,setName]=useState([]);
    let object=JSON.parse( localStorage.getItem('user'));
    let username = object.username;
    //console.log(username);
    useEffect(()=>{
        var obj ={username:{username}};
        axios.post("/EmployeeProfile",obj)
        .then(resp=>{
            //console.log(resp.data);
            //console.log(resp.data[0]);
            setName(resp.data);
            

        })
        .catch(err=>{
            console.log(err);
        })

    },[]);



    

    return(
        <div>

            <h2>Welcome : {Name.name}</h2><br/><br/>

            <br/><br/><br/>
            <h1>Medicine List </h1>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>Medicine Group Name</td>
                      <td>Status</td>                     
                      <td>Action(Change Status)</td>
                      <td>Action(Delete)</td>
                  </tr>

              </thead>
              <tbody>
              {
                List.map(post => (
                    <tr key={post.id}>
                        <td>{post.group_name}</td>
                        <td>{post.status}</td>
                        <td><Link to={`/P_ChangeStatus/${post.group_name}/${post.status}`}><Button variant="primary">Change</Button></Link></td>
                        <td><Link to={`/P_DeleteGroup/${post.group_name}`}><Button variant="danger">Delete</Button></Link></td>
                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>
            
        </div>

    )
}
export default MedicinList;