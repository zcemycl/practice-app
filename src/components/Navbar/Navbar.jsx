import React from 'react';
import {AppBar,Toolbar,IconButton,MenuItem,Menu} from '@material-ui/core';
import {GitHub, LinkedIn, Bookmark, AccountCircle } from '@material-ui/icons';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {assign} from '../../actions';
import {useAuth} from '../../contexts/AuthContext';

const options = [
    {id: 0, name: 'Knowledge Graph', root: "/"},
    {id: 1, name: 'Authentication', root: "/auth"},
    {id: 2, name: 'Gallery', root: "/gallery"},
    {id: 3, name: 'Chatapp', root: "/chatapp"},
    {id: 4, name: '3D Scene', root: "/3d"},
    {id: 5, name: 'Like Comment', root: "/commentlike"},
    {id: 6, name: 'Progressive Graph', root: "/prograph"},
    {id: 7, name: '3D Map', root: "/map"},
    {id: 8, name: 'Image Annotation', root: "/annotate"},
    {id: 9, name: 'Cluster Map', root: "/clustermap"},
    {id: 10, name: 'Game', root: "/game"},
    {id: 11, name: 'Visitor Record', root: "/visitrecords"}
]

const ITEM_HEIGHT = 12*Math.max(options.length,12);

const Navbar = ({setIsTourOpen,anchorEl,setAnchorEl}) => {
    const classes = useStyles();
    const selected = useSelector(state=>state.selected)
    const dispatch = useDispatch();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const {currentUser,logout} = useAuth();
    
    const handleClose = (event) => {
        try {
            dispatch(assign(event.target.text))
        } catch (error) {}
        setAnchorEl(null);
    };

    return (
        <div>
        <AppBar className={classes.appBar}>
            <Toolbar>
            <Link data-tut="reactour__navbar_home" to="/" 
                className={classes.title} style={{textDecoration:'none'}}>
                <MenuItem style={{textDecoration:'none',
                    fontSize:'20px',fontWeight:'bold'}}>Yui's</MenuItem>
            </Link>
            <div className={classes.menuButton}
                data-tut="reactour__navbar_right">
                <IconButton aria-label="bookmark"
                    data-testid="navbar_Menu"
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
                    data-testid="navbar_Git"
                    target="_blank"
                    data-tut="reactour__navbar_git"
                    aria-label="GitHub Repository">
                    <GitHub/>
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/yui-chun-leung-48524b134"
                    data-testid="navbar_LinkedIn"
                    target="_blank"
                    data-tut="reactour__navbar_linkedin"
                    aria-label="LinkedIn Profile">
                    <LinkedIn/>
                </IconButton>      
                {currentUser &&<IconButton
                    data-tut="reactour__navbar_logout"
                    aria-label="account"
                    onClick={logout}>
                    <AccountCircle/>
                </IconButton>}
                                
            </div>
            </Toolbar>              
        </AppBar>
        </div>
    )
}

export default Navbar
