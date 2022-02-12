import React,{useState,useEffect} from "react";
import axios from 'axios';
import Header from "./header";

const Home=()=>{
    const[doctors,setDoctor]=useState([]);
    const[cabin,setCabin]=useState([]);
    const[lab,setLab]=useState([]);
    let object= JSON.parse( localStorage.getItem('user'));
    let username = object.username;
    /*const mydoctor =doctors.filter(doctors => doctors. pataint_username ==username)
    console.log(mydoctor)*/

    
    useEffect(()=>{
        var obj={username:{username}}
        axios.post("/details",obj)
        .then(resp=>{
            console.log(resp.data[0]);
            //console.log(resp.data[0]);
            setDoctor(resp.data[0]);
            setCabin(resp.data[1]);
            setLab(resp.data[2]);

        })
        .catch(err=>{
            console.log(err);
        })

    },[]);



    return(
        <div>
            <Header/>
            <h1>Taken Service Histroy</h1><br/><br/><br/><br/>
            <h1>Doctor Appointment Histroy</h1>
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
                doctors.map(post => (
                    <tr key={post.id}>
 
                            <td>{post.doctor_name}</td>
                            <td>{post.app_time}</td>
                            <td>{post.app_date}</td>
 
                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>
            <h1>Labtest List histroy </h1>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>Labtest Name</td>
                      <td>Time</td>
                      <td>Date</td>
                  </tr>

              </thead>
              <tbody>
              {
                lab.map(post => (
                    <tr key={post.id}>
                        
                        <td>{post.test_name}</td>
                        <td>{post.time}</td>
                        <td>{post.date}</td>

                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>
            <h1>Bookin Cabin Histray</h1>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>Cabin No</td>
                      <td>Date</td>
                      
                  </tr>

              </thead>
              <tbody>
              {
                cabin.map(post => (
                    <tr key={post.id}>
                        
                        <td>{post.cabin_no}</td>
                        <td>{post.date}</td>
 
                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>
            
        </div>
    )
}
export default Home;