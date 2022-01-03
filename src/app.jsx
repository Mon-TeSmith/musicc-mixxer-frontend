import React, {Component} from "react";
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom';
import jwtDecode from 'jwt-decode'
// import LoginPage from "./Components/LoginPage/LoginPage";
// import SignupPage from "./Components/SignupPage/SignupPage";
// import Navbar from "./Components/Navbar/Navbar";
// import Profile from "./Components/Profile/Profile";
// import HomePage from "./Components/HomePage/HomePage";
// import SearchPage from "./Components/SearchPage/SearchPage";
import './App.css';

function  () {    
  return (
    <BrowserRouter>
      <Navbar />
        <div className="container mt-2" style={{ marginTop: 40 }}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/profile/:name">
              <Profile />
            </Route>
          </Switch>
        </div>
    </BrowserRouter>
    );
}

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