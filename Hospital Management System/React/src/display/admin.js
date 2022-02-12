import React from "react";
import Header from "./header";

const Profile=()=>{
    

return(

  <div>
    <Header/>
    <br/><br/><br/><h1>Admin Panel Information</h1><br/><br/>      
    <table align='center' border= '1px solid black' border-radius= '10px'>
    <thead>    
       <tr>
          <td>Name</td>
          <td>Contact Number</td>
          <td>Email</td>
          <td>Admin About</td>
          <td>Address</td>
       </tr>
    </thead>
    <tbody>
    {
     <tr>
        <td>MD. Safayet Kobir</td>
        <td>0123456789</td>
        <td>safayet@gmail.com</td>
        <td>ABC Hospital Admin</td>
        <td>Shibgonj, Chapainawabgonj, Rajshahi</td>
      </tr>
        

    }
    </tbody>     
    </table>
  </div>  
    )
}
export default Profile;