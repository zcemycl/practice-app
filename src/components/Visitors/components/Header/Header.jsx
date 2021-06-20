import React from 'react'
import {Typography} from '@material-ui/core';

const Header = () => {
    return (
        <>
        <Typography variant="h6" style={{fontWeight:600,textAlign:'left',padding:'10px',
            backgroundColor:'#7B68EE',color:'white',fontFamily:'sans-serif'}}
            gutterBottom>Visitors Statistics</Typography>     
        </>
    )
}

export default Header
