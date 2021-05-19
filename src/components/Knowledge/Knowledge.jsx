import React, {useState,useEffect} from 'react';
import { Grid, Card } from '@material-ui/core';
import useStyles from './styles';
import data from "./data.json";
import {ButtonsGrid,Tree,ContentFarm} from "./components";

const Knowledge = ({setSelected}) => {
    const classes = useStyles();
    const [showIframe, setShowIframe] = useState(false);
    const [logoId,setLogoId] = useState(null);
    useEffect(()=>{
        setSelected("Knowledge Graph");
    },[setSelected])

	return (
    <div className={classes.content}>
    <div className={classes.toolbar}/>
    <Grid container 
        justify="center" 
        direction="row"
        spacing={0}
        className={classes.grid}>
        <Grid xs={12} sm={10} md={8} lg={6} item={true}>
            <Card className={classes.card} >
                {showIframe ? <ContentFarm nodeId={logoId}/>
                  : <Tree data={data} logoId={logoId} setLogoId={setLogoId}
                        setShowIframe={setShowIframe}/>}
            </Card>
        </Grid>
        
    </Grid>
    <br></br>
    <ButtonsGrid showIframe={showIframe} setShowIframe={setShowIframe}/>
            
    
</div>

	);
}

export default Knowledge;

