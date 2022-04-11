import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

const MedicinList=()=>{
    

    const[List,setList]=useState([]);

    useEffect(()=>{
        axios.get("/MedicinList")
        .then(resp=>{
            console.log(resp.data);
            //console.log(resp.data[0]);
            setList(resp.data);
            
            

        })
        .catch(err=>{
            console.log(err);
        })

    },[]);


    

    return(
        <div>
            <br/><br/><br/>
            <h3>Medicine List </h3><br/>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>Medicin Group Name</td>
                      <td>Status</td>                     
                  </tr>

              </thead>
              <tbody>
              {
                List.map(post => (
                    <tr key={post.id}>
                        <td>{post.group_name}</td>
                        <td>{post.status}</td>
            
                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>
            
        </div>

    )
}
export default MedicinList;