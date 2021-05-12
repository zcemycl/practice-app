import React, {useEffect} from 'react';
import { Grid, Card } from '@material-ui/core';
import useStyles from './styles';
import Graph from "react-graph-vis";

const data = {
  options: {
    layout: {
      // hierarchical: true,
    },
    edges: {
      color: "#000000"
    },
    nodes: {
      color: "#888f99"
    },
    physics: {
      enabled: true
    },
    interaction: { multiselect: true, dragView: true }
  },
  graph: {
    nodes: [
      { id: 1, label: "Node 1", color:"blue" },
      { id: 2, label: "Node 2" },
      { id: 3, label: "Node 3" },
      { id: 4, label: "Node 4" },
      { id: 5, label: "Node 5" }
    ],
    edges: [
      { from: 1, to: 2, label: "hi" },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 }
    ]
  }
};

const Knowledge = () => {
  const classes = useStyles();

  const events = {
    dragStart: (event) => {console.log(event)},
    dragEnd: (event) => {}
  };

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {});
    document.addEventListener("mousemove", (e) => {});
    document.addEventListener("click", (e) => {
      console.log(e);
      
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
            <Graph
              graph={data.graph}
              options={data.options}
              events={events}
            />
            </Card>
        </Grid>
    </Grid>
    
</div>

	);
}

export default Knowledge;

