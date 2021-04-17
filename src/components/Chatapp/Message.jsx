import React from 'react';
import { Typography, Box } from '@material-ui/core';
import useStyles from './styles';

const Message = ({target,msg}) => {
    const classes = useStyles();

    let bx1 = null;
    let bx2 = null;
    if (target==='me'){
        bx1 = classes.bx1right;
        bx2 = classes.bx2right;
    } else {
        bx1 = classes.bx1left;
        bx2 = classes.bx2left;   
    };

    return (
        <>
        <Box className={bx1} p={1}>
            <Box className={bx2} p={1}>
                <Typography variant="body1">
                {msg}
                </Typography>
            </Box>
        </Box>   
        </>
    )
}

export default Message
