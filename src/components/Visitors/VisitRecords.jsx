import React,{useState,useEffect,useRef} from 'react'
import { Grid, Card, Typography } from '@material-ui/core';
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
    const [w,setW] = useState(640);
    const [h,setH] = useState(360);
    const [map,setMap] = useState(null);
    const sheeturi = 'https://sheet.best/api/sheets/82c23d79-9535-4ef8-9970-f59acfed6f0a'
    const lout = {width: w, height: h*0.5, marker:{color:'#3CB371'},title: 'Unique Visitors Regions',margin: {
        l: 20,r: 20,b: 110,t: 50,pad: 0
    }}
    useEffect(()=>{
        setSelected("Visitor Record");
    },[setSelected])

    useEffect(()=>{
        if (cardRef){
            setW(cardRef.current.clientWidth)
            setH(cardRef.current.clientHeight)
        }
    },[])

    useEffect(() => {
        csv("data/Visitors-Test.csv").then(d => {
            setData(d)
            setNumViews(d.length)
            for (let i = 0; i < d.length; i++){
                axios.get('http://www.geoplugin.net/json.gp?ip='+d[i].IP)
                    .then(res=>{
                        const {geoplugin_countryName,geoplugin_latitude,geoplugin_longitude} = res.data
                        setVisits(prev=>{return {...prev,[d[i].IP]:{place:geoplugin_countryName,
                            lat:geoplugin_latitude,lng:geoplugin_longitude}}})
                    })
            }

        });
    },[]);

    useEffect(() => {
        const Countries = Object.values(visits)
        var counts = {};
        for (var i = 0; i < Countries.length; i++) {
            counts[Countries[i].place] = 1 + (counts[Countries[i].place] || 0);
        }
        setNoPlaces(counts)
        setGeo(Countries)
    },[visits])

    const handleResize = () => {
        if (cardRef){
            setW(cardRef.current.clientWidth)
            setH(cardRef.current.clientHeight)
        }
    }

    useEffect(()=>{
        window.addEventListener('resize',handleResize)
        return () => window.removeEventListener('resize',handleResize)
    },[])

    useEffect(()=>{
        if (map){
            console.log(map.getCenter())
        }
    },[map])
    

    // useEffect(() => {
    //     axios.get(sheeturi)
    //         .then(res=>{
    //           console.log(res.data)
    //           setData(res.data)
    //         })
    // },[])

    return (
        <div className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container 
            justify="center" 
            direction="row"
            spacing={0}
            className={classes.grid}>
            <Grid xs={12} sm={10} md={5} lg={5} item={true}>
                <Card className={classes.card} ref={cardRef} style={{borderRadius:'15px',position:'relative'}}>       
                <Grid xs={12}item={true}>
                    <Typography variant="h6" style={{fontWeight:600,textAlign:'left',padding:'10px',
                    backgroundColor:'#7B68EE',color:'white',fontFamily:'sans-serif'}}
                    gutterBottom>Visitors Statistics</Typography>              
                <Plot
                    data={[
                    {type:'bar',marker:{color:'#7B68EE'},x:Object.keys(noPlaces), 
                        y:Object.values(noPlaces)}
                    ]}
                    layout={lout} config={conf}
                />
                </Grid>

                <Grid xs={12} md={12} item style={{height:h*0.4}}>
                    <MapContainer center={[51.5074, 0.1278]} zoom={1}
                        whenCreated={e=>setMap(e)} 
                        >
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
                        gutterBottom>Views:<div>{numViews}</div></Typography>             
                    </Grid>
                    <Grid xs={3} item>
                    <Typography variant="h6" style={{fontWeight:600,textAlign:'center',
                        backgroundColor:'#20B2AA',color:'white',height:'100%',border:'2px solid white'}}
                        gutterBottom>Viewers:<div>{Object.keys(visits).length}</div></Typography>             
                    </Grid>
                    <Grid xs={3} item>
                    <Typography variant="h6" style={{fontWeight:600,textAlign:'center',
                        backgroundColor:'#20B2AA',color:'white',height:'100%',border:'2px solid white'}}
                        gutterBottom>Regions:<div>{Object.keys(noPlaces).length}</div></Typography>             
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
