import React, {useState,useEffect} from "react";
import { Navbar,Visitors } from './components';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
import { BrowserRouter as Router } from 'react-router-dom';
import LoadBalancer from './LoadBalancer'
import useStyles from './styles';
import { commerce } from './components/lib/commerce';

const App = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    const [isAuth, setIsAuth] = useState(false);
    const [selected, setSelected] = useState('');
    const [isTourOpen, setIsTourOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    // Visitors({selected})

    return (
        <Router basename="/practice-app">
        <div>     
            <div className={classes.particleBg}>
                <Particles className={classes.particles}
                    config={particlesConfig}/>               
            </div>
            <Navbar {...{selected,setSelected,setIsTourOpen,
                anchorEl,setAnchorEl}}/>
            
                <LoadBalancer {...{products,setSelected,isTourOpen,
                    setIsTourOpen,setAnchorEl,isAuth,setIsAuth}}/>
                
        </div>
        </Router>
    )
}

export default App
