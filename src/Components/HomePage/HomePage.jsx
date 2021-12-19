import { fontFamily } from '@mui/system';
import React from 'react';
import {Link} from 'react-router-dom';
import "./HomePage.css";


const HomePage = (props) => {
    return ( 
    <>    
        
            <h1 className="headerName">"Welcome to Musicc Mixxer"</h1>
            <p className="phrase">Find your next collaborator</p>
            
        <div>
            <Link to='/findCreatives'>
                <button className="searchButton">Search for Free</button>
            </Link>
            <Link to='/profilePage'>
                <button className="loginButton">Login</button>
            </Link>
            <Link to='/register'>
                <button className="signupButton">Signup</button>
            </Link>
            <div className="bg.image"></div>
            <img src="./Images/console.jpeg" />
        
        </div>     
          
    </>      
    );          
}       


  

 

export default HomePage; 