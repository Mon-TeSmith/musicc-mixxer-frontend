import React, {useState} from 'react';
// import axios from 'axios';
import "./SignupPage.css"
import FormInput from '../FormInput';
// import { CleaningServices, LocalLaundryService } from '@mui/icons-material';

    const SignupPage =() => {
        const [values, setValues] = useState({
            username:"",
            email:"",
            birthday:"",
            password:"",
            errorMessage:"",
            confirmPassword:""
        });

        const inputs = [
            {
                id:1,
                name:"username",
                type:"text",
                placeholder:"Username",
                errorMessage:
                "UserName should be 3-16 characters and should not include any special characters!",
                label:"Username:",
                pattern: "^[A-Za-z0-9]{5, 16}$",
                required: true,
            },
            {
                id:2,
                name:"email",
                type:"email",
                placeholder:"Email",
                errorMessage:"Should be a valid email address!",
                label:"Email:",
                required: true,
            },
            {
                id:3,
                name:"birthday",
                type:"date",
                placeholder:"Birthday",
                errorMessage:"",
                label:"Birthday:"
            },
            {
                id:4,
                name:"password",
                type:"password",
                placeholder:"Password",
                errorMessage:"Password should be 8-20 characters and should at least include 1 letter, 1 number and 1 special character!",
                label:"Password:",
                pattern: "^(?=.*[a-zA-Z])(?=.*d)(?=.*[!@#$%^&*()_+])[A-Za-zd][A-Za-zd!@#$%^&*()_+]{7,19}$",
                required: true,
            },
            {
                id:5,
                name:"confirmPassword",
                type:"password",
                placeholder:"Confirm Password",
                errorMessage:"Password needs to match",
                label:"Confirm Password:",
                pattern: "values.password",
                required: true,
            }
        ];

        // let response = await axios.post(`http://localhost:3000/api/users/login`, getUser);
        // console.log(response.data);
        // localStorage.setItem('token', response.data)
        // window.location ='/';
  
    console.log("re-rendered");
    
    const handleSubmit = (e) => {
        e.preventDefault();   
    };  

    const onChange = (e) => {
       setValues({ ...values, [e.target.name]: e.target.value });
    };
        console.log(values);
        return (
            <div className="app"> 
                <form onSubmit={handleSubmit}> 
                    <h1>Register:</h1>
                        {inputs.map((input) => (
                            <FormInput 
                                key={input.id} 
                                {...input} 
                                value={values[input.name]} 
                                onChange={onChange} 
                            />
                        ))}
                        <button>Submit</button>
                </form>         
            </div>
    );  
 };
        
 export default SignupPage;