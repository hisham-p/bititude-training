import {BrowserRouter} from 'react-router-dom'
import React from 'react';
import Home from './container/Home/home'
import './App.css';

function App() {
    return (
        <BrowserRouter>
        <div className="App">
                <Home/>
            </div>
        </BrowserRouter>
    );
}

export default App;
