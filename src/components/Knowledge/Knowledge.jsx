import React, { Component } from 'react';
import * as d3 from 'd3';
import axios from 'axios';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import './Knowledge.css';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      position: 'relative',
    },
    root: {
      flexGrow: 1,
    },
    grid: {
      height: '70vh',
    },
    card: {
      width:'100%',
      height: '100%', 
      textAlign: 'center',
    },
  });

class Knowledge extends Component {
    // constructor(props) {
    //     super(props);
    //     this.data = null;
    //   }
      
    componentDidMount() {
    // const url = 'https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json';
    
    // axios.get(url).then(res => {
    //     const data = res.data;
    //     console.log(data);
        
    //     const width = 640;
    //     const height = 480;
    //     const backgroundColor = "black";
        
    //     //Initializing chart
    //     const chart = d3.select('.chart')
    //     .attr('width', width)
    //     .attr('height', height)
    //     .style('background-color', backgroundColor);

    //     console.log(chart)
    //     //Creating tooltip
    //     const tooltip = d3.select('.container')
    //     .append('div')
    //     .attr('class', 'tooltip')
    //     .html('Tooltip');
        
    //     //Initializing force simulation
    //     const simulation = d3.forceSimulation()
    //     .force('link', d3.forceLink())
    //     .force('charge', d3.forceManyBody())
    //     .force('collide', d3.forceCollide())
    //     .force('center', d3.forceCenter(width / 2, height / 2))
    //     .force("y", d3.forceY(0))
    //     .force("x", d3.forceX(0));
        
        
    //     //Drag functions
    //     const dragStart = (event,d) => {
    //     if (!event.active) simulation.alphaTarget(0.3).restart();
    //     d.fx = d.x;
    //     d.fy = d.y;
    //     };
        
    //     const drag = (event,d) => {
    //     d.fx = event.x;
    //     d.fy = event.y;
    //     };
        
    //     const dragEnd = (event,d) => {
    //     if (!event.active) simulation.alphaTarget(0);
    //     d.fx = null;
    //     d.fy = null;
    //     }
        
    //     //Creating links
    //     const link = chart.append('g')
    //     .attr('class', 'links')
    //     .selectAll('line')
    //     .data(data.links).enter()
    //     .append('line');
        
    //     //Creating nodes
    //     const node = d3.select('.chartContainer')
    //     .selectAll('div')
    //     .data(data.nodes).enter()
    //     .append('div')
    //     .attr('class', d => {return 'flag flag-' + d.code;})
    //     .call(d3.drag()
    //         .on('start', dragStart)
    //         .on('drag', drag)
    //         .on('end', dragEnd)
    //     ).on('mouseover',(event,d) => {
    //         tooltip.html(d.country)
    //         .style('left', event.pageX + 5 +'px')
    //         .style('top', event.pageY + 5 + 'px')
    //         .style('opacity', .9);
    //     }).on('mouseout', () => {
    //         tooltip.style('opacity', 0)
    //         .style('left', '0px')
    //         .style('top', '0px');
    //     });
        
    //     //Setting location when ticked
    //     const ticked = () => {
    //     link
    //         .attr("x1", d => { return d.source.x; })
    //         .attr("y1", d => { return d.source.y; })
    //         .attr("x2", d => { return d.target.x; })
    //         .attr("y2", d => { return d.target.y; });

    //     node
    //         .attr("style", d => { 
    //         return 'left: ' + d.x + 'px; top: ' + (d.y + 72) + 'px'; 
    //         });
    //     };
        
    //     //Starting simulation
    //     simulation.nodes(data.nodes)
    //     .on('tick', ticked);
        
    //     simulation.force('link')
    //     .links(data.links);
    
    // });
    }
      
      render() {
        const {classes} = this.props;
        return (
            <div className={classes.content}>
                <div className={classes.toolbar}/>
                <Grid container 
                    justify="center" 
                    direction="row"
                    spacing={0} className={classes.grid}>
                    <Grid xs={12} sm={10} md={8} lg={6}>
                        <Card className={classes.card}>
                        {/* <div className='container'>
                            <h1>National Contiguity</h1>
                            <div className='chartContainer'>
                            <svg className='chart'>
                            </svg>
                            </div>
                        </div> */}
                        <CardContent><Typography variant="h5">
                        Knowledge Graph
                        </Typography></CardContent>
                        </Card>
                    </Grid>
                </Grid>
            
        </div>
          
        ); 
      }
}

export default withStyles(styles)(Knowledge);
