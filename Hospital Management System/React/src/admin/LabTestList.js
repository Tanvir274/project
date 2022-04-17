import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

import Button from 'react-bootstrap/Button';

const Labtest=()=>{
    

    const[Labtest,setLabtest]=useState([]);

    useEffect(()=>{
        axios.get("/A_LabTestList")
        .then(resp=>{
            console.log(resp.data);
            //console.log(resp.data[0]);
            setLabtest(resp.data);
            
            

        })
        .catch(err=>{
            console.log(err);
        })

    },[]);


    

    return(
        <div>
            <br/><br/><br/>
            <h3>Labtest List </h3><br/>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>Name</td>
                      <td>Test Time</td>
                  </tr>

              </thead>
              <tbody>
              {
                Labtest.map(post => (
                    <tr key={post.id}>
                        <td>{post.type}</td>
                        <td>{post.available}</td>
                    </tr>
                ))
              }           
              </tbody>
            </table><br/>
            <Link to={"/A_AddLabtest"}><Button variant="primary">Add Labtest</Button></Link>
        </div>

    )
}
export default Labtest;