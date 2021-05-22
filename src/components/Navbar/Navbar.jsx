import React from 'react';
import { AppBar, Toolbar, IconButton, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart, GitHub, LinkedIn, Bookmark } from '@material-ui/icons';
import useStyles from './styles';
import { Link } from 'react-router-dom';

const options = [
    {id: 0, name: 'Knowledge Graph', root: "/"},
    {id: 1, name: 'Authentication', root: "/auth"},
    {id: 2, name: 'Image Display', root: "/imgdisplay"},
    {id: 3, name: 'Chatapp', root: "/chatapp"},
    {id: 4, name: '3D Scene', root: "/3d"},
    {id: 5, name: 'Like Comment', root: "/commentlike"},
    {id: 6, name: '3D Map', root: "/map"},
    {id: 7, name: 'Image Annotation', root: "/annotate"},
    {id: 8, name: 'Progressive Graph', root: "/prograph"},
    {id: 9, name: 'Cluster Map', root: "/clustermap"},
]

const ITEM_HEIGHT = 12*Math.max(options.length,12);

const Navbar = ({selected,setSelected,setIsTourOpen,anchorEl,setAnchorEl}) => {
    const classes = useStyles();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = (event) => {
        setSelected(event.target.text);
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" 
                        className={classes.title}
                        data-tut="reactour__navbar_home"
                        component={Link} 
                        to="/"
                        onClick={()=>(
                            setSelected('Knowledge Graph')
                            )}
                        >
                        Yui's 
                    </Typography>
                    <div className={classes.menuButton}
                        data-tut="reactour__navbar_right">
                        <IconButton aria-label="bookmark"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            className="hihi"
                            data-tut="reactour__navbar_content">
                            <Bookmark/>
                        </IconButton>
                        <Menu
                            id="long-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            data-tut="reactour__navbar_content2"
                            open={anchorEl!==null}
                            onClose={handleClose}
                            PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                            },}}>
                            {options.map((option) => (
                            <MenuItem key={option.name} 
                                selected={option.name === selected} 
                                className={`menuItem${option.id}`}
                                onClick={handleClose} 
                                component={Link} 
                                eventkey={option.id}
                                to={option.root}>
                                {option.name}
                            </MenuItem>
                            ))}
                        </Menu>
                        <IconButton href="https://github.com/zcemycl" 
                            target="_blank"
                            data-tut="reactour__navbar_git"
                            aria-label="GitHub Repository">
                            <GitHub/>
                        </IconButton>
                        <IconButton href="https://www.linkedin.com/in/yui-chun-leung-48524b134"
                            target="_blank"
                            data-tut="reactour__navbar_linkedin"
                            aria-label="LinkedIn Profile">
                            <LinkedIn/>
                        </IconButton>             
                        <IconButton component={Link} 
                            data-tut="reactour__navbar_shop"
                            to='/shop' >
                            <ShoppingCart/>
                        </IconButton>
                        
                    </div>
                </Toolbar>              
            </AppBar>
            
        </div>
    )
}

export default Navbar
