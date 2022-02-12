import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import {useParams}  from 'react-router-dom';


const DeletePharmacyEmployee=()=>{
    const history = useHistory();
    const {name,username,phone,email,address} = useParams();

    var Submit=()=> {
    
        var obj ={username:username};
    
            
                axios.post("/DeletePharmacyEmployee",obj)
                .then(resp=>{
                    alert("Delete Successfully");
    
                    console.log(resp.data);
                    history.push("/PharmacyEmployee");
    
                    
                })
                .catch(err=>{
                    console.log(err.data);
                })
      } 

    return (
        <div>
            <br/><br/><br/><h1>You want to Delete : {name}</h1><br/><br/>      
    <table align='center' border= '1px solid black' border-radius= '10px'>
    <thead>    
      <tr>
          <td>Name</td>
          <td>Username</td>
          <td>Phone</td>
          <td>Email</td>
          <td>Address</td>

      </tr>
    </thead>
    <tbody>
    {
        
            <tr>
               <td>{name}</td>
               <td>{username}</td>
               <td>{phone}</td>
               <td>{email}</td> 
               <td>{address}</td>
               
         </tr>      
    }
    </tbody>     
    </table>
    <br/><br/>
    <button onClick={Submit}> Confirm Delete</button>
    </div>

    )
}
export default DeletePharmacyEmployee;