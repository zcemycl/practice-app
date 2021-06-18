import React,{useState,useEffect,useRef} from 'react'
import {Grid,Card,Typography} from '@material-ui/core';
import axios from 'axios';
import { csv } from "d3-fetch";
import useStyles from './styles';
import Plot from 'react-plotly.js';
import {MapContainer,TileLayer,Marker,Tooltip} from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";
import 'leaflet/dist/leaflet.css'
import './styles.css'

const conf = {displayModeBar: false}

const VisitRecords = ({setSelected}) => {
    const classes = useStyles();
    const [data,setData] = useState([])
    const [numViews,setNumViews] = useState(0);
    const [visits,setVisits] = useState({});
    const [noPlaces,setNoPlaces] = useState({});
    const [geo,setGeo] = useState([]);
    const cardRef = useRef(null);
    const [w,setW] = useState(640); const [h,setH] = useState(360);
    const [wW,setWW] = useState(640)
    const [topics,setTopics] = useState({})
    // console.log(matches)
    const sheeturi = 'https://sheet.best/api/sheets/82c23d79-9535-4ef8-9970-f59acfed6f0a'
    const lout = {width: wW>720?w*0.45:w, height: h*0.4, marker:{color:'#3CB371'},margin: {
        l: 20,r: 20,b: 110,t: 50,pad: 0
    }}
    const lout2 = {width:wW>720?w*0.45:w,showlegend: true,
        height: wW>720?h*0.4:h*0.2,marker:{color:'#3CB371'},
        margin: {l: 10,r: 10,b: 0,t: 0,pad: 0},
        legend: {orientation: "v",x:0,xanchor:'right',bgcolor:'transparent'}}

    useEffect(()=>{
        setSelected("Visitor Record");
    },[setSelected])

    useEffect(()=>{
        if (cardRef){
            setW(cardRef.current.clientWidth)
            setH(cardRef.current.clientHeight)
            setWW(window.innerWidth)
        }
    },[])

    const handleResize = () => {
        if (cardRef){
            setW(cardRef.current.clientWidth)
            setH(cardRef.current.clientHeight)
            setWW(window.innerWidth)
        }
    }

    useEffect(()=>{
        window.addEventListener('resize',handleResize)
        return () => window.removeEventListener('resize',handleResize)
    },[])

    useEffect(() => {
        const waterMarks = document.getElementsByClassName('leaflet-control-attribution')
        for (let i =0; i < waterMarks.length; i++) {
            document.getElementsByClassName('leaflet-control-attribution')[i].style.display = 'none';
        }
    },[])

    // useEffect(() => {
    //     axios.get(sheeturi)
    //         .then(res=>{
    //           setData(res.data)
    //           setNumViews(res.data.length)
    //         })
    // },[])

    useEffect(() => {
        csv("data/Visitors-Test.csv").then(d => {
            setData(d);setNumViews(d.length)
        });
    },[]);

    useEffect(() => {
        var counts2 = {};
        for (var i = 0; i < data.length; i++) {
            if (data[i].Topic !== ""){
                counts2[data[i].Topic] = 1 + (counts2[data[i].Topic] || 0);
            }
        }
        setTopics(counts2)
    },[data])

    useEffect(() => {
        for (let i = 0; i < data.length; i++){
            axios.get('http://www.geoplugin.net/json.gp?ip='+data[i].IP)
                .then(res=>{
                    const {geoplugin_countryName,geoplugin_latitude,geoplugin_longitude} = res.data
                    setVisits(prev=>{return {...prev,[data[i].IP]:{place:geoplugin_countryName,
                        lat:geoplugin_latitude,lng:geoplugin_longitude}}})
                })}
    },[data])

    useEffect(() => {
        const Countries = Object.values(visits)
        var counts = {};
        for (var i = 0; i < Countries.length; i++) {
            counts[Countries[i].place] = 1 + (counts[Countries[i].place] || 0);
        }
        setNoPlaces(counts)
        setGeo(Countries)
    },[visits])

    return (
        <div className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container 
            justify="center" 
            direction="row"
            spacing={0}
            className={classes.grid}>
            <Grid xs={12} sm={10} md={10} lg={10} item={true}>
                <Card className={classes.card} ref={cardRef} style={{borderRadius:'15px',position:'relative'}}>       
                <Typography variant="h6" style={{fontWeight:600,textAlign:'left',padding:'10px',
                    backgroundColor:'#7B68EE',color:'white',fontFamily:'sans-serif'}}
                    gutterBottom>Visitors Statistics</Typography> 
                <Grid xs={12} item>
                    <Grid container justify="center" 
                        direction="row" spacing={2}>
                    <Grid xs={12} md={6} item={true} >
                        <Typography variant="h6" style={{textAlign:'center'}}
                            gutterBottom>Unique Visitors Regions </Typography> 
                        <Plot data={[{type:'bar',marker:{color:'#7B68EE'},x:Object.keys(noPlaces), 
                                y:Object.values(noPlaces)}]} layout={lout} config={conf}/>
                    </Grid>
                    
                    <Grid xs={12} md={6} item={true}>           
                        <Typography variant="h6" style={{textAlign:'center'}}
                            gutterBottom>Topics Views</Typography> 
                        <Plot data={[{type:'pie',values:Object.values(topics), 
                            labels:Object.keys(topics),direction:'clockwise',
                            sort:false,textposition:'inside',texttemplate:'%{percent:%f}',
                            textinfo:'percentage',hoverinfo:'label+value_percent',
                            hole:0.5}]} layout={lout2} config={conf}/>
                    </Grid>
                    </Grid>
                </Grid>
                
                <Typography variant="h6" style={{textAlign:'center'}}
                        gutterBottom>Visitors' Internet Service Providers</Typography>  
                <Grid xs={12} md={12} item style={{height:h*0.3}}>
                    <MapContainer center={[51.5074, 0.1278]} zoom={1} >
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                    <MarkerClusterGroup> 
                    {geo.map(({lat,lng},index)=>(<Marker key={index}
                        position={[parseFloat(lat),
                        parseFloat(lng)]} 
                        eventHandlers={{
                            click: (e) => console.log(lat,lng),
                        }}>
                        <Tooltip>{lat,lng}</Tooltip>
                        </Marker>))}
                    </MarkerClusterGroup>
                    
                    </MapContainer>
                </Grid>

                <Grid xs={12} md={12} item>
                <Grid container 
                    justify="center" 
                    direction="row"
                    alignItems="stretch"
                    spacing={0}>
                    <Grid xs={3} item >
                    <Typography variant="h6" style={{fontWeight:600,textAlign:'center',
                        backgroundColor:'#20B2AA',color:'white',height:'100%',border:'2px solid white'}}
                        gutterBottom>Views<div>{numViews}</div></Typography>             
                    </Grid>
                    <Grid xs={3} item>
                    <Typography variant="h6" style={{fontWeight:600,textAlign:'center',
                        backgroundColor:'#20B2AA',color:'white',height:'100%',border:'2px solid white'}}
                        gutterBottom>Viewers<div>{Object.keys(visits).length}</div></Typography>             
                    </Grid>
                    <Grid xs={3} item>
                    <Typography variant="h6" style={{fontWeight:600,textAlign:'center',
                        backgroundColor:'#20B2AA',color:'white',height:'100%',border:'2px solid white'}}
                        gutterBottom>Regions<div>{Object.keys(noPlaces).length}</div></Typography>             
                    </Grid>
                    <Grid xs={3} item>
                    <Typography variant="h6" style={{fontWeight:600,textAlign:'center',
                        backgroundColor:'#20B2AA',color:'white',height:'100%',border:'2px solid white'}}
                        gutterBottom>Pages<div>12</div></Typography>             
                    </Grid>
                </Grid>
                </Grid>
                
                

                </Card>
            </Grid>
            
        </Grid>
            
        </div>
    )
}

export default VisitRecords
