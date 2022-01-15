import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';
import jwtDecode from 'jwt-decode'
import LoginPage from "./Components/LoginPage/LoginPage";
import SignupPage from "./Components/SignupPage/SignupPage";
import Profile from "./Components/Profile/Profile";
import HomePage from "./Components/HomePage/HomePage";
import SearchPage from "./Components/SearchPage/SearchPage";
import TitleBar from "./Components/TitleBar/TitleBar";
// eslint-disable-next-line no-unused-vars
import './App.css';
import Navbar from "./Components/Navbar/Navbar";





class App extends Component {
  constructor(props) {
    super(props);
    const jwt = localStorage.getItem('token');
    try {
      const login = jwtDecode(jwt);
      this.state = {
        user: login,
      }
    } catch {
      this.state = {
        user: null,
      }
    }
  }

  componentDidMount() {
    // JWT maybe set other than null
    const jwt = localStorage.getItem('token');
    try {
      const login = jwtDecode(jwt);
      this.setState({ user: login });
    } catch {

    };
  }

  render() {
    console.log('user', this.state.user)
    return (
      <div>
        <Navbar user={this.state.user} />
        <Routes>
          <Route path="/" exact element={<HomePage user={this.state.user} />} />
          <Route path="login" element={<LoginPage user={this.state.user} />} />
          <Route path="signup" element={<SignupPage user={this.state.user} />} />

          <Route path="profile" element={<Profile user={this.state.user} />} />
        </Routes>
      </div>
    );
  };
}

export default App;