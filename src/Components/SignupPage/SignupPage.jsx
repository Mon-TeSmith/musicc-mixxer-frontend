import React, {useState} from 'react';
import axios from 'axios';
import "./SignupPage.css"
import FormInput from '../FormInput';
import { LocalLaundryService } from '@mui/icons-material';

    const{username, setUsername}= useState("");
    const{email, setEmail}= useState("");
    const{firstName, setFirstName}= useState("");
    const{lastName, setLastName}= useState("");
    // const usernameRef = useRef()
    
    

    console.log("re-rendered");
    
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(userNameRef);

    }
        preventDefault();

        // const getUser= {
        //     username:username,
        //     email:email,
        //     firstName:firstName,
        //     lastName:lastName,   
        // };
        
        // let response = await axios.post(`http://localhost:3000/api/users/login`, getUser);
        // console.log(response.data);
        // localStorage.setItem('token', response.data)
        // window.location ='/';
  
    return (
        <div className="app"> 
            <form onSubmit={handleSubmit}> 
                <FormInput refer={usernameRef} />
                <FormInput placeholder="Email:" setEmail={setEmail}/>
                <FormInput placeholder="FirstName:" setFirstName={setFirstName}/>
                <FormInput placeholder="LastName:" setLastName={setLastName}/>
                <button>Submit</button>
                {/* <img className="bg-image" src= alt="" /> */} 
            </form>         
        </div>
    );   
 }

 export default SignupPage;