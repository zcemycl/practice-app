import React from 'react'
import {Grid,Typography} from '@material-ui/core';

const Numbar = ({xs,sm,md,lg,numViews,numUni,visits,noPlaces}) => {
    return (
        <>
        <Grid xs={xs} sm={sm} md={md} lg={lg} item>
        <Grid container 
            justify="center" 
            direction="row"
            alignItems="stretch"
            spacing={0}>
            <Grid xs={3} item >
            <Typography variant="h6" style={{fontWeight:600,textAlign:'center',
                backgroundColor:'#20B2AA',color:'white',height:'100%',border:'2px solid white'}}
                gutterBottom>Views<div>{numViews}</div></Typography>             
            </Grid>
            <Grid xs={3} item>
            <Typography variant="h6" style={{fontWeight:600,textAlign:'center',
                backgroundColor:'#20B2AA',color:'white',height:'100%',border:'2px solid white'}}
                gutterBottom>Viewers<div>{numUni}</div></Typography>             
            </Grid>
            <Grid xs={3} item>
            <Typography variant="h6" style={{fontWeight:600,textAlign:'center',
                backgroundColor:'#20B2AA',color:'white',height:'100%',border:'2px solid white'}}
                gutterBottom>Regions<div>{Object.keys(noPlaces).length}</div></Typography>             
            </Grid>
            <Grid xs={3} item>
            <Typography variant="h6" style={{fontWeight:600,textAlign:'center',
                backgroundColor:'#20B2AA',color:'white',height:'100%',border:'2px solid white'}}
                gutterBottom>Pages<div>12</div></Typography>             
            </Grid>
        </Grid>
        </Grid>   
        </>
    )
}

export default Numbar
