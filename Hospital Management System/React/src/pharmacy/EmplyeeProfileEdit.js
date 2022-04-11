import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory } from "react-router";
import {useParams}  from 'react-router-dom';



const  EditProfile= ()=> {
  const history = useHistory();

  const {username} = useParams();
  const {name} = useParams();
  const {password} = useParams();
  const {phone} = useParams();
  const {address} = useParams();


  const [ename, setname] = useState(name);
  const [epassword, setpassword] = useState(password);
  const [ephone, setphone] = useState(phone);
  const [eaddress, setaddress] = useState(address);



  
   

  

  var Submit=()=> {
    
    
    var obj ={username:username,name:ename,password:epassword,phone:ephone,
        address:eaddress};

        

            axios.post("/EmployeeEditProfile",obj)
            .then(resp=>{
                alert("Update Succesfull");

                //console.log(resp.data);
                history.push("/P_Profile");

                
            })
            .catch(err=>{
                console.log(err.data);
            })
        

  } 
  
  return (
   <div>   
    <form >
       <br/><br/><br/> <h1>Edit Profile</h1><br/><br/>
       <h3> </h3>
      <span>Name</span><br/>
      <input type="text"placeholder={name}  onChange={(e)=>setname(e.target.value)}  /><br/>
      <span></span> 
      
      <span>Password</span><br/>
      <input type="text" placeholder={password} onChange={(e)=>setpassword(e.target.value)}   /><br/>
      <span>Phone Number</span><br/>
      <input type="number" placeholder={phone} onChange={(e)=>setphone(e.target.value)}   /><br/>
      
      <span>Address</span><br/>
      <input type="text" placeholder={address}  onChange={(e)=>setaddress(e.target.value)}  /><br/>

    </form>
    <button onClick={Submit}>Submit</button>
   </div> 
  );
}
export default EditProfile;