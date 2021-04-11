import React from "react";
import { ProGraph } from './components';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';

const styles = {
    root: {
        fontFamily: "sans-serif",
        textAlign: "center",
        top: 0, left: 0, right: 0, bottom: 0,
        height: "100%",
        background: "#222",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position:'absolute',
        overflow:'hidden',
    }
};

const App = () => {
    return (
        <div>     
            <div style={styles.root}>
                <Particles height="100vh" width="100vw"/>               
            </div>
            {<ProGraph/>}
        </div>
    )
}

export default App
