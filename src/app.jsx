import React, { Component } from "react";
import {Route, Routes} from 'react-router-dom';
import jwtDecode from 'jwt-decode'
import LoginPage from "./Components/LoginPage/LoginPage";
import SignupPage from "./Components/SignupPage/SignupPage";
import Profile from "./Components/Profile/Profile";
import HomePage from "./Components/HomePage/HomePage";
import SearchPage from "./Components/SearchPage/SearchPage";
// eslint-disable-next-line no-unused-vars
import './App.css';
import Navbar from "./Components/Navbar/Navbar";



class App extends Component {
    constructor(props){
        super(props);
        const jwt=localStorage.getItem('token');
        try{
            const login = jwtDecode(jwt);
            this.state = {
                user: login,
            }
        } catch {
            this.state = {
                user:null,
            }
        }
    }

    componentDidMount(){
        // JWT maybe set other than null
        const jwt=localStorage.getItem('token');
      try {
        const login= jwtDecode(jwt);
        this.setState({user: login});
      } catch {

      };   
    }

    render() {
      return (
        <div>
        <Navbar/>
          <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="login" element={<LoginPage/>} />
              <Route path="signup" element={<SignupPage />} />
              <Route path="search" element={<SearchPage />} />
          </Routes>
        </div>
      );
    };
}    

export default App;