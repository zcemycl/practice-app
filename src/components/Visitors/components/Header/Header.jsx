import React from 'react'
import {Typography} from '@material-ui/core';
import {AddButton,IpButton} from './components'

const Header = ({opts,geo,tabs,active,dispatch}) => {
    return (
    <>
    <Typography variant="h6" style={{fontWeight:600,textAlign:'left',padding:'10px',
        backgroundColor:'#7B68EE',color:'white',fontFamily:'sans-serif'}}
        gutterBottom>Visitors Statistics
    <AddButton {...{opts,geo,tabs,dispatch}}/>
    
    {Object.values(tabs).map((item)=>
        (<IpButton key={item.ip} {...{tabs,geo,opts:item,dispatch,active}} />)
    )}
    </Typography>     
    </>
    )
}

export default Header
