import React, {useState,useEffect} from "react";
import { ProGraph,Navbar,Random,Auth,Chatapp } from './components';
import { Products,ThreeFiber,CommentLike,NotFound } from './components';
import { Map,Annotate,Knowledge } from './components';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
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
        <Router basename="/practice-app">
        <div>     
            <div className={classes.particleBg}>
                <Particles 
                    className={classes.particles}
                    config={particlesConfig}/>               
            </div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Knowledge}/>
                <Route exact path="/prograph" component={ProGraph}/>
                <Route exact path="/auth">
                    <Auth isAuth={isAuth} setIsAuth={setIsAuth}/>
                </Route>
                <Route exact path="/imgdisplay" component={Random}/>
                <Route exact path="/chatapp" component={Chatapp}/>
                <Route exact path="/3d" component={ThreeFiber}/>
                <Route exact path="/shop">
                    <Products products={products}/>
                </Route>
                <Route exact path="/map" component={Map}/>
                <Route exact path="/commentlike" component={CommentLike}/>
                <Route exact path="/annotate" component={Annotate}/>
                <ProtectedRoute path="/profile" component={Profile}
                    isAuth={isAuth}/>
                <Route component={NotFound}/>
            </Switch>
            
        </div>
        </Router>
    )
}

export default App
