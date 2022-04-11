import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import Header from "./header";

import Button from 'react-bootstrap/Button';

const Home=()=>{
    const[doctors,setDoctor]=useState([]);
    const[cabin,setCabin]=useState([]);
    const[lab,setLab]=useState([]);
    const[Medicin,setMedicin]=useState([]);
    let object= JSON.parse( localStorage.getItem('user'));
    let username = object.username;
    useEffect(()=>{
        axios.get("/home")
        .then(resp=>{
            setDoctor(resp.data[0]);
            setCabin(resp.data[1]);
            setLab(resp.data[2]);
            setMedicin(resp.data[3]);

        })
        .catch(err=>{
            console.log(err);
        })

    },[]);

    const[Name,setName]=useState([]);

    useEffect(()=>{
        var obj ={username:{username}};
        axios.post("/profile",obj)
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
            <Header/>
            <br/><br/><br/>
            <h2>Welcome :{Name.name}</h2><br/><br/><br/><br/>
            <h3>Available Doctor And Checkup Time </h3>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>ID</td>
                      <td>Name</td>
                      <td>Checkup Time</td>
                      <td>Action(Appointment set)</td>
                      <td>Action(Comment And Rating)</td>
                  </tr>

              </thead>
              <tbody>
              {
                doctors.map(post => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.doc_name}</td>
                        <td>{post.available}</td>
                        <td><Link to={`/doctor_appointment/${post.id}/${post.doc_name}`}><Button variant="primary">Set Appointment </Button></Link></td>
                        <td><Link to={`/doctor_review/${post.id}/${post.doc_name}`}><Button variant="info">Enter</Button></Link></td>
                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>
            <h3>Lab Test List </h3>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>ID</td>
                      <td>Type</td>
                      <td>Available Test Time</td>
                      <td>Action(Lab Test Appointment)</td>
                      <td>Action(Comment And Rating)</td>
                      
                  </tr>

              </thead>
              <tbody>
              {
                lab.map(post => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.type}</td>
                        <td>{post.available}</td>
                        <td><Link to={`/lab_appointment/${post.id}/${post.type}`}><Button variant="primary">Set Lab Test</Button></Link></td>
                        <td><Link to={`/lab_review/${post.id}/${post.type}`}><Button variant="info">Enter</Button></Link></td>
                        
                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>
            <h3>Cabin List</h3>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>ID</td>
                      <td>Cabin No</td>
                      <td>Status</td>
                      <td>Action(Booking Cabin)</td>
                      <td>Action(Comment And Rating)</td>
                  </tr>

              </thead>
              <tbody>
              {
                cabin.map(post => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.cabin_no}</td>
                        <td>{post.slot}</td>
                        <td><Link to={`/cabin_appointment/${post.id}/${post.cabin_no}`}><Button variant="primary">Booking Cabin</Button></Link></td>
                        <td><Link to={`/cabin_review/${post.id}/${post.cabin_no}`}><Button variant="info">Enter</Button></Link></td>
                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>
            <h3>Medicin Corner</h3>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>ID</td>
                      <td>Medicin Group Name</td>
                      <td>Status</td>
                  </tr>

              </thead>
              <tbody>
              {
                Medicin.map(post => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.group_name}</td>
                        <td>{post.status}</td>
                    </tr>
                ))
              }           
              </tbody>
            </table>
        </div>
    )
}
export default Home;