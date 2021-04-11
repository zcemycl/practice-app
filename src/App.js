import React from "react";
import { Grid } from '@material-ui/core';
import { UIPlot, FetchPlot, SocketPlot } from './components';

const App = () => {


    return (<div>

        <Grid container justify="center" >
            
            <Grid xs={12} sm={6} md={4} lg={3}>
                <UIPlot/>
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={3}>
                <FetchPlot/>
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={3}>
                <SocketPlot/>
            </Grid>
            
        </Grid>
        

        </div>)
}

export default App
