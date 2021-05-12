import React, {useEffect} from 'react';
import { Grid, Card } from '@material-ui/core';
import useStyles from './styles';
import Graph from "react-graph-vis";
import data from "./data.json";

const Knowledge = () => {
  const classes = useStyles();

  const events = {
    dragStart: (event) => {},
    dragEnd: (event) => {},
    select: function(event) {
      var { nodes, edges } = event;
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
            <Graph
              graph={data.graph}
              options={data.options}
              events={events}
              methods={methods}
            />
            </Card>
        </Grid>
    </Grid>
    
</div>

	);
}

export default Knowledge;

