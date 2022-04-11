import React,{useEffect, useState} from "react";
import axios from 'axios';


const Profile=()=>{
    
    const[profiles,setProfile]=useState([]);
    //let object=JSON.parse( localStorage.getItem('user'));
    let username ="Moyez01@@"; //object.username;
    //console.log(username);
    useEffect(()=>{
        var obj ={username:{username}};
        axios.post("/AdminProfile",obj)
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
    <br/><br/><br/><h3>Admin Profile</h3><br/><br/>      
    <table align='center' border= '1px solid black' border-radius= '10px'>
    <thead>    
      <tr>
          <td>Name</td>
          <td>Phone</td>
          <td>Email</td>
          <td>Statement</td>
          <td>Address</td>
          
      </tr>
    </thead>
    <tbody>
    {
        
            <tr>
               <td>{profiles.name}</td>
               <td>{profiles.phone}</td>
               <td>{profiles.email}</td>
               <td>{profiles.statement}</td>
               <td>{profiles.address}</td>
         </tr>

          
    }
    </tbody>     
    </table>
  </div>  
    )
}
export default Profile;