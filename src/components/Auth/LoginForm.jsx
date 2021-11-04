import React, {useState} from 'react';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { InputAdornment, TextField, Button, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from "@material-ui/icons";

const LoginForm = ({handleSignIn,valueUser,valuePwd}) => {
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
        <>
        <form className={classes.form} 
            noValidate autoComplete="off">
            <TextField id="username" 
                data-testid="loginForm_User"
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

            <div className={classes.divbtn}>
            <Button 
                type="submit"
                variant="contained" 
                className={classes.button}
                color="primary" 
                disableElevation
                onClick={handleSignIn}
                component={Link}
                to="/profile"
                >Login</Button></div>

        </form>
        </>
    )
}

export default LoginForm
