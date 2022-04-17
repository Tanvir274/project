import React,{useState,useEffect} from "react";
import axios from 'axios';

const Cabin=()=>{
    

    const[list,setList]=useState([]);

    useEffect(()=>{
        axios.get("/N_CabinList")
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
            <h3>Booked Cabin List </h3><br/>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>Cabin No</td>
                      <td>Status</td>
                  </tr>

              </thead>
              <tbody>
              {
                list.map(post => (
                    <tr key={post.id}>
                        <td>{post.cabin_no}</td>
                        <td>{post.slot}</td>
                           
                    </tr>
                ))
              }           
              </tbody>
            </table><br/>
            
        </div>

    )
}
export default Cabin;