import React,{useState} from 'react'
import {Grid,TextField,Button,Switch} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import {FormLabel,FormControl,
    FormControlLabel,FormHelperText,Radio,RadioGroup} from '@material-ui/core'
import {Dialog,DialogActions,DialogContent,DialogTitle} from '@material-ui/core'; 
import {colorOpts,defaults} from './opts.json' 
import useStyles from './styles';

const Form = ({tabs,open,geo,opts,setOpen,dispatch,mode}) => { // mode: tab or add
    const classes = useStyles();
    const [Opts,setOpts] = useState(opts);
    const keyIPs = Object.keys(geo);
    const [valid,setValid] = useState(keyIPs.indexOf(opts.ip)!==-1);
    const [showWarn,setShowWarn] = useState(false)

    const handleClose = () => {setOpen(false)};

    const handleCancel = () => {handleClose()}

    const handleConfirm = () => {
        if (valid){
            handleClose();
            setShowWarn(false)
            if (mode==="add"){
                console.log(opts)
                dispatch({type:'object',key:'tabs',
                    value:{...tabs,[opts.ip]:opts}})
                dispatch({type:'object',key:'opts',value:defaults})
            } else if (mode==="tab"){
                console.log(Opts)
                var tmpTabs = {...tabs};
                delete tmpTabs[opts.ip]
                tmpTabs[Opts.ip] = Opts
                dispatch({type:'object',key:'tabs',
                    value:tmpTabs})
            }
        } else {setShowWarn(true)}
        setValid(false);
    }
    
    return (
        <>
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
                    value={mode==="add"?opts.ip:Opts.ip} 
                    inputValue={mode==="add"?opts.ip:Opts.ip}
                    onChange={(event, value) => {
                        setShowWarn(false)
                        if (keyIPs.indexOf(value)!==-1){setValid(true)
                        } else {setValid(false)}
                        if (mode==="add"){
                            dispatch({type:'object',key:'opts',value:{...opts,ip:value?value:""}})
                        } else if (mode==="tab"){
                            setOpts({...Opts,ip:value?value:""})
                        }
                    }}
                    onInputChange={(event, newInputValue) => {
                        setShowWarn(false)
                        if (keyIPs.indexOf(newInputValue)!==-1){setValid(true)
                        } else {setValid(false)}
                        if (mode==="add"){
                            dispatch({type:'object',key:'opts',value:{...opts,ip:newInputValue}})
                        } else if (mode==="tab"){
                            setOpts({...Opts,ip:newInputValue})
                        }
                    }}
                    options={keyIPs.filter((item)=>item.indexOf(mode==="add"?opts.ip:Opts.ip)===0)} 
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
                    checked={mode==="add"?opts.color:Opts.color}
                    onChange={(e)=>{
                        if (mode==="add"){
                            dispatch({type:'object',key:'opts',value:{...opts,color:!opts.color}})
                        } else if (mode==="tab"){
                            setOpts({...Opts,color:!Opts.color})
                        }
                    }}
                    name="checkEPC" color="primary"/>} label="customize"/>
                <RadioGroup aria-label="gender" name="gender1" 
                    value={mode==="add"?opts.colorRadio:Opts.colorRadio} 
                    onChange={(e)=>{
                        if (mode==="add"){
                            dispatch({type:'object',key:'opts',value:{...opts,colorRadio:e.target.value}})
                        } else if (mode==="tab"){
                            setOpts({...Opts,colorRadio:e.target.value})
                        }
                        }}>
                    {colorOpts.map((item)=>(
                        <FormControlLabel key={item} value={item}
                            disabled={mode==="add"?!opts.color:!Opts.color}
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

export default Form
