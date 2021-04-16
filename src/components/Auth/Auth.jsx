import React, { useState, useRef } from 'react';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { InputAdornment, Grid, Card, CardContent, TextField, Typography, Button, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from "@material-ui/icons";


const Auth = ({handleSignIn,valueUser,valuePwd}) => {
    const classes = useStyles();
    const [values, setValues] = useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <div className={classes.content} style={{position:'relative'}}>
        <Grid container 
            justify="center" 
            direction="row"
            spacing={0}
            style={{padding: '15vh 0 0 0'}}>
            <Grid xs={12} sm={6} md={4} lg={3}>
                <Card style={{maxWidth:'100%',
                    height: '100%', 
                    textAlign: 'center',
                    padding:'5% 5% 4%'}}>
                    <CardContent><Typography variant="h5" alignItems='center'>
                    Login Form
                    </Typography></CardContent>
                    <form className={classes.form} 
                        noValidate autoComplete="off">
                        <TextField id="username" 
                            inputRef={valueUser}
                            label="Username" 
                            required variant="outlined"/>

                        <TextField id="password" 
                            inputRef={valuePwd}
                            label="Password" 
                            required variant="outlined"
                            onChange={handleChange("password")}
                            type={values.showPassword ? "text" : "password"}
                            value={values.password}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                )
                              }}
                            />

                        <div style={{display:'flex'}}>
                        <Button 
                            type="submit"
                            variant="contained" 
                            style={{marginLeft: '65%'
                                    ,marginTop: '7%'}}
                            color="primary" 
                            disableElevation
                            onClick={handleSignIn}
                            component={Link}
                            to={process.env.PUBLIC_URL+'/profile'}
                            >Login</Button></div>

                    </form>
                </Card>
            </Grid>
        </Grid>
        </div>

    )
}

export default Auth
