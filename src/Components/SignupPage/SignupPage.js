import React, {useState} from 'react';
import axios from 'axios';


function SignupPage(props) {

    const[email, getEmail]=useState('');
    const[password, getPassword]= useState('');

    async function handlesubmit(e){
        e.preventDefault();

        const getUser={
            email:email,
            password:password,  
        };
        let response = await axios.post(`http://localhost:3000/api/users/login`, getUser);
        console.log(response.data);
        localStorage.setItem('token', response.data)
        window.location ='/';
    }

    return (
        <form className="signupPage" onSubmit={handlesubmit}>
            <label>create username</label>
            <input value={email} onChange={(event) => getEmail(event.target.value)} type='text' />

            <label>create password</label>
            <input value={password} onchange={(event) => getPassword(event.target.value)} type='text' />
            <button href="/profile" type='submit'>Sign Up</button>
            <img className="/signupPage" src="./Images/headphones.jpeg" alt="" />
        </form> 
    );
}
export default SignupPage;