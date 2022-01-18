import React from 'react';
import "./HomePage.css";
import SearchPage from '../SearchPage/SearchPage';


const HomePage = ({ user }) => {
    return (
        <>
            {user ? (
                <SearchPage />
            ) :
                (
                    <h1>Please Login to Continue.</h1>
                )
            },
            {/* {Profile ? (
                <Profile />
            ) :
                (
                    <h2>Search for Creatives</h2>
                )
            } */}
        </>
    );

}

export default HomePage;