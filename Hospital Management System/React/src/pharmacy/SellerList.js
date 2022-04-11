import React,{useState,useEffect} from "react";
import axios from 'axios';

const SellerList=()=>{
    

    const[List,setList]=useState([]);

    useEffect(()=>{
        axios.get("/EmployeeSellList")
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
            <h3>Medicine Sell History </h3>
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>Name of the person updating</td>
                      <td>Date</td>                     
                      <td>Amount (TK)</td>
                  </tr>

              </thead>
              <tbody>
              {
                List.map(post => (
                    <tr key={post.id}>
                        <td>{post.name}</td>
                        <td>{post.date}</td>
                        <td>{post.amount}</td>
                        
                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>
            
        </div>

    )
}
export default SellerList;