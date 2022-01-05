import React, { Component } from "react";
import './SearchPage.css'


class SearchPage extends Component {
    state = {
        searchValue: "",
        SoundCloud: []
    };

    handleOnChange = event => {
        this.setState({ searchValue: event.target.value });
    };

    handleSearch = () => {
        this.makeApiCall(this.state.searchValue);
    };

    makeApiCall = searchInput => {
        const searchUrl = "https://api.soundcloud.com/connect?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code";
        fetch(searchUrl)
        .then(response => {
            return response.json();
        })
        .then (jsonData => {
            console.log(jsonData.tracks);
            this.setState({SoundCloud: jsonData.SoundCloud});
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
                    {this.state.SoundCloud ? (
                    <div>
                        
                       
                        {this.state.SoundCloud.map((SoundCloud, index) => (
                        <div key={index}>
                            <h1>{SoundCloud.strSoundCloud}</h1>
                            <img src={"https://w.soundcloud.com/icon/?"} alt="SoundCloud-thumbnail" />
                    </div>
                        ))}
                    </div>
                        ): 
                        (
                            <p>Try searching for a song</p>            
                        )}
            </div>
        )}
}


// let response = await axios.post(`http://localhost:3000/api/users/login`, '');
//             console.log(response.data);
//             localStorage.setItem('token', response.data)
//             window.location ='/';

export default SearchPage;