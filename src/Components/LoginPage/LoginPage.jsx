import React, {useState} from 'react';
import axios from 'axios';
import "./LoginPage.css"


function LoginPage(props) {
    // const [username,getUsername]=useState('');
    const[email, getEmail]=useState('');
    const[password, getPassword]= useState('');



    async function handlesubmit(e){
        e.preventDefault();

        const getUser={
            email:email,
            password:password,
        };
        let response = await axios.post(`http://localhost:3000/api/users/login`, getUser);
        if(response.status==200){
            console.log(response.data);
            localStorage.setItem('token', response.data)
            window.location ='/';
        }
    }

    return (
       
            <form className="loginPage" onSubmit={handlesubmit}>
                <label>email:</label>
                    <input value={email} onChange={(event) => getEmail(event.target.value)} type='text' />

                <label>password:</label>
                    <input value={password} onChange={(event) => getPassword(event.target.value)} type='text' />
                
                    <button href="/profile" type='submit'>Log In</button>
                    <img className="/loginPage" src="./Images/mixer.jpeg" alt="" />
            
            </form>
        
    );
}

export default LoginPage;