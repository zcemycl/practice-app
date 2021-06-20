import React from 'react'
import {Typography} from '@material-ui/core';
// import useStyles from './styles';
import {AddButton,IpButton} from './components'

const Header = ({geo,tabs,dispatch}) => {
    // const classes = useStyles();
    return (
    <>
    <Typography variant="h6" style={{fontWeight:600,textAlign:'left',padding:'10px',
        backgroundColor:'#7B68EE',color:'white',fontFamily:'sans-serif'}}
        gutterBottom>Visitors Statistics
    <AddButton {...{geo,tabs,dispatch}}/>
    
    {Object.values(tabs).map((opts)=>
        (<IpButton key={opts.ip} {...{opts}}/>)
    )}
    </Typography>     
    </>
    )
}

export default Header
