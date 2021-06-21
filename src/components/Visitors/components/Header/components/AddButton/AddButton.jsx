import React,{useState} from 'react'
import {Button} from '@material-ui/core';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import useStyles from './styles';
import {Form} from '../'

const AddButton = ({opts,geo,tabs,dispatch}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <>
        <Button variant="contained" color="secondary"
            className={classes.button}
            onClick={handleClickOpen}
            startIcon={<AddLocationIcon />}>Add</Button>
        <Form {...{tabs,open,geo,opts,setOpen,dispatch,mode:"add"}}/>
        </>
    )
}

export default AddButton
