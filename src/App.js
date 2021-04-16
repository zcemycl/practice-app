import React, {useState} from "react";
import { ProGraph, Navbar, Random, Auth, Chatapp } from './components';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useStyles from './styles';
import Profile from './components/Auth/pages/Profile';
import ProtectedRoute from './components/Auth/ProtectedRoute';

const App = () => {
    const classes = useStyles();
    const [isAuth, setIsAuth] = useState(false);
    
    return (
        <Router>
        <div>     
            <div className={classes.particleBg}>
                <Particles 
                    className={classes.particles}
                    config={particlesConfig}/>               
            </div>
            <Navbar/>
            <Switch>
                <Route exact path={process.env.PUBLIC_URL+"/"}>
                    <ProGraph/>
                </Route>
                <Route exact path={process.env.PUBLIC_URL+"/auth"}>
                    <Auth isAuth={isAuth}
                        setIsAuth={setIsAuth}/>
                </Route>
                <Route exact path={process.env.PUBLIC_URL+"/imgdisplay"}>
                    <Random/>
                </Route>
                <Route exact path={process.env.PUBLIC_URL+"/chatapp"}>
                    <Chatapp/>
                </Route>
            </Switch>
            <ProtectedRoute
            path={process.env.PUBLIC_URL+"/profile"}
            component={Profile}
            isAuth={isAuth}/>
        </div>
            
        </Router>
    )
}

export default App
