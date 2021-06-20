import React,{useState} from 'react'
import {Grid,TextField,Button,Switch} from '@material-ui/core';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import {Autocomplete} from '@material-ui/lab';
import {FormLabel,FormControl,
    FormControlLabel,FormHelperText,Radio,RadioGroup} from '@material-ui/core'
import {Dialog,DialogActions,DialogContent,DialogTitle} from '@material-ui/core';  
import useStyles from './styles';
import {colorOpts,defaults} from './opts.json'

const AddButton = ({geo,tabs,dispatch}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [opts,setOpts] = useState(defaults)
    const [valid,setValid] = useState(false);
    const [showWarn,setShowWarn] = useState(false)
    const keyIPs = Object.keys(geo);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (e) => {
        setOpen(false);
    };

    const handleCancel = () => {
        handleClose()
    }

    const handleConfirm = () => {
        if (valid){
            handleClose();
            setShowWarn(false)
            dispatch({type:'object',key:'tabs',
                value:{...tabs,[opts.ip]:opts}})
            setOpts(defaults)
        } else {
            setShowWarn(true)
        }
    }
    
    return (
        <>
        <Button variant="contained" color="secondary"
            className={classes.button}
            onClick={handleClickOpen}
            startIcon={<AddLocationIcon />}>Add</Button>
        <Dialog open={open} onClose={handleClose} fullWidth
            maxWidth='xs' aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title" style={{paddingBottom:'0px'}}>Options</DialogTitle>
            <DialogContent>
        <Grid container spacing={2} className={classes.grid}
            justify="center" direction="row"
            style={{height:'auto'}}>
            <Grid xs={12} sm={6} item>
                <FormLabel component="legend" style={{marginBottom:'10px'}}>Internet Protocol</FormLabel>
                <Autocomplete freeSolo 
                    value={opts.ip} inputValue={opts.ip}
                    onChange={(event, value) => {
                        setShowWarn(false)
                        if (keyIPs.indexOf(value)!==-1){setValid(true)
                        } else {setValid(false)}
                        setOpts(prev=>{return {...prev,ip:value?value:""}})}}
                    onInputChange={(event, newInputValue) => {
                        setShowWarn(false)
                        if (keyIPs.indexOf(newInputValue)!==-1){setValid(true)
                        } else {setValid(false)}
                        setOpts(prev=>{return {...prev,ip:newInputValue}})}}
                    options={keyIPs.filter((item)=>item.indexOf(opts.ip)===0)} 
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                        <>
                        <TextField {...params} 
                            style={{marginTop:'5px'}} label="IP"
                            margin="normal" variant="outlined"/>
                        {showWarn && <FormHelperText style={{color:'red'}}>
                            Please choose the valid option.</FormHelperText>}
                        </>
                    )}
                />
            </Grid>
            <Grid xs={12} sm={6} item>
            <FormControl component="fieldset" >
                <FormLabel component="legend">Color</FormLabel>
                <FormControlLabel control={<Switch 
                    checked={opts['color']}
                    onChange={(e)=>{setOpts(prev=>{return {...prev,color:!opts.color}})}}
                    name="checkEPC" color="primary"/>} label="customize"/>
                <RadioGroup aria-label="gender" name="gender1" value={opts.colorRadio} 
                    onChange={(e)=>{setOpts(prev=>{return {...prev,colorRadio:e.target.value}})}}>
                    {colorOpts.map((item)=>(
                        <FormControlLabel key={item} value={item} 
                            disabled={!opts['color']}
                            control={<Radio />}
                            label={<div style={{backgroundColor:item,borderRadius:"5px",
                                color:"transparent",width:'100px'}}>" "</div>} />
                    ))}
                </RadioGroup>
                <FormHelperText></FormHelperText>
            </FormControl>
            </Grid>
        </Grid>
        </DialogContent>

        <DialogActions>
        <Button onClick={handleCancel} color="primary">Cancel</Button>
        <Button onClick={handleConfirm} color="primary">Confirm</Button>
        </DialogActions>

        </Dialog>
        </>
    )
}

export default AddButton
