import React,{useState,useEffect} from "react";
import axios from 'axios';
import Header from "./header";

const Home=()=>{
    const[doctors,setDoctor]=useState([]);
    const[cabin,setCabin]=useState([]);
    const[lab,setLab]=useState([]);
    const[hospital,setHospital]=useState([]);
    
    useEffect(()=>{
        
        axios.get("/review")
        .then(resp=>{
            //console.log(resp.data[0]);
            //console.log(resp.data[0]);
            setDoctor(resp.data[0]);
            setCabin(resp.data[1]);
            setLab(resp.data[2]);
            setHospital(resp.data[3]);

        })
        .catch(err=>{
            console.log(err);
        })

    },[]);



    return(
        <div>
            <Header/>
            <br/><br/><h3>Doctor ,Labtest ,Cabin ,Hospital Management System Review </h3><br/><br/><br/><br/>
            <h3>Doctor Review</h3>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>Patain Name</td>
                      <td>Doctor Name</td>
                      <td>Review</td>
                      <td>Rating</td>
                  </tr>

              </thead>
              <tbody>
              {
                doctors.map(post => (
                    <tr key={post.id}>
 
                            <td>{post.pataint_name}</td>
                            <td>{post.doctor_name}</td>
                            <td>{post.comment}</td>
                            <td>{post.rating}</td>
 
                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>
            <h3>Labtest Review </h3>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>Patain Name</td>
                      <td>Labtest Name</td>
                      <td>Review</td>
                      <td>Rating</td>
                  </tr>

              </thead>
              <tbody>
              {
                lab.map(post => (
                    <tr key={post.id}>
                        
                        <td>{post.pataint_name}</td>
                        <td>{post.labtest_name}</td>
                        <td>{post.comment}</td>
                        <td>{post.rating}</td>

                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>
            <h3>Cabin Review</h3>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>Patain Name</td>
                      <td>Cabin Room</td>
                      <td>Review</td>
                      <td>Rating</td>
                      
                  </tr>

              </thead>
              <tbody>
              {
                cabin.map(post => (
                    <tr key={post.id}>
                        
                        <td>{post.pataint_name}</td>
                        <td>{post.cabin_name}</td>
                        <td>{post.comment}</td>
                        <td>{post.rating}</td>
 
                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>
            <h3>Hospital System Review</h3>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>Patain Name</td>
                      <td>Review</td>
                      <td>Rating</td>
                      
                  </tr>

              </thead>
              <tbody>
              {
                hospital.map(post => (
                    <tr key={post.id}>
                        
                        <td>{post.name}</td>
                        <td>{post.comment}</td>
                        <td>{post.ratting}</td>
 
                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>
            
        </div>
    )
}
export default Home;