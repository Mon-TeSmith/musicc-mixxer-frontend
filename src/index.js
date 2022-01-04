import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App.jsx"



ReactDOM.render(
    <BrowserRouter>
        <StyledEngineProvider injectFirst>
        <App />
        </StyledEngineProvider>
        
        
    </BrowserRouter>, document.getElementById("root")
);
