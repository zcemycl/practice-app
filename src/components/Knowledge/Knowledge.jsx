import React, {useEffect,useState} from 'react';
import { Grid, Card } from '@material-ui/core';
import useStyles from './styles';
import Graph from "react-graph-vis";
import data from "./data.json";
import { Button } from "@material-ui/core";

const Knowledge = () => {
  const classes = useStyles();
  const [showIframe, setShowIframe] = useState(false);

  const events = {
    dragStart: (event) => {},
    dragEnd: (event) => {},
    select: function(event) {
      var { nodes, edges } = event;
      if (nodes[0] === 1){
        setShowIframe(true);
      }
      console.log(nodes)
      console.log(event)
    },

  };
  const methods = {
  };

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {});
    document.addEventListener("mousemove", (e) => {});
    document.addEventListener("click", (e) => {
      // console.log(e);
    });
  },[])

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
                    graph={data.graph}
                    options={data.options}
                    events={events}
                    methods={methods}
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

