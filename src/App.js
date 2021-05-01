import React, {useState,useEffect} from "react";
import { ProGraph, Navbar, Random, Auth, Chatapp, Products } from './components';
import { ThreeFiber, CommentLike } from './components';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useStyles from './styles';
import Profile from './components/Auth/pages/Profile';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { commerce } from './components/lib/commerce';

const App = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    const [isAuth, setIsAuth] = useState(false);
    
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

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
                <Route exact path={process.env.PUBLIC_URL+"/3d"}>
                    <ThreeFiber/>
                </Route>
                <Route exact path={process.env.PUBLIC_URL+"/shop"}>
                    <Products products={products}/>
                </Route>
                <Route exact path={process.env.PUBLIC_URL+"/commentlike"}>
                    <CommentLike/>
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
