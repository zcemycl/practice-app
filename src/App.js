import React, {useState,useEffect} from "react";
import { ProGraph, Navbar, Random, Auth, Chatapp, Products } from './components';
import { ThreeFiber, CommentLike } from './components';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
import { Switch,Route,HashRouter,Redirect } from 'react-router-dom';
import useStyles from './styles';
import Profile from './components/Auth/pages/Profile';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { commerce } from './components/lib/commerce';

const App = ({browserHistory}) => {
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
        <HashRouter>
        {/* <Router history={browserHistory}> */}
        <div>     
            <div className={classes.particleBg}>
                <Particles 
                    className={classes.particles}
                    config={particlesConfig}/>               
            </div>
            <Navbar/>
            <Switch>
                <Route exact path={process.env.PUBLIC_URL+"/"}
                    component={ProGraph}/>
                <Redirect from="/" to="/practice-app" exact/>
                <Route path={process.env.PUBLIC_URL+"/auth"}>
                    <Auth isAuth={isAuth} setIsAuth={setIsAuth}/>
                </Route>
                <Route path={process.env.PUBLIC_URL+"/imgdisplay"}
                    component={Random}/>
                <Route path={process.env.PUBLIC_URL+"/chatapp"}
                    component={Chatapp}/>
                <Route path={process.env.PUBLIC_URL+"/3d"}
                    component={ThreeFiber}/>
                <Route path={process.env.PUBLIC_URL+"/shop"}>
                    <Products products={products}/>
                </Route>
                <Route path={process.env.PUBLIC_URL+"/commentlike"}
                    component={CommentLike}/>

            </Switch>
            <ProtectedRoute
            path={process.env.PUBLIC_URL+"/profile"}
            component={Profile}
            isAuth={isAuth}/>
        </div>
            
        {/* </Router> */}
        </HashRouter>
    )
}

export default App
