import React, {useState,useEffect,useCallback} from 'react'
import Graph from "react-graph-vis";

const useWindowEvent = (event,callback) => {
    useEffect(() => {
      window.addEventListener(event,callback);
      return () => window.removeEventListener(event,callback);
    },[event,callback]);
  };
  
  const useGlobalMouseMove = (callback) => {
    return useWindowEvent("onMouseMove",callback);
  };
  
  const useGlobalMouseOver = (callback) => {
    return useWindowEvent("onMouseOver",callback);
  };

const Tree = ({data,logoId,setLogoId,setShowIframe}) => {
    const [network,setNetwork] = useState(null);
    const toptions = data.options;
    const tgraph = data.graph;
    const [canvasEvent,setCanvasEvent] = useState(null);
    const [logoEvent, setLogoEvent] = useState(null);
    const [graph,setGraph] = useState(tgraph);
    const [scale,setScale] = useState(1);
    const mainNodes = 16;
    const threshold = 10;
    const updateGraph = useCallback((size,targetId=null) => {
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
      },[graph,logoId])
    
    const handleMouseMove = useCallback((e) => {
    setCanvasEvent(e.nativeEvent); 
    
    if (logoEvent && e.nativeEvent){
        const [x1,y1] = [logoEvent.clientX,logoEvent.clientY];
        const [x2,y2] = [e.nativeEvent.clientX,e.nativeEvent.clientY];
        if (Math.abs(x1-x2)>=threshold && Math.abs(y1-y2)>=threshold){
        updateGraph(25);
        }
    }

    },[logoEvent,updateGraph])
    
    useGlobalMouseMove(handleMouseMove);
    useGlobalMouseOver(handleMouseMove);


    const compareEvent = (node,e) => {
      if (node > mainNodes) return;
      if (node !== logoId && logoId){
        updateGraph(25,logoId);
      }
      if (canvasEvent){
        const [x1,y1] = [e.event.clientX,e.event.clientY];
        const [x2,y2] = [canvasEvent.clientX,canvasEvent.clientY];
        if (Math.abs(x1-x2)<threshold*2 && Math.abs(y1-y2)<threshold*2){
          updateGraph(20,node);
        }
        setLogoEvent(e.event);
      }
      
      setLogoId(node);
    }

    const events = {
        dragStart: (e) => {
          compareEvent(e.nodes[0],e);
        },
        dragging: (e) => {
          compareEvent(e.nodes[0],e);
        },
        dragEnd: (e) => {
          if (e.nodes[0] > mainNodes) return;
          updateGraph(25,logoId);
        },
        selectNode: (e) => {      
          compareEvent(e.nodes[0],e);
          // console.log(e)
          
          if (network) {
            const {x,y} = network.net.getPosition(e.nodes[0]);
            network.net.moveTo({position:{x,y},scale:1.5,animation:true});
          }

          updateGraph(25,logoId);
          
        },
        hoverNode: (e) => {
          compareEvent(e.node,e);
        },
        deselectNode: (e) => {
          if (e.nodes[0] > mainNodes) return;
          updateGraph(25,logoId);
        },
        doubleClick: (e) => {
          setLogoId(e.nodes[0]);
          setShowIframe(true);
          compareEvent(e.nodes[0],e);
        },
        oncontext: (e) => {
          if (network) {
            network.net.moveTo({position:{x:0,y:0},scale:scale,animation:true});
          }
        },
        click: (e) => {
          console.log(e);
          if (e.event && e.nodes.length===0 && e.edges.length===0 && network){
            network.net.moveTo({position:{x:0,y:0},scale:scale,animation:true});
          }
        }
    
      };
    
    return (
        <div onMouseMove={handleMouseMove} 
            onMouseOver={handleMouseMove}
            style={{ height:"100%", width:"100%" }}>
            <Graph
            graph={graph}
            options={toptions}
            events={events}
            getNetwork={(net) => {
                setNetwork({...network,net});
                setScale(net.getScale());
                setTimeout(() => net.fit({animation:{duration:1000}}), 500);
            }}
            />
        </div>
    )
}

export default Tree
