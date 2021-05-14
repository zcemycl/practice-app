import React, {useState} from 'react';
import { Grid, Card } from '@material-ui/core';
import useStyles from './styles';
import data from "./data.json";
import {ButtonsGrid,Tree} from ".";
import './styles.css';


const Knowledge = () => {
  const classes = useStyles();
  const [showIframe, setShowIframe] = useState(false);
  const [logoId,setLogoId] = useState(null);

	return (
    <div className={classes.content}>
    <div className={classes.toolbar}/>
    <Grid container 
        justify="center" 
        direction="row"
        spacing={0}
        className={classes.grid}>
        <Grid xs={12} sm={10} md={8} lg={6} item={true}>
            <Card className={classes.card}>
                {showIframe ? 
                  <div style={{ height:"100%", width:"100%" }}
                  dangerouslySetInnerHTML={{ __html: "<iframe style='height:100%; width:100%' src='https://zcemycl.github.io' />"}} /> 
                  :
                  <Tree data={data} logoId={logoId} setLogoId={setLogoId}
                    setShowIframe={setShowIframe}/>
                }
            </Card>
        </Grid>
        
    </Grid>
    <br></br>
    <ButtonsGrid showIframe={showIframe} setShowIframe={setShowIframe}/>
            
    
</div>

	);
}

export default Knowledge;

