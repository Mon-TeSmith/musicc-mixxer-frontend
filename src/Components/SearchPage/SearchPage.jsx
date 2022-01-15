import React, { Component } from "react";
import './SearchPage.css'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function msToHMS(ms) {
    // 1- Convert to seconds:
    let seconds = ms / 1000;


    // 3- Extract minutes:
    const minutes = parseInt(seconds / 60); // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = seconds % 60;
    const remaining = Math.floor(seconds % 60);
    let secondsFormatted = remaining > 9 ? remaining : `0${remaining}`;
    return minutes + ":" + secondsFormatted;
}


class SearchPage extends Component {
    state = {
        searchValue: "",
        tracks: []
    };

    handleOnChange = event => {
        this.setState({ searchValue: event.target.value });
    };

    handleSearch = () => {
        this.makeApiCall(this.state.searchValue);
    };

    makeApiCall = async _searchInput => {
        const res = await axios.get(`http://localhost:5000/api/music/track/${_searchInput}`)
        console.log('backend res', res);

        this.setState({ tracks: res.data.tracks.items });


    };

    showTrackInformation = () => {
        return this.state.tracks.map((track) => {
            // Name, Artist, Duration 
            const duration = msToHMS(track.duration_ms);
            const artist = track.artists[0].name;
            const img = track?.album?.images[1].url;
            const preview = track.preview_url
            const spotifyLink = track.external_urls.spotify
            return (
                <Card sx={{ width: 325 }} key={track.id}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}

                    />
                    <CardContent sx={{ minHeight: 180 }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {track.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="p">
                            {artist}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="p">
                            Duration: {duration}
                        </Typography>

                    </CardContent>
                    <CardActions>
                        {spotifyLink && <Button size="small"><a href={spotifyLink} target="_blank">Open In Spotify</a></Button>}
                        {preview && <Button size="small"><a href={preview} target="_blank">Preview</a></Button>}
                    </CardActions>
                </Card>


            )
        });
    }


    render() {
        console.log('tracks', this.state.tracks)
        return (
            <div>
                <h1>Enter Track Title:</h1>
                <div className="form">
                    <input
                        name="text"
                        type="text"
                        placeholder="Search for a song"
                        onChange={event => this.handleOnChange(event)}
                        value={this.state.searchValue}
                    />

                    <Button variant="contained" size="large" onClick={this.handleSearch}>Submit</Button>
                </div>

                <div className="cards">
                    {this.state.tracks.length > 0 && (


                        this.showTrackInformation()
                    )
                    }
                </div>
            </div>
        )
    };
}

export default SearchPage;