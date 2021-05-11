import React, { useRef,useState } from 'react';
import { useHistory } from 'react-router-dom';
import MyGraph from './MyGraph';
import { Grid, Card } from '@material-ui/core';
import './Knowledge.css';
import { Graph } from "react-d3-graph";
import useStyles from './styles';



const Knowledge = () => {
    const classes = useStyles();
    MyGraph.defaultProps = {
        width: 500,
        height: 500,
        linkDistance: 30,
        forceStrength: -20
      };
    const nodeCount = 100;
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
          r: (Math.random() * 5 ) + 2,
        x: 0,
        y: 0
      });
    }
    
    const links = [];
    for (let i = 0; i < nodeCount; i++) {
      let target = 0;
      do {
        target = Math.floor(Math.random() * nodeCount);
      } while(target == i)
      links.push({
        source: i,
        target
      });
    }
    const targetRef = useRef();
    // const [locX,setLocX] = useState(0);
    // const history = useHistory();
    const data = {
        nodes: [{ id: "Harry", color: "blue" }, 
                { id: "Sally" }, 
                { id: "Alice" }],
        links: [
          { source: "Harry", target: "Sally", strokeWidth: 10,
            label: "ab" },
          { source: "Harry", target: "Alice", strokeWidth: 10,
            label: "bc" },
        ],
    };
    const myConfig = {
        "freezeAllDragEvents": false,
        "staticGraph": false,
        "width": 800,
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
            renderLabel: true,
        },
    };
    const onClickGraph = function(event) {
        // const cr = targetRef.current.getBoundingClientRect();
        console.log(event)
        // console.log(cr)
        // window.alert('Clicked the graph background');
   };
    const onClickNode = function(nodeId,node) {
        console.log(`Clicked node ${nodeId}`);
        if (nodeId==="Harry"){
            console.log("")
            // history.push("/");
        }
        
        // return <Redirect push to "/"/>
    };
    
    const onClickLink = function(source, target) {
        console.log(`Clicked link between ${source} and ${target}`);
    };
    return (
        <div className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container 
            justify="center" 
            direction="row"
            spacing={0} className={classes.grid}>
            <Grid xs={12} sm={10} md={8} lg={6} item={true}>
                <Card className={classes.card}
                    // ref={targetRef}
                    >
{/*     
                <Graph
                id="graph-id" // id is mandatory
                data={data}
                config={myConfig}
                onClickGraph={onClickGraph}
                onClickNode={onClickNode}
                onClickLink={onClickLink}
                style={{width: '50%'}}
                />; */}
                <MyGraph nodes={nodes} links={links} />
                </Card>
            </Grid>
        </Grid>
    
    </div>
    )
}

export default Knowledge;

