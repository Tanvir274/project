import React, { useState } from 'react';
import axios from "axios";
import {useParams}  from 'react-router-dom';



const  EditProfile= ()=> {
  const {username} = useParams();
  const {name} = useParams();
  const {password} = useParams();
  const {phone} = useParams();
  const {statement} = useParams();
  const {address} = useParams();


  /*const[name,set1]=useState();
  const[password,set2]=useState();
  const[phone,set3]=useState();
  const[statement,set4]=useState();
  const[address,set5]=useState();*/

  
  

  const [ename, setname] = useState(name);
  const [epassword, setpassword] = useState(password);
  const [ephone, setphone] = useState(phone);
  const [estatement, setstatement] = useState(statement);
  const [eaddress, setaddress] = useState(address);



  /*useEffect(()=>{
    var obj ={username:{username}};
    axios.post("/AdminProfile",obj)
    .then(resp=>{
        //console.log(resp);
        //console.log(resp.data[0]);
        var data= resp.data;
         set1(data.name);
         set2(data.password);
         set3(data.phone);
         set4(data.statement);
         set5(data.address);

         //console.log(setData);
        

    })
    .catch(err=>{
        console.log(err);
    })

},[]); */
   

  

  var Submit=()=> {
    
    
    var obj ={username:username,name:ename,password:epassword,phone:ephone,
        statement:estatement,address:eaddress};

        

            axios.post("/AdminEditProfile",obj)
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
    <form >
       <br/><br/><br/> <h3>Edit Profile</h3><br/><br/>
       <h3> </h3>
      <span>Name</span><br/>
      <input type="text"placeholder={name}  onChange={(e)=>setname(e.target.value)}  /><br/>
      <span></span> 
      
      <span>Password</span><br/>
      <input type="text" placeholder={password} onChange={(e)=>setpassword(e.target.value)}   /><br/>
      <span>Mobile Number</span><br/>
      <input type="number" placeholder={phone} onChange={(e)=>setphone(e.target.value)}   /><br/>
      <span>Statement</span><br/>
      <input type="text" placeholder={statement} onChange={(e)=>setstatement(e.target.value)}  /><br/>
      <span>Address</span><br/>
      <input type="text" placeholder={address}  onChange={(e)=>setaddress(e.target.value)}  /><br/>

    </form>
    <button onClick={Submit}>Submit</button>
   </div> 
  );
}
export default EditProfile;