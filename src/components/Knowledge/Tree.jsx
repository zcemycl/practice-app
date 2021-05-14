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
    const threshold = 7;
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

    const events = {
        // dragStart: (event) => {},
        // dragEnd: (event) => {},
        select: (e) => {      
          if (e.nodes[0] === 1){
            setShowIframe(true);
          }
    
          if (e.nodes[0] !== logoId && logoId){
            updateGraph(25,logoId);
          }
          if (canvasEvent){
            const [x1,y1] = [e.event.clientX,e.event.clientY];
            const [x2,y2] = [canvasEvent.clientX,canvasEvent.clientY];
            if (Math.abs(x1-x2)<threshold*2 && Math.abs(y1-y2)<threshold*2){
              updateGraph(20,e.nodes[0]);
            }
            setLogoEvent(e.event);
          }
          
          setLogoId(e.nodes[0]);
          
        },
        hoverNode: (e) => {
          if (e.node !== logoId && logoId){
            updateGraph(25,logoId);
          }
          if (canvasEvent){
            const [x1,y1] = [e.event.clientX,e.event.clientY];
            const [x2,y2] = [canvasEvent.clientX,canvasEvent.clientY];
            if (Math.abs(x1-x2)<threshold*2 && Math.abs(y1-y2)<threshold*2){
              updateGraph(20,e.node);
            }
            setLogoEvent(e.event);
          }
          
          setLogoId(e.node);   
        },
    
    
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
                setTimeout(() => net.fit(), 3000);
            }}
            />
        </div>
    )
}

export default Tree
