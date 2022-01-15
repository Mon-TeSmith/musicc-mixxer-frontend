import React, { useState } from 'react';
import axios from 'axios';
import "./SignupPage.css"
import FormInput from '../FormInput';
// import { CleaningServices, LocalLaundryService } from '@mui/icons-material';

const SignupPage = () => {
    const [values, setValues] = useState({

        email: "",

        password: "",
        confirmPassword: "",
        errorMessage: "",
        confirmPassword: ""
    });

    async function handleSubmit(e) {
        e.preventDefault();
        if (values.password !== values.confirmPassword) {
            return;
        }

        const registerUser = {

            email: values.email,
            password: values.password
        }

        let response = await axios.post(`http://localhost:5000/api/users/register`, registerUser);
        if (response.status === 200) {
            console.log(response.data);
            localStorage.setItem('token', response.data)
            window.location = '/';
        };

        if (response.status === 400) {
            console.log(response.error)
        };
    };



    const inputs = [

        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Email",

            label: "Email:",
            required: true,
        },

        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",

            label: "Password:",
            // pattern: "^(?=.*[a-zA-Z])(?=.*d)(?=.*[!@#$%^&*()_+])[A-Za-zd][A-Za-zd!@#$%^&*()_+]{7,19}$",
            required: true,
        },
        {
            id: 3,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",

            label: "Password:",
            // pattern: "^(?=.*[a-zA-Z])(?=.*d)(?=.*[!@#$%^&*()_+])[A-Za-zd][A-Za-zd!@#$%^&*()_+]{7,19}$",
            required: true,
        },

    ];

    console.log("re-rendered");


    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    console.log(values);
    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
                <h1>Sign-Up</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={handleChange}
                    />
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SignupPage;