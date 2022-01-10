import React, { Component } from "react";
import './SearchPage.css'


class SearchPage extends Component {
    state = {
        searchValue: "",
        Music: []
    };

    handleOnChange = event => {
        this.setState({ searchValue: event.target.value });
    };

    handleSearch = () => {
        this.makeApiCall(this.state.searchValue);
    };

    makeApiCall = _searchInput => {
        const searchUrl = 
        // fetch(searchUrl)
        .then(response => {
            return response.json();
        })
        .then (jsonData => {
            console.log(jsonData.tracks);
            this.setState({Music: jsonData.Music});
        });
        
    };

    render() {
            
        return (
            <div>
                <h1>Find Songs:</h1>
                    <input 
                        name="text"
                        type="text"
                        placeholder="Start Here:"
                        onChange={event => this.handleOnChange(event)}
                        value={this.state.searchValue}
                    /> 
                    <button onClick={this.handleSearch}>Submit:</button>
                    {this.state.music ? (
                    <div>
                        
                       
                        {this.state.music.map((music, index) => (
                        <div key={index}>
                            <h1>{music.strMusic}</h1>
                           
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