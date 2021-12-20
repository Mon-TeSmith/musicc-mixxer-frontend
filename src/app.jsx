import React, {Component} from "react";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignupPage from "./Components/SignupPage/SignupPage";
// import SearchPage from "./Components/SearchPage/SearchPage";
import HomePage from "./Components/HomePage/HomePage";
import {Switch, Route, Redirect} from 'react-router-dom';
import jwtDecode from 'jwt-decode'


class App extends Component {
    constructor(props){
        super(props);
        const jwt=localStorage.getItem('token');
        try{
            const decodedUser = jwtDecode(jwt);
            this.state = {
                user: decodedUser,
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
        }catch{

        };
    
}

    render(){
        return (
            <div className="App">

                <Switch>
                    <Route path="/" exact render={(props) =>{
                        if(this.state.user){
                            return <h1>Profile</h1>
                        }else {
                            return <HomePage {...props} />
                        }
                    }}/>
                    <Route path='/loginPage' component={LoginPage} />
                    <Route path='/signupPage' component={SignupPage} />
                    {/* <Route path='/findPage' component={SearchPage} /> */}
                </Switch>
            </div>
        )
    }
}

export default App;