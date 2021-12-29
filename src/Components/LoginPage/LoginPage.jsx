import {useState} from 'react';
import FormInput from '../FormInput';
import axios from 'axios';
import "./LoginPage.css";

import { CleaningServices, LocalLaundryService } from '@mui/icons-material';

const LoginPage =() => {
    const [values, setValues] = useState({
        username:"",
        password:""
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
            name:"password",
            type:"password",
            placeholder:"Password",
            errorMessage:"Password should be 8-20 characters and should at least include 1 letter, 1 number and 1 special character!",
            label:"Password:",
            pattern: "^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$",
            required: true,
        },
    ];

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
                    <h1>Sign In</h1>
                        {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                         />
                        ))};
                         <button>Log In</button>
                </form>
            </div>
        );  
     };
            
     export default LoginPage;