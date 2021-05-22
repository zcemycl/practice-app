import React, {useState,useEffect} from 'react';
import { Grid, Card } from '@material-ui/core';
import useStyles from './styles';
import data from "./data.json";
import {ButtonsGrid,Tree,ContentFarm} from "./components";
import {Glitch,Text,Tooltip} from "./components";
import Tour from 'reactour'
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Knowledge = ({setSelected,isTourOpen,setIsTourOpen,setAnchorEl}) => {
    const classes = useStyles();
    const [showIframe, setShowIframe] = useState(false);
    const [logoId,setLogoId] = useState(null);
    useEffect(()=>{
        setSelected("Knowledge Graph");
    },[setSelected])

    const disableBody = target => disableBodyScroll(target);
    const enableBody = target => enableBodyScroll(target);

    const steps = [
    {
        selector: '[data-tut="reactour__tree"]',
        content: ()=>(
            <div>
                <Glitch data-glitch="Knowledge Graph">Knowledge Graph</Glitch>
                <Text color="#e5e5e5">
                    <Tooltip data-tooltip="action">Click</Tooltip> Node: Zoom-in<br/>
                    <Tooltip data-tooltip="action">Click</Tooltip> Background: Zoom-out<br/>
                    <Tooltip data-tooltip="action">Double Click</Tooltip> Node: View Content<br/>
                </Text>
            </div>
        ),
        style: {
            backgroundColor: "black",
            color: "white",
        },
        position: 'center',
        },
    {
        selector: '[data-tut="reactour__navbar_home"]',
        content: ()=>(
            <div>
                <Glitch data-glitch="Home">Home</Glitch>
                <Text color="#e5e5e5">
                    Back to Home Page.
                </Text>
            </div>
        ),
        style: {
            backgroundColor: "black",
            color: "white",
            border: "1px solid white",
        },
        action: node => {
            setAnchorEl(null);
        },
        },
    {
        selector: '[data-tut="reactour__navbar_content"]',
        content: ()=>(
            <div>
                <Glitch data-glitch="Content">Demo Bookmarks</Glitch>
                <Text color="#e5e5e5">
                    Click to choose view list of demos.
                </Text>
            </div>
        ),
        style: {
            backgroundColor: "black",
            color: "white",
            border: "1px solid white",
        },
        action: node => {
            setAnchorEl(null);
        },
        },
    {
        selector: '[data-tut="reactour__navbar_content"]',
        content: ()=>(
            <div>
                <Glitch data-glitch="List of Demos">List of Demos</Glitch>
                <Text color="#e5e5e5">
                    Choose the demo.
                </Text>
            </div>
        ),
        style: {
            backgroundColor: "black",
            color: "white",
            border: "1px solid white",
        },
        action: node => {
            setAnchorEl(null);
            node.click();
        },
        highlightedSelectors: ['[data-tut="reactour__navbar_right"]','.menuItem1',
        '.menuItem9'],
        resizeObservables: ['[data-tut="reactour__navbar_right"]','.menuItem1',
        '.menuItem9'],
        },
    {
        selector: '[data-tut="reactour__navbar_git"]',
        content: ()=>(
            <div>
                <Glitch data-glitch="Github">Github</Glitch>
                <Text color="#e5e5e5">
                    All my codes are open source !!
                </Text>
            </div>
        ),
        style: {
            backgroundColor: "black",
            color: "white",
            border: "1px solid white",
        },
        action: node => {
            setAnchorEl(null);
        },
        },
    {
        selector: '[data-tut="reactour__navbar_linkedin"]',
        content: ()=>(
            <div>
                <Glitch data-glitch="LinkedIn">LinkedIn</Glitch>
                <Text color="#e5e5e5">
                    Make a connection. <span role="img" aria-label="sheep">🌝</span>
                </Text>
            </div>
        ),
        style: {
            backgroundColor: "black",
            color: "white",
            border: "1px solid white",
        },
        action: node => {
            setAnchorEl(null);
        },
        },
    {
        selector: '[data-tut="reactour__navbar_shop"]',
        content: ()=>(
            <div>
                <Glitch data-glitch="Shop">Shop</Glitch>
            </div>
        ),
        style: {
            backgroundColor: "black",
            color: "white",
            border: "1px solid white",
        },
        action: node => {
            setAnchorEl(null);
        },
        },
    
    ];

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
        steps={steps}
        isOpen={isTourOpen}
        maskClassName="mask"
        className="helper"
        rounded={5}
        accentColor={"#5cb7b7"}
        onAfterOpen={disableBody}
        onBeforeClose={enableBody}
        />
    <ButtonsGrid openTour={()=>setIsTourOpen(true)}
        showIframe={showIframe} setShowIframe={setShowIframe}/>
            
    
</div>

	);
}

export default Knowledge;

