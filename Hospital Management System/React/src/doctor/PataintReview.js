import React,{useState,useEffect} from "react";
import axios from 'axios';


const Review=()=>{
    const[reviewer,setReviewer]=useState([]);
    
    let object= JSON.parse( localStorage.getItem('user'));
    let username = object.username;
    var obj ={username:{username}};
    useEffect(()=>{
        var obj ={username:{username}};
    
        axios.post("/ReviewList",obj)
        .then(resp=>{
            //alert("ok");
    
            setReviewer(resp.data);
    
            
        })
        .catch(err=>{
            console.log(err.data);
        })

    },[]);

    return(
        <div>
            
            <br/><br/><h3>Pataint Review </h3><br/><br/><br/><br/>
            
            <table align='center' border= '1px solid black' border-radius= '10px'>
              <thead>
                  <tr>
                      <td>Patain Name</td>
                      <td>Review</td>
                      <td>Rating</td>
                  </tr>

              </thead>
              <tbody>
              {
                reviewer.map(post => (
                    <tr key={post.id}>
 
                            <td>{post.pataint_name}</td>
                            <td>{post.comment}</td>
                            <td>{post.rating}</td>
 
                    </tr>
                ))
              }           
              </tbody>
            </table><br/><br/><br/>
            
            
        </div>
    )
}
export default Review;