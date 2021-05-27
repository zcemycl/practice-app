import React,{useState,useEffect} from 'react'
import { Grid, Card } from '@material-ui/core';
import L from 'leaflet';
import {MapContainer,TileLayer} from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import MarkerClusterGroup from "react-leaflet-markercluster";
import { SearchField,GetProperties,Choro,FetchData } from './components';
import useStyles from './styles';
import './styles.css'
import 'leaflet/dist/leaflet.css'

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;
var geojson;
geojson = L.geoJson();

const ClusterMap = ({setSelected}) => {
    useEffect(()=>{
        setSelected("Cluster Map");
    },[setSelected])
    
    const classes = useStyles();
    const [data,setData] = useState([]);
    const [markers,setMarkers] = useState([]);
    const sc = 10
    const [geoCounties,setGeoCounties] = useState([]);
    const viewport = {center:[51.505, -0.09],zoom:7}
    const [filterdata,setFilterdata] = useState([]);
    const [map2,setMap2] = useState([]);
    const [map,setMap] = useState(null);
    const [zoom,setZoom] = useState(viewport.zoom);
    const [bounds,setBounds] = useState(null);
    const [region,setRegion] = useState([]);
    const [result,setResult] = useState(null); 
    const [FilterData,setFilterData] = useState([])
    console.log(result)
        
    FetchData({filterdata,setData,
        setGeoCounties,setRegion})

    useEffect(() => {
        let reg = region.map((r,index) => 
            {return <Choro key={index} map={map}
                zoom={zoom} setZoom={setZoom}
                geojson={geojson} data={r}/>})
        setMap2(reg);
    },[zoom,map,filterdata,region])


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
                {map?<GetProperties {...{map,zoom,sc,
                        bounds,data,FilterData,
                        setZoom,setBounds,
                        setFilterdata,setFilterData,
                        setMarkers}}/>
                    :null}

                <MapContainer center={viewport.center} 
                    zoom={viewport.zoom}
                    whenCreated={setMap}
                    doubleClickZoom={false}>
                    {map && 
                        <SearchField map={map} 
                            setResult={setResult}/>}
                    {zoom < sc && <Choro id={0} 
                        zoom={zoom} 
                        map={map}
                        geojson={geojson}
                        data={geoCounties}
                        setZoom={setZoom} />}

                    {zoom >= sc && region.length>0 && 
                        map2}

                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>


                    <MarkerClusterGroup>     
                    {zoom >= sc && bounds && markers.length > 0 && 
                        markers}
                    </MarkerClusterGroup>
                    
                </MapContainer>
                
                </Card>
            </Grid>
            
        </Grid>              
        
        </div>
    )
}

export default ClusterMap
