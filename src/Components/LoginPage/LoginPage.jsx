import { useState } from 'react';
import FormInput from '../FormInput';
import axios from 'axios';
import "./LoginPage.css";

const LoginPage = () => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    async function handleSubmit(e) {
        e.preventDefault();

        const loginUser = {

            email: values.email,
            password: values.password,

        }

        let response = await axios.post(`http://localhost:5000/api/users/login`, loginUser);
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
            placeholder: "Email:",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password:",
            label: "Password:",
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
                <h1>Sign-In</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={handleChange}
                    />
                ))}
                <button type="submit">Log-In</button>
            </form>
        </div>
    );
};

export default LoginPage;