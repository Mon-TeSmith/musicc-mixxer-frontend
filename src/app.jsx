import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';
import jwtDecode from 'jwt-decode'
import LoginPage from "./Components/LoginPage/LoginPage";
import SignupPage from "./Components/SignupPage/SignupPage";
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
// import SearchPage from "./Components/SearchPage/SearchPage";
import './App.css';



class App extends ("") {
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
        <BrowserRouter>
        
            <Route path="/" element={<HomePage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            {/* <Route path="search" element={<SearchPage />} /> */}
         
         </BrowserRouter>
      )
    }
}           
export default App;