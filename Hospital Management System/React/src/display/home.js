import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import Header from "./header";

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
            //console.log(resp);
            //console.log(resp.data[0]);
            setDoctor(resp.data[0]);
            setCabin(resp.data[1]);
            setLab(resp.data[2]);
            setMedicin(resp.data[3]);

        })
        .catch(err=>{
            console.log(err);
        })

    },[]);


    return(
        <div>
            <Header/>
            <br/><br/><h1>DashBoard Page</h1><br/>
            <h1>WELLCOME :{username}</h1><br/><br/><br/><br/>
            <h1>Available Doctor And Checkup Time </h1>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>ID</td>
                      <td>Name</td>
                      <td>Checkup Time</td>
                      <td>Appointment set</td>
                      <td>Comment And Rating</td>
                  </tr>

              </thead>
              <tbody>
              {
                doctors.map(post => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.doc_name}</td>
                        <td>{post.available}</td>
                        <td><Link to={`/doctor_appointment/${post.id}/${post.doc_name}`}>Confirm_Appointment</Link></td>
                        <td><Link to={`/doctor_review/${post.id}/${post.doc_name}`}>Enter</Link></td>
                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>
            <h1>Labtest List </h1>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>ID</td>
                      <td>Type</td>
                      <td>Available Test Time</td>
                      <td>Labtest Appointment</td>
                      <td>Comment And Rating</td>
                      
                  </tr>

              </thead>
              <tbody>
              {
                lab.map(post => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.type}</td>
                        <td>{post.available}</td>
                        <td><Link to={`/lab_appointment/${post.id}/${post.type}`}>Confirm_Appointment</Link></td>
                        <td><Link to={`/lab_review/${post.id}/${post.type}`}>Enter</Link></td>
                        
                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>
            <h1>Cabin List</h1>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>ID</td>
                      <td>Cabin No</td>
                      <td>Status</td>
                      <td>Booking Cabin</td>
                      <td>Comment And Rating</td>
                  </tr>

              </thead>
              <tbody>
              {
                cabin.map(post => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.cabin_no}</td>
                        <td>{post.slot}</td>
                        <td><Link to={`/cabin_appointment/${post.id}/${post.cabin_no}`}>Confirm_cabin</Link></td>
                        <td><Link to={`/cabin_review/${post.id}/${post.cabin_no}`}>Enter</Link></td>
                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>
            <h1>Medicin Corner</h1>
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