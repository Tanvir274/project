import React, { useState } from 'react';
import axios from "axios";
import { useForm } from 'react-hook-form';
import {useParams}  from 'react-router-dom';
import Header from "./header";
const  EditProfile= ()=> {
  const {id} = useParams();
  const {name} = useParams();
  const {password} = useParams();
  const {phone} = useParams();
  const {email} = useParams();
  const {address} = useParams();

  const [ename, setname] = useState(name);
  const [epassword, setpassword] = useState(password);
  const [ephone, setphone] = useState(phone);
  const [eemail, setemail] = useState(email);
  const [eaddress, setaddress] = useState(address);
   

  

  var loginSubmit=()=> {
    
    
    var obj ={primary_id:id,name:ename,password:epassword,phone:ephone,
        email:eemail,address:eaddress};

        

            axios.post("/resubmit",obj)
            .then(resp=>{
                alert("Update Succesfull");

                console.log(resp.data);

                
            })
            .catch(err=>{
                console.log(err.data);
            })
        

  } 
  
  return (
   <div>
     <Header/>   
    <form >
       <br/><br/><br/> <h1>Edit Profile</h1><br/><br/>
       <h3> </h3>
      <span>Name</span><br/>
      <input type="text"placeholder={name}  onChange={(e)=>setname(e.target.value)}  /><br/>
      <span></span> 
      
      <span>Password</span><br/>
      <input type="text" placeholder={password} onChange={(e)=>setpassword(e.target.value)}   /><br/>
      <span>Email</span><br/>
      <input type="text" placeholder={email} onChange={(e)=>setemail(e.target.value)}  /><br/>
      <span>Mobile Number</span><br/>
      <input type="tel" placeholder={phone} onChange={(e)=>setphone(e.target.value)}   /><br/>
      <span>Address</span><br/>
      <input type="text" placeholder={address}  onChange={(e)=>setaddress(e.target.value)}  /><br/>

    </form>
    <button onClick={loginSubmit}>Submit</button>
   </div> 
  );
}
export default EditProfile;