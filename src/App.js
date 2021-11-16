import React, {useState,useEffect} from "react";
import {Navbar} from './components';
import {Visitors} from './components'
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
import { BrowserRouter as Router } from 'react-router-dom';
import LoadBalancer from './LoadBalancer'
import useStyles from './styles';
// import { commerce } from './components/lib/commerce';
import {useSelector} from 'react-redux';

const App = () => {
    const classes = useStyles();    
    // const [products, setProducts] = useState([]);
    const [isAuth, setIsAuth] = useState(false);
    const [isTourOpen, setIsTourOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const selected = useSelector(state=>state.selected)

    // const fetchProducts = async () => {
    //     const { data } = await commerce.products.list();
    //     setProducts(data);
    // }

    // useEffect(() => {
    //     fetchProducts();
    // }, []);

    useEffect(() => {
        console.log('s2',selected)
    }, [selected]);

    Visitors()

    return (
    <Router basename="/practice-app">
    <div>     
        <div className={classes.particleBg}>
            <Particles className={classes.particles}
                config={particlesConfig}/>               
        </div>
        <Navbar {...{selected,setIsTourOpen,
            anchorEl,setAnchorEl}}/>
        <LoadBalancer {...{
            // products,
            isTourOpen,
            setIsTourOpen,setAnchorEl,isAuth,setIsAuth}}/>
    </div>
    </Router>
    )
}

export default App
