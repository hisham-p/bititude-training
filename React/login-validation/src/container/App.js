import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from '../components/homepage/homepage'

function App() {
    return (
        <div className="App container">
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        </div>
    );
}

export default App;
