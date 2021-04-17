import React from 'react';
import { Typography, Box } from '@material-ui/core';
import useStyles from './styles';

const Message = ({target,msg,name}) => {
    const classes = useStyles();

    let bx1 = null;
    let bx2 = null;
    let bx3 = null;
    if (target==='me'){
        bx1 = classes.bx1right;
        bx2 = classes.bx2right;
        bx3 = classes.bx3right;
    } else {
        bx1 = classes.bx1left;
        bx2 = classes.bx2left;   
        bx3 = classes.bx3left;
    };

    return (
        <>
        <Box className={bx1} p={1.2}>
            <Box className={bx3} p={1}>
                <Typography variant="body1"
                style={{fontSize:'70%',
                        }}
                >
                {name}
                </Typography>
            </Box>
            
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
