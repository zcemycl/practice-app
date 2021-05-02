import React, {useState,useEffect} from "react";
import { ProGraph, Navbar, Random, Auth, Chatapp, Products } from './components';
import { ThreeFiber, CommentLike } from './components';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
import { BrowserRouter as Router,Switch,Route,HashRouter,Redirect } from 'react-router-dom';
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
        // <HashRouter>
        <Router basename="/practice-app">
        <div>     
            <div className={classes.particleBg}>
                <Particles 
                    className={classes.particles}
                    config={particlesConfig}/>               
            </div>
            <Navbar/>
            <Switch>
                <Route exact path="/"
                    component={ProGraph}/>
                {/* <Redirect from="/" to="/practice-app" exact/> */}
                <Route path="/auth">
                    <Auth isAuth={isAuth} setIsAuth={setIsAuth}/>
                </Route>
                <Route path="/imgdisplay"
                    component={Random}/>
                <Route path="/chatapp"
                    component={Chatapp}/>
                <Route path="/3d"
                    component={ThreeFiber}/>
                <Route path="/shop">
                    <Products products={products}/>
                </Route>
                <Route path="/commentlike"
                    component={CommentLike}/>

            </Switch>
            <ProtectedRoute
            path="/profile"
            component={Profile}
            isAuth={isAuth}/>
        </div>
            
        </Router>
        //</HashRouter>
    )
}

export default App
