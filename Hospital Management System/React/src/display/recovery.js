import React,{useState} from "react";
import axios from "axios";
import { useHistory } from "react-router";


const Recovery=()=>{
    const history = useHistory();
    let [username,setUser]=useState();
    let [email,setEmail]=useState();
    let [password,setPass]=useState();

    const submit=()=>{
        //alert(username+" "+password);
        //var obj ={username:"Tanvir01",password:"1234"};

        var obj ={username:username,email:email,password:password};
            axios.post("/recovery/submit",obj)
            .then(resp=>{

                console.log(resp.data);
                alert("Passwod Change Successfully");
                
                
    
            })
            .catch(err=>{

                console.log(err);
                alert("Enter Right Username & Email Id");
            })     
    }
    const back = e => {
        history.push("/");
    }

    return(
        <div>
            
            <br/><br/><br/><h1>Id Recover Page </h1>
            <form>
                <span>Username</span><br/>
                <input type= "text" value={username} onChange={(e)=>setUser(e.target.value)} /><br/>
                <span>Emai</span><br/>
                <input type= "text" value={email} onChange={(e)=>setEmail(e.target.value)} /><br/>
                <span>Enter New Password</span><br/>
                <input type= "text" value={password} onChange={(e)=>setPass(e.target.value)} />
            </form>
            <button onClick={submit}>Submit</button><br/><br/><br/>

            <button onClick={back}>Back</button>
        </div>
    )
}
export default Recovery;
