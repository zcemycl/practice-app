import React from 'react'
import useStyles from './styles';
import {Button} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';

const IpButton = ({opts}) => {
    const {colorRadio,ip} = opts;
    const active = false;
    const classes = useStyles();
    return (
        <>
        <Button variant="outlined" value={ip}
            style={{color:'white',backgroundColor:colorRadio,
                border:active?'2px solid white':''}} // or border:''
            className={classes.button}
            startIcon={
                <CancelIcon className={classes.icon}
                    onClick={e=>{
                    }}/>}
            endIcon={
                <EditIcon className={classes.icon2}
                    onClick={e=>{
                    }}/>}
        ><span style={{color:'white'}} onClick={e=>{
            }}>{ip}</span></Button>
        </>
    )
}

export default IpButton
