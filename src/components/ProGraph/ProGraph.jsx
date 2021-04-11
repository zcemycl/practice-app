import React from 'react';
import FetchPlot from './FetchPlot/FetchPlot';
import UIPlot from './UIPlot/UIPlot';
import SocketPlot from './SocketPlot/SocketPlot';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { MobileStepper, Paper, Typography, Button} from '@material-ui/core';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@material-ui/icons';
import useStyles from './styles';

const ProGraph = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const classes = useStyles();
    const theme = useTheme();
    const maxSteps = 3;
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
    setActiveStep(step);
    };
    const switchPlot = (step) => {
        switch (step) {
            case 0:
                return (<Grid xs={12} sm={6} md={4} lg={3}><SocketPlot/></Grid>);
            case 1:
                return (<Grid xs={12} sm={6} md={4} lg={3}><UIPlot/></Grid>);
            case 2:
                return (<Grid xs={12} sm={6} md={4} lg={3}><FetchPlot/></Grid>)
        }
    };

    return (
        <div className={classes.content} style={{position:'relative'}}>          
            <Grid container 
                justify="center" 
                direction="row"
                spacing={0}
                style={{padding: '20vh 0 0 0'}}>
                {switchPlot(activeStep)}
                <Grid  container
                    justify="center" 
                    direction="row"
                    spacing={0}>
                    <Grid xs={12} sm={6} md={4} lg={3}><MobileStepper
                        steps={maxSteps}
                        position="static"
                        variant="text"
                        activeStep={activeStep}
                        nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                            Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                        }
                        backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Back
                        </Button>
                        }
                    /></Grid>
                </Grid>
            </Grid>

        </div>
    )
}

export default ProGraph
