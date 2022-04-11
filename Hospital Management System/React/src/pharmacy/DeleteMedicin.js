import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import {useParams}  from 'react-router-dom';


const DeleteMedicin=()=>{
    const history = useHistory();
    const {group_name} = useParams();

    var Submit=()=> {
    
        var obj ={name:group_name};
    
            
                axios.post("/MedicinDelete",obj)
                .then(resp=>{
                    alert("Delete Successfully");
    
                    console.log(resp.data);
                    history.push("/P_MedicinList");
    
                    
                })
                .catch(err=>{
                    console.log(err.data);
                })
      } 

    return (
        <div>
            <br/><br/><br/><h3> Medicin Delete Action Page</h3><br/><br/>      
    <table align='center' border= '1px solid black' border-radius= '10px'>
    <thead>    
      <tr>
          <td>Delete Action Medicin Group Name: <h2>{group_name} </h2></td>
          
      </tr>
    </thead>
        
    </table>
    <br/><br/>
    <button onClick={Submit}> Confirm Delete</button>
    </div>

    )
}
export default DeleteMedicin;