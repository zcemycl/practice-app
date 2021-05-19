import React, {useState,useEffect} from "react";
import { ProGraph,Navbar,Random,Auth,Chatapp } from './components';
import { Products,ThreeFiber,CommentLike,NotFound } from './components';
import { Map,Annotate,Knowledge,Leaflet } from './components';
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
    const [selected, setSelected] = useState('Knowledge Graph');

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
                <Particles className={classes.particles}
                    config={particlesConfig}/>               
            </div>
            <Navbar selected={selected} setSelected={setSelected}/>
            <Switch>
                <Route exact path="/" render={(props) => (
                    <Knowledge {...props} setSelected={setSelected}/>)}/>
                <Route exact path="/prograph" render={(props) => (
                    <ProGraph {...props} setSelected={setSelected}/>)}/>
                <Route exact path="/auth">
                    <Auth isAuth={isAuth} setIsAuth={setIsAuth}
                        setSelected={setSelected}/>
                </Route>
                <Route exact path="/imgdisplay" render={(props) => (
                    <Random {...props} setSelected={setSelected}/>)}/>
                <Route exact path="/chatapp" render={(props) => (
                    <Chatapp {...props} setSelected={setSelected}/>)}/>
                <Route exact path="/3d" render={(props) => (
                    <ThreeFiber {...props} setSelected={setSelected}/>)}/>
                <Route exact path="/shop">
                    <Products products={products} setSelected={setSelected}/>
                </Route>
                <Route exact path="/map" render={(props) => (
                    <Map {...props} setSelected={setSelected}/>)}/>
                <Route exact path="/commentlike" render={(props) => (
                    <CommentLike {...props} setSelected={setSelected}/>)}/>
                <Route exact path="/annotate" render={(props) => (
                    <Annotate {...props} setSelected={setSelected}/>)}/>
                <Route exact path="/clustermap" render={(props) => (
                    <Leaflet {...props} setSelected={setSelected}/>)}/>
                <ProtectedRoute path="/profile" component={Profile}
                    isAuth={isAuth}/>
                <Route render={(props) => (
                    <NotFound {...props} setSelected={setSelected}/> )}/>
            </Switch>
            
        </div>
        </Router>
    )
}

export default App
