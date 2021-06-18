import React from 'react'
import Plot from 'react-plotly.js';
import {Grid,Typography} from '@material-ui/core';

const conf = {displayModeBar: false}

const Bar = ({xs,sm,md,lg,w,h,wW,minW,noPlaces}) => {
    const lout = {width: wW>minW?w*0.45:w, height: h*0.6, marker:{color:'#3CB371'},margin: {
        l: 30,r: wW>minW?80:40,b: 110,t: 0,pad: 0
    }}
    return (
        <>
        <Grid xs={xs} sm={sm} md={md} lg={lg} item={true} >
            <Typography variant="h6" style={{textAlign:'center'}}
                gutterBottom>Unique Visitors Regions </Typography> 
            <Plot data={[{type:'bar',marker:{color:'#7B68EE'},x:Object.keys(noPlaces), 
                    y:Object.values(noPlaces)}]} layout={lout} config={conf}/>
        </Grid>   
        </>
    )
}

export default Bar
