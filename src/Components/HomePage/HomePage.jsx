import React from 'react';
import {Link} from 'react-router-dom';
import "./HomePage.css";


const HomePage = (props) => {
    return ( 
        <div>
            <Link to='/Welcome'>
                <button className="btn btn-success">Search for Free</button>
            </Link>
            <Link to='/login'>
                <button className="btn btn-primary">Login</button>
            </Link>
            <Link to='/register'>
                <button className="btn btn-info">Signup</button>
            </Link>
        </div>
     );
}
 

export default HomePage;