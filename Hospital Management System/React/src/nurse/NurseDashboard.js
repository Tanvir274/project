
import React,{useEffect, useState} from "react";
import axios from 'axios';

const Duty=()=>{
    
    const[Duty,setDuty]=useState([]);
    let object=JSON.parse( localStorage.getItem('user'));
    let username = object.username;
    //console.log(username);
    useEffect(()=>{
        var obj ={username:{username}};
        axios.post("/NurseDutyArea",obj)
        .then(resp=>{
            //console.log(resp.data);
            //console.log(resp.data[0]);
            setDuty(resp.data);
            

        })
        .catch(err=>{
            console.log(err);
        })

    },[]);
    return(

          <div>
            <br/><br/><br/><h2>Welcome: {Duty.name}</h2><br/><br/>      
                <table align='center' border= '1px solid black' border-radius= '10px'>
                    <thead>    
                        <tr>
                            <td>Your Duty Area</td>
                            <td>{Duty.duty}</td>
                    
                        </tr>
                    </thead>
                    
                </table>
          </div>  
    )
}
export default Duty;