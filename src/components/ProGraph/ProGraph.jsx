import React, {useEffect} from 'react';
import FetchPlot from './FetchPlot/FetchPlot';
import UIPlot from './UIPlot/UIPlot';
import SocketPlot from './SocketPlot/SocketPlot';
import { useTheme } from '@material-ui/core/styles';
import { Grid, MobileStepper, Button } from '@material-ui/core';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@material-ui/icons';
import useStyles from './styles';

const ProGraph = ({setSelected}) => {
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

    useEffect(()=>{
        setSelected("Progressive Graph");
    },[setSelected])

    const switchPlot = (step) => {
        switch (step) {
            case 0:
                return (<Grid xs={12} sm={10} md={8} lg={4} item={true}><SocketPlot/></Grid>);
            case 1:
                return (<Grid xs={12} sm={10} md={8} lg={4} item={true}><UIPlot/></Grid>);
            case 2:
                return (<Grid xs={12} sm={10} md={8} lg={4} item={true}><FetchPlot/></Grid>);
            default:
                return (<Grid xs={12} sm={10} md={8} lg={4} item={true}><SocketPlot/></Grid>);
        }
    };

    return (
        <div className={classes.content}>  
        <div className={classes.toolbar}/>        
            <Grid container 
                justify="center" 
                direction="row"
                spacing={0}
                className={classes.grid}>
                {switchPlot(activeStep)}
                <Grid  container
                    justify="center" 
                    direction="row"
                    spacing={0}>
                    <Grid xs={12} sm={10} md={8} lg={4} item={true}>
                        <MobileStepper
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
