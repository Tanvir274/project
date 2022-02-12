import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import Header from "./header";

const Profile=()=>{
    const[profiles,setProfile]=useState([]);
    let object=JSON.parse( localStorage.getItem('user'));
    let username = object.username;
    console.log(username);
    useEffect(()=>{
        var obj ={username:{username}};
        axios.post("/profile",obj)
        .then(resp=>{
            //console.log(resp);
            //console.log(resp.data[0]);
            setProfile(resp.data);
            

        })
        .catch(err=>{
            console.log(err);
        })

    },[]);
    return(

  <div>
    <Header/>
    <br/><br/><br/><h1>Your Profile</h1><br/><br/>      
    <table align='center' border= '1px solid black' border-radius= '10px'>
    <thead>    
      <tr>
          <td>Name</td>
          <td>Username</td>
          <td>Password</td>
          <td>Phone</td>
          <td>Email</td>
          <td>Blood Group</td>
          <td>DOB</td>
          <td>Address</td>
          <td>Change</td>
      </tr>
    </thead>
    <tbody>
    {
        
            <tr>
               <td>{profiles.name}</td>
               <td>{profiles.username}</td>
               <td>{profiles.password}</td>
               <td>{profiles.phone}</td>
               <td>{profiles.email}</td>
               <td>{profiles.group}</td>
               <td>{profiles.dob}</td>
               <td>{profiles.address}</td>
               <td><Link to={`/editprofile/${profiles.id}/${profiles.name}/${profiles.password}/${profiles.phone}/${profiles.email}/${profiles.address}`}>Edit</Link></td>    
         </tr>

          
      
    }
    </tbody>     
    </table>
  </div>  
    )
}
export default Profile;