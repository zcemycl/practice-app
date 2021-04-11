import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ClassSharp, ShoppingCart, GitHub, LinkedIn, Bookmark } from '@material-ui/icons';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const classes = useStyles();
    // const location = useLocation();
    return (
        <div>
            <AppBar position="fixed" 
                className={classes.appBar} 
                color="white">
                <Toolbar>
                    <Typography variant="h6" 
                        className={classes.title}
                        // component={Link} 
                        // to="/"
                        >
                        Yui's Responsive
                    </Typography>
                    <div className={classes.menuButton}>
                        <IconButton disabled>
                            <Bookmark/>
                        </IconButton>
                        <IconButton href="https://github.com/zcemycl" 
                            target="_blank"
                            aria-label="GitHub Repository">
                            <GitHub/>
                        </IconButton>
                        <IconButton href="https://www.linkedin.com/in/yui-chun-leung-48524b134"
                            target="_blank"
                            aria-label="LinkedIn Profile">
                            <LinkedIn/>
                        </IconButton>             
                        <IconButton disabled>
                            <ShoppingCart/>
                        </IconButton>
                        
                    </div>
                </Toolbar>              
            </AppBar>
            
        </div>
    )
}

export default Navbar
