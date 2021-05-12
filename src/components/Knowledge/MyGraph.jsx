import React,{Component} from 'react';
import * as d3 from 'd3';
import ReactDOM from 'react-dom'

class MyGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: props.nodes,
            links: props.links
        };
        this.ref = props.targetRef;
    }

    
    componentDidMount() {

        const container = document.querySelector("#container");
        

        this.state.nodes = this.state.nodes.map((d) => Object.assign({}, d));
        this.state.links = this.state.links.map((d) => Object.assign({}, d));
        // console.log(links)
        // console.log(nodes)

        // this.d3Graph = d3.select(ReactDOM.findDOMNode(this));
        // this.force = d3
        // .forceSimulation(this.state.nodes)
        // .force("charge", d3.forceManyBody().strength(-150))
        // .force("link", d3.forceLink(links).id(d => d.id))
        // .force("x", d3.forceX())
        // .force("y", d3.forceY());
        

        const containerRect = container.getBoundingClientRect();
        this.width = containerRect.width;
        this.height = containerRect.height;
        // console.log(height)
        //   console.log(d3.select(container))

        // const svg = d3.select(container).append("svg")
        // .attr("viewBox", [0, 0, width/2, height/2])
        // .call(d3.zoom().on("zoom", function (event) {
        //   console.log(event)
        //   svg.attr("transform", event.transform);
        // }));




        this.d3Graph = d3.select(ReactDOM.findDOMNode(this));
        this.force = d3.forceSimulation(this.state.nodes)
            .force("charge",
            d3.forceManyBody()
                .strength(this.props.forceStrength)
            )
            .force("link",
            d3.forceLink().distance(this.props.linkDistance).links(this.state.links)
            )
            .force("x", d3.forceX(this.props.width / 2))
            .force("y", d3.forceY(this.props.height / 2));
    
        
        this.svg = d3.select(container).append("svg")
        .attr("viewBox", [0, 0, this.width, this.height])
        // .call(d3.zoom().on("zoom", function (d,event) {
          // console.log(event)
          // this.svg.attr("transform", event.transform);
        // }));

        this.drag = () => {
          const dragstarted = (d,event) => {
            if (!event.active) this.force.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          };
      
          const dragged = (d,event) => {
            d.fx = event.x;
            d.fy = event.y;
          };
      
          const dragended = (d,event) => {
            if (!event.active) this.force.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          };
      
          return d3
            .drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
        };
      

        this.link = this.svg
        .append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .selectAll("line")
        .data(this.state.links)
        .join("line")
        .attr("stroke-width", d => Math.sqrt(d.value))
        .call(this.drag(this.force));

        this.node = this.svg
        .append("g")
        .attr("stroke", "#fff")
        .attr("stroke-width", 2)
        .selectAll("circle")
        .data(this.state.nodes)
        .join("circle")
        .call(this.drag(this.force));

        this.force.on('tick', () => {
        this.setState({
          links: this.state.links,
          nodes: this.state.nodes
        })
        this.link
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);

        // update node positions
        this.node
          .attr("cx", d => d.x)
          .attr("cy", d => d.y);
        }
        );


    }
  
    componentWillUnmount() {
      this.force.stop();
    }
  
      render() {
      return (
          <svg width={this.props.width} height={this.props.height}>
            {this.state.links.map((link, index) =>(
            <line
              x1={link.source.x}
              y1={link.source.y}
              x2={link.target.x}
              y2={link.target.y}
              key={`line-${index}        // if (!this.ref.current){
                //     const containerRect = this.ref.getBoundingClientRect();
                //     const height = containerRect.height;
                //     const width = containerRect.width;
        
                // }`}
              stroke="black" />
          ))}
            {this.state.nodes.map((node, index) =>(
              <circle r={node.r} cx={node.x} cy={node.y} fill="red" key={index}/>
          ))}
        </svg>
      );
    }
  }
  

  

  
//   console.log(links);
  
//   ReactDOM.render(
//     <MyGraph nodes={nodes} links={links} />,
//     document.getElementById('container')
//   );

export default MyGraph;