// import { Title } from '@mui/icons-material';
import { fontFamily } from '@mui/system';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "./HomePage.css";

const HomePage = (props) => {
    return ( 
        <>    
            <div>                
                <ul>
                    <li>
                        <div>
                            <h1>Musicc Mixxer</h1>
                            <p>Find Collaborators</p>
                        
                            
                            <Link to='/loginPage'>
                                <button className="loginButton btn-secondary">Login</button>
                            </Link>
                    
                        
                            <Link to='/signupPage'>
                                <button className="signupButton btn-primary">Signup</button>
                            </Link>
                        
                    
                            <Link to='/searchPage'>
                                <button className="searchButton btn-success">Search</button>
                            </Link>
                            <img className="bg-image" src="./Images/knobs.jpeg" alt="" />
                        </div>
                    </li>
                    
                </ul>
            </div>     
            
        </>      
    );          
}       

export default HomePage; 