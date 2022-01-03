import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "../src/App"


ReactDOM.render(
    <Router>
        <StyledEngineProvider injectFirst>
        <App />
        </StyledEngineProvider>
        document.querySelector("#root")
    </Router>
);
