import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

import Button from 'react-bootstrap/Button';

const Cabin=()=>{
    

    const[list,setList]=useState([]);

    useEffect(()=>{
        axios.get("/N_BookedCabinListAll")
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
        <div><br/><br/><br/>
            <h3>All booked Cabin List </h3>

                <table >
                <thead>
                    <tr>
                        <td>Pataint Name</td>
                        <td>Cabin No</td>
                        <td>Date</td>
                        <td>Action(Status Change)</td>
                    </tr>

                </thead>
                <tbody>
                {
                    list.map(post => (
                        <tr key={post.id}>
                            <td>{post.pataint_name}</td>
                            <td>{post.cabin_no}</td>
                            <td>{post.date}</td>
                            
                            <td><Link to={`/N_ChangeCabinStatus/${post.cabin_no}`}><Button variant="success">Change Status</Button></Link></td>

                            
                        </tr>
                    ))
                }           
                </tbody>
                </table><br/>
            
        </div>

    )
}
export default Cabin;