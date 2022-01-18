import React, { useState } from 'react';
import axios from 'axios';

import FormInput from '../FormInput';
// import { CleaningServices, LocalLaundryService } from '@mui/icons-material';

const Profile = () => {
    const [values, setValues] = useState({

        username: "",
    });

    async function handleSubmit(e) {
        e.preventDefault();
        if (values.password !== values.confirmPassword) {
            return;
        }

        const collaboratorProfile = {

            email: values.email,
        }

        let response = await axios.post(`http://localhost:5000/api/users/collaboratorProfile`, collaboratorProfile);
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
            services: "text",
            type: "text",
            placeholder: "Services Needed",

        }

    ];

    console.log("re-rendered");


    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    console.log(values);
    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
                <h1>Find Collaborators:</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={handleChange}
                    />
                ))}
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default Profile;