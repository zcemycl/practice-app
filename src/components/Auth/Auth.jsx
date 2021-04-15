import React from 'react';
import useStyles from './styles';
import ProtectedRoute from './ProtectedRoute';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid, Card, CardContent, TextField, Typography, Button } from '@material-ui/core';

const Auth = () => {
    const classes = useStyles();
    return (
        <Router>
            <Route exact path={process.env.PUBLIC_URL+"/auth"}>

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
                                <TextField id="username" label="Username" 
                                    required variant="outlined"/>
                                <TextField id="password" label="Password" 
                                    required variant="outlined"/>
                                {/* <br/> */}
                                <div style={{display:'flex'}}><Button 
                                    variant="contained" 
                                    style={{marginLeft: '65%'
                                            ,marginTop: '7%'}}
                                    color="primary" 
                                    disableElevation
                                    gutterBottom>
                                Login
                                </Button></div>
                            </form>
                        </Card>
                    </Grid>
                </Grid>
                </div>
            
            </Route>

            {/* <ProtectedRoute path=""/> */}
        </Router>

    )
}

export default Auth
