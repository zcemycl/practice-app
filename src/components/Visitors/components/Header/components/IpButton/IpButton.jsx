import React,{useState} from 'react'
import useStyles from './styles';
import {Button} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';
import {Form} from '../'

const IpButton = ({tabs,geo,opts,active,dispatch}) => {
    const {colorRadio,ip} = opts;
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const handleClickOpen = () => {setOpen(true);};

    return (
        <>
        <Button variant="outlined" value={ip}
            style={{color:'white',backgroundColor:colorRadio,
                border:active===opts.ip?'2px solid white':''}} // or border:''
            className={classes.button}
            startIcon={
                <CancelIcon className={classes.icon}
                    onClick={e=>{
                        if (active===opts.ip){
                            dispatch({type:'value',key:'active',value:""})
                        }
                        var tmpTabs = {...tabs}
                        delete tmpTabs[opts.ip]
                        dispatch({type:'object',key:'tabs',value:tmpTabs})
                    }}/>}
            endIcon={
                <>
                <EditIcon className={classes.icon2}
                    onClick={handleClickOpen}/>
                <Form {...{tabs,open,geo,opts,setOpen,dispatch,mode:"tab"}}/>
                </>
                }
        ><span style={{color:'white'}} onClick={e=>{
            console.log(e.target.innerHTML)
            if (e.target.innerHTML===active){
                dispatch({type:'value',key:'active',value:""})
            } else {
                dispatch({type:'value',key:'active',value:ip})
            }
            }}>{ip}</span></Button>
        </>
    )
}

export default IpButton
