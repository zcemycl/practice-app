import React, {useRef,useEffect} from 'react';
import useStyles from './styles';
import { Redirect } from 'react-router-dom';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import LoginForm from './LoginForm';
import {assign} from '../../actions';
import {useDispatch} from 'react-redux';

const Auth = ({isAuth,setIsAuth}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const valueUser = useRef('');
    const valuePwd = useRef('');
    useEffect(()=>{
        dispatch(assign("Authentication"));
    },[dispatch])
    const handleSignIn = () => {
        const key = process.env.REACT_APP_SECRET_CODE;
        const isUser=valueUser.current.value===key;
        const isPwd=valuePwd.current.value===key;
        if ( isUser && isPwd )
        {
            setIsAuth(true);
        }        
    }

    if ( isAuth ){
        return (<Redirect to="/profile"/>)
    } else {

        return (
            <div className={classes.content}>
            <Grid container 
                justify="center" 
                direction="row"
                spacing={0}
                className={classes.grid}>
                <Grid xs={12} sm={6} md={4} lg={3} item={true}>
                    <Card className={classes.card}>
                        <CardContent><Typography variant="h5">
                        Login Form
                        </Typography></CardContent>
                        <LoginForm handleSignIn={handleSignIn} 
                            valueUser={valueUser}
                            valuePwd={valuePwd}
                            isAuth={isAuth}
                            setIsAuth={setIsAuth}/>
                    </Card>
                </Grid>
            </Grid>
            </div>
        
    )
    }
}

export default Auth
