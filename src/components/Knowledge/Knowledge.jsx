import React, {useState,useEffect} from 'react';
import { Grid, Card } from '@material-ui/core';
import useStyles from './styles';
import Graph from "react-graph-vis";
import data from "./data.json";
import { Button } from "@material-ui/core";
import './styles.css';

const Knowledge = () => {
  const classes = useStyles();
  const [showIframe, setShowIframe] = useState(false);
  const [canvasEvent,setCanvasEvent] = useState(null);
  const [logoEvent, setLogoEvent] = useState(null);
  const [network,setNetwork] = useState(null);
  const toptions = data.options;
  const tgraph = data.graph;
  var [graph,setGraph] = useState(tgraph);
  const threshold = 7;
  const [logoId,setLogoId] = useState(null);

  const updateGraph = (size,targetId=null) => {
    if (!targetId){
      targetId = logoId;
    }
    const data = graph.nodes.map((el) => {
      if (el.id === targetId) return { ...el, size: size };
      else return el;
    });

    const temp = { ...graph };
    temp.nodes = data;
    setGraph(temp);
  }

  const handleMouseMove = (e) => {
    setCanvasEvent(e.nativeEvent); 
   
    if (logoEvent && canvasEvent){
      const [x2,y2] = [canvasEvent.clientX,canvasEvent.clientY];
      const [x1,y1] = [e.nativeEvent.clientX,e.nativeEvent.clientY];
      if (Math.abs(x1-x2)>=threshold && Math.abs(y1-y2)>=threshold){
        updateGraph(25);
      }
    }

  }

  useEffect(() => {
    window.addEventListener("onMouseMove", handleMouseMove);
    window.addEventListener("onMouseOver",handleMouseMove);
  },[])


  const events = {
    dragStart: (event) => {},
    dragEnd: (event) => {},
    select: (e) => {
      if (e.nodes[0] !== logoId && logoId){
        updateGraph(25,logoId);
      }
      
      if (e.nodes[0] === 1){
        setShowIframe(true);
      }
      const [x1,y1] = [e.event.clientX,e.event.clientY];
      const [x2,y2] = [canvasEvent.clientX,canvasEvent.clientY];
      if (Math.abs(x1-x2)<threshold*2 && Math.abs(y1-y2)<threshold*2){
        updateGraph(20,e.node);
      }
      setLogoEvent(e.event);
      setLogoId(e.nodes[0]);
      
    },
    hoverNode: (e) => {
      if (e.node !== logoId && logoId){
        updateGraph(25,logoId);
      }
      
      const [x1,y1] = [e.event.clientX,e.event.clientY];
      const [x2,y2] = [canvasEvent.clientX,canvasEvent.clientY];
      if (Math.abs(x1-x2)<threshold*2 && Math.abs(y1-y2)<threshold*2){
        updateGraph(20,e.node);
      }
      setLogoEvent(e.event);
      setLogoId(e.node);
      
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
        <Grid xs={12} sm={10} md={8} lg={6} item={true}>
            <Card className={classes.card}>
                {showIframe ? 
                  <div style={{ height:"100%", width:"100%" }}
                  dangerouslySetInnerHTML={{ __html: "<iframe style='height:100%; width:100%' src='https://zcemycl.github.io' />"}} /> 
                  :
                  <div onMouseMove={handleMouseMove} 
                    onMouseOver={handleMouseMove}
                    style={{ height:"100%", width:"100%" }}>
                  <Graph
                    graph={graph}
                    options={toptions}
                    events={events}
                    getNetwork={(network) => {
                      setNetwork(network);
                      // setTimeout(() => network.fit(), 2000);
                    }}
                  />
                  </div>
                }
                
            </Card>
        </Grid>
        
    </Grid>
    <br></br>
    <Grid container 
        justify="center" 
        direction="row"
        spacing={0}>
    <Grid xs={12} sm={10} md={8} lg={6} item={true}>
    {showIframe && 
          <Button variant="contained" color="primary" onClick={()=>setShowIframe(false)}>
            Back
          </Button>
          }
    </Grid>
    </Grid>
            
    
</div>

	);
}

export default Knowledge;

