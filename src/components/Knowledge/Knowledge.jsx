import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
// import * as d3 from 'd3';
// import axios from 'axios';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import './Knowledge.css';
// import { withStyles } from '@material-ui/core/styles';
import { Graph } from "react-d3-graph";
import useStyles from './styles';
import { tree } from 'd3-hierarchy';
// import Bezier from 'bezier-js';
// import ForceGraph2D from "react-force-graph-2d";
// import { forceCollide } from "d3-force-3d";


const Knowledge = () => {
    const classes = useStyles();
    const ref = useRef();
    const history = useHistory();
    const data = {
        nodes: [{ id: "Harry", color: "blue" }, 
                { id: "Sally" }, 
                { id: "Alice" }],
        links: [
          { source: "Harry", target: "Sally", strokeWidth: 10,
            renderLabel: true,  },
          { source: "Harry", target: "Alice", strokeWidth: 10 },
        ],
    };
    const myConfig = {
        d3: {
            linkLength: 200,
            gravity: -200,
        },
        nodeHighlightBehavior: true,
        node: {
            color: "lightgreen",
            size: 1000,
            highlightStrokeColor: "blue",
        },
        link: {
            highlightColor: "lightblue",
        },
    };

    const onClickNode = function(nodeId) {
        window.alert(`Clicked node ${nodeId}`);
        if (nodeId=="Harry"){
            history.push("/");
        }
        
        // return <Redirect push to "/"/>
    };
    
    const onClickLink = function(source, target) {
        window.alert(`Clicked link between ${source} and ${target}`);
    };
    return (
        <div className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container 
            justify="center" 
            direction="row"
            spacing={0} className={classes.grid}>
            <Grid xs={12} sm={10} md={8} lg={6} item={true}>
                <Card className={classes.card}>
                
                <CardContent><Typography variant="h5">
                Knowledge Graph
                </Typography></CardContent>
                <Graph
                ref={ref}
                id="graph-id" // id is mandatory
                data={data}
                config={myConfig}
                onClickNode={onClickNode}
                onClickLink={onClickLink}
                style={{textAlign: 'center'}}
                />;
                </Card>
            </Grid>
        </Grid>
    
    </div>
    )
}

export default Knowledge;

