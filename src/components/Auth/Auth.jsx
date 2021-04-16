import React from 'react';
import useStyles from './styles';
import ProtectedRoute from './ProtectedRoute';
import { useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Grid, Card, CardContent, TextField, Typography, Button } from '@material-ui/core';
import Profile from './pages/Profile';

const Auth = ({handleSignIn,valueUser,valuePwd}) => {
    const classes = useStyles();

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
                            required variant="outlined"/>
                        
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
                            >
                        Login
                        </Button></div>

                    </form>
                </Card>
            </Grid>
        </Grid>
        </div>

    )
}

export default Auth
