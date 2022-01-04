import React, { Component } from "react";
import './SearchPage.css'


class SearchPage extends Component {
    state = {
        searchValue: "",
        music: []
    };

    handleOnChange = event => {
        this.setState({ searchValue: event.target.value });
    };

    handleSearch = () => {
        this.makeApiCall(this.state.searchValue);
    };

    makeApiCall = searchInput => {
        var searchUrl = "https://api.soundcloud.com/connect?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code";
        fetch(searchUrl)
        .then(response => {
            return response.json();
        })
        .then (jsonData => {
            console.log(jsonData.soundCloud);
        });
    };

    render() {
        
        return (
            <div>
                <h1>Find Collaborators:</h1>
                    <input 
                        name="text"
                        type="text"
                        placeholder="Start Here:"
                        onChange={event => this.handleOnChange(event)}
                        value={this.state.searchValue}
                    /> 
                    <button onClick={this.handleSearch}>Submit:</button>
            </div>
        ) 
    };
}

// let response = await axios.post(`http://localhost:3000/api/users/login`, '');
//             console.log(response.data);
//             localStorage.setItem('token', response.data)
//             window.location ='/';

export default SearchPage;