import React, {useState} from 'react';
import { AppBar, Toolbar, IconButton, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart, GitHub, LinkedIn, Bookmark } from '@material-ui/icons';
import useStyles from './styles';
import { Link } from 'react-router-dom';

const options = [
    {id: 0, name: 'Progressive Graph', root: '/'},
    {id: 1, name: 'Random', root: '/random'},
]

const ITEM_HEIGHT = 48;

const Navbar = () => {
    const classes = useStyles();
    const [selected, setSelected] = useState('Progressive Graph');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = (event) => {
        setSelected(event.target.text);
        setAnchorEl(null);
    };

    // const location = useLocation();
    return (
        <div>
            <AppBar position="fixed" 
                className={classes.appBar} 
                color="white">
                <Toolbar>
                    <Typography variant="h6" 
                        className={classes.title}
                        component={Link} 
                        to={process.env.PUBLIC_URL+"/"}
                        onClick={()=>(
                            setSelected('Progressive Graph')
                            )}
                        >
                        Yui's Responsive
                    </Typography>
                    <div className={classes.menuButton}>
                        <IconButton aria-label="bookmark"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={handleClick}>
                            <Bookmark/>
                        </IconButton>
                        <Menu
                            id="long-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                            },}}>
                            {options.map((option) => (
                            <MenuItem key={option.name} 
                                selected={option.name === selected} 
                                onClick={handleClose} 
                                component={Link} 
                                eventKey={option.id}
                                to={process.env.PUBLIC_URL+option.root}>
                                {option.name}
                            </MenuItem>
                            ))}
                        </Menu>
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
