import React from 'react'
import { Grid,Button } from '@material-ui/core';

const ButtonsGrid = ({showIframe,setShowIframe,openTour}) => {
    return (
        <>
            <Grid container 
                justify="center" 
                direction="row"
                spacing={0}>
            <Grid xs={12} sm={10} md={8} lg={6} item={true}>
            <Button variant="contained" color="secondary"
                onClick={openTour}>
                Tour
            </Button>
            &nbsp;&nbsp;&nbsp; 
            {showIframe && 
                <Button variant="contained" color="primary" 
                    onClick={()=>setShowIframe(false)}>
                    Back
                </Button>
                }
            </Grid>
            </Grid>
        </>
    )
}

export default ButtonsGrid
