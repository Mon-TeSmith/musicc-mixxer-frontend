import React, {Component} from "react";

import {Switch, Route, Redirect} from 'react-router-dom';
import Searchbar from "./components/Searchbar/Searchbar"
import LoginForm from "./components/LoginForm/LoginForm"
import Signup from "./components/Signup/Signup"
import Home from './components/Home/Home'
import jwtDecode from 'jwt-decode'
import Logout from './components/logout/logout'


class App extends Component {
    constructor(props){
        super(props);
        const jwt=localStorage.getItem('token');
        try{
            const decodedUsers= jwtDecode(jwt);
            this.state = {
                user:decodedUser,
            }
        }catch{
            this.state = {
                user:null,
            }
        }
    }

    componentDidMount(){
        // JWT maybe set other than null
        const jwt=localStorage.getItem('token');
        try{
            const decodedUser= jwtDecode(jwt);
            this.setState({user: decodedUser});
        }cach{

        }
    }
    render(){
        return (
            <div className="App">
                <Searchbar/>
                <Logout />
                <Switch>
                    <Route path="/" exact render={(props) =>{
                        if(!this.state.user){
                            return <Redirect to='/login' />
                        }else {
                            return <Home {...props} />
                        }
                    }}/>
                </Switch>
            </div>
        )
    }
}

export default App;