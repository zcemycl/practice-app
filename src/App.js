import React, {useState,useRef} from "react";
import { ProGraph, Navbar, Random, Auth } from './components';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useStyles from './styles';
import Profile from './components/Auth/pages/Profile';
import ProtectedRoute from './components/Auth/ProtectedRoute';

const App = () => {
    const classes = useStyles();
    const [isAuth, setIsAuth] = useState(false);
    const valueUser = useRef('');
    const valuePwd = useRef('');
    const handleSignIn = () => {
        const isUser=valueUser.current.value === process.env.REACT_APP_SECRET_CODE;
        const isPwd=valuePwd.current.value === process.env.REACT_APP_SECRET_CODE;
        if ( isUser && isPwd)
        {
            setIsAuth(true);
        } 
        console.log(valueUser.current.value);
        
    }
    return (
        <Router>
        <div>     
            <div className={classes.particleBg}>
                <Particles 
                    height="100vh"
                    width="100vw" config={particlesConfig}/>               
            </div>
            <Navbar/>
            <Switch>
                <Route exact path={process.env.PUBLIC_URL+"/"}>
                    <ProGraph/>
                </Route>
                <Route exact path={process.env.PUBLIC_URL+"/auth"}>
                    <Auth handleSignIn={handleSignIn} 
                        valueUser={valueUser}
                        valuePwd={valuePwd}/>
                </Route>
                <Route exact path={process.env.PUBLIC_URL+"/random"}>
                    <Random/>
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
