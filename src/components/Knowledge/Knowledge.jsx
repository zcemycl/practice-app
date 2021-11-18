import React, {useState,useEffect} from 'react';
import { Grid, Card } from '@material-ui/core';
import useStyles from './styles';
import data from "./data.json";
import {ButtonsGrid,Tree,ContentFarm,Arrow} from "./components";
import Tour from 'reactour'
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import './styles.css';
import {assign} from '../../actions';
import {useDispatch} from 'react-redux';
import Steps from './steps';

const Knowledge = ({isTourOpen,setIsTourOpen,setAnchorEl}) => {
    const classes = useStyles();
    const [showIframe, setShowIframe] = useState(false);
    const [logoId,setLogoId] = useState(null);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(assign('Knowledge Graph'))
    },[dispatch])

    const disableBody = target => disableBodyScroll(target);
    const enableBody = target => enableBodyScroll(target);
    
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
    <Tour
        onRequestClose={()=>setIsTourOpen(false)}
        steps={Steps({setAnchorEl})}
        isOpen={isTourOpen}
        maskClassName="mask"
        className="helper"
        rounded={5}
        accentColor={"#5cb7b7"}
        onAfterOpen={disableBody}
        onBeforeClose={enableBody}
        prevButton={<Arrow
            className="CustomHelper__navArrow"
          />}
        nextButton={<Arrow
            className="CustomHelper__navArrow"
            inverted
          />}
        />
    <ButtonsGrid openTour={()=>setIsTourOpen(true)}
        showIframe={showIframe} setShowIframe={setShowIframe}/>
            
</div>
	);
}

export default Knowledge;

