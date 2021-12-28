import React, {useState} from 'react';
import axios from 'axios';
import "./SignupPage.css"
import FormInput from '../FormInput';
import { LocalLaundryService } from '@mui/icons-material';

    const SignupPage =() => {
        const [values, setValues] = useState({
            username:"",
            email:"",
            birthday:"",
            password:"",
            confirmPassword:"",
        });

        const inputs = [
            {
                id:1,
                name:"username",
                type:"text",
                placeholder:"Username",
                label:"Username"
            },
            {
                id:2,
                name:"Email",
                type:"text",
                placeholder:"Email",
                label:"Email"
            },
            {
                id:3,
                name:"Birthday",
                type:"text",
                placeholder:"Birthday",
                label:"Birthday"
            },
            {
                id:4,
                name:"password",
                type:"password",
                placeholder:"password",
                label:"password"
            },
            {
                id:5,
                name:"confirmPassword",
                type:"passwprd",
                placeholder:"confirmPassword",
                label:"confirmPassword"
            }
        ];

        let response = await axios.post(`http://localhost:3000/api/users/login`, getUser);
        console.log(response.data);
        localStorage.setItem('token', response.data)
        window.location ='/';
  
       
    
    console.log("re-rendered");
    
    const handleSubmit = (e) => {
        e.preventDefault();
    };  
   
        return (
            <div className="app"> 
                <form onSubmit={handleSubmit}> 
                    {inputs.map((input) => (
                        <FormInput key={input.id} {...input} />
                    ))}
                    <button>Submit</button>
                    {/* <img className="bg-image" src= alt="" /> */} 
                </form>         
            </div>
    );  
 };
  
        
 export default SignupPage;