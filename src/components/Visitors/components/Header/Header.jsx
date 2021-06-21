import React,{useEffect} from 'react'
import {Typography} from '@material-ui/core';
import {AddButton,IpButton} from './components'

const Header = ({data,map,opts,geo,tabs,active,displayData,dispatch}) => {
    useEffect(()=>{
        if (map) {
            if (active === "") {
                map.flyTo([51.5074, 0.1278],1)
            }
            if (active !== "" && geo[active]){
                const {Lat,Lng} = geo[active]
                map.flyTo([Lat,Lng],12)
            } 
        }
    },[active,map,opts,geo])

    return (
    <>
    <Typography variant="h6" style={{fontWeight:600,textAlign:'left',padding:'10px',
        backgroundColor:'#7B68EE',color:'white',fontFamily:'sans-serif'}}
        gutterBottom>Visitor Statistics
    <AddButton {...{data,opts,geo,tabs,displayData,dispatch}}/>
    
    {Object.values(tabs).map((item)=>
        (<IpButton key={item.ip} {...{data,tabs,geo,opts:item,displayData,dispatch,active}} />)
    )}
    </Typography>     
    </>
    )
}

export default Header
