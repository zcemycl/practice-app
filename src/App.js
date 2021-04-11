import React from "react";
import { ProGraph, Navbar } from './components';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    return (
        <div>     
            <div className={classes.particleBg}>
                <Particles height="100vh" width="100vw" config={particlesConfig}/>               
            </div>
            <Navbar/>
            <ProGraph/>
        </div>
    )
}

export default App
