import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ClassSharp, ShoppingCart, GitHub, LinkedIn, Bookmark } from '@material-ui/icons';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed" 
                className={classes.appBar} 
                color="white">
                <Toolbar>
                    <Typography className={classes.title}>
                        Yui's Responsive
                    </Typography>
                    <div className={classes.menuButton}>
                        <IconButton>
                            <Bookmark/>
                        </IconButton>
                        <IconButton>
                            <GitHub/>
                        </IconButton>
                        <IconButton>
                            <LinkedIn/>
                        </IconButton>
                        
                        <IconButton>
                            <ShoppingCart/>
                        </IconButton>
                        
                    </div>
                </Toolbar>              
            </AppBar>
            
        </div>
    )
}

export default Navbar
