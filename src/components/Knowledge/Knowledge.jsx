import React, {useState} from 'react';
import { Grid, Card } from '@material-ui/core';
import useStyles from './styles';
import Graph from "react-graph-vis";
import data from "./data.json";
import { Button } from "@material-ui/core";
import './styles.css';

const Knowledge = () => {
  const classes = useStyles();
  const [showIframe, setShowIframe] = useState(false);

  var custom = (values, id, selected, hovering) => {
    values.size = 100;
    console.log(values);
  }
  var tmp = {...data};
  const length = tmp.graph.nodes.length;
  for (var i=0;i<length;i++){
    tmp.graph.nodes[i].chosen = {node:custom,label:false};
  }
  // var [state,setState] = useState(tmp);
  const [network,setNetwork] = useState(null);


  const events = {
    dragStart: (event) => {},
    dragEnd: (event) => {},
    select: (event) => {
      var { nodes, edges } = event;
      if (nodes[0] === 1){
        setShowIframe(true);
      }
      network.on("afterDrawing",(ctx)=>{
        // console.log(ctx);
        var nodePosition = network.getPositions([nodes]);
        // console.log(nodePosition)
      })
    },


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
                  <Graph
                    graph={tmp.graph}
                    options={tmp.options}
                    events={events}
                    getNetwork={(network) => {
                      setNetwork(network);
                      setTimeout(() => network.fit(), 2000);
                    }}
                  />
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

