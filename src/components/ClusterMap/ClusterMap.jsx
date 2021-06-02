import React,{useState,useEffect,useReducer} from 'react'
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
import {initState,reducer} from './store'

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
    const [{sc,map,viewport,zoom,bounds,
        data,markers,geoCounties,
        region,filterdata,map2,FilterData},
        dispatch] = useReducer(reducer,initState)
    const [result,setResult] = useState(null); 
        
    FetchData({filterdata,dispatch})

    useEffect(() => {
        let reg = region.map((r,index) => 
            {return <Choro key={index} 
            {...{zoom,map,geojson,data:r,dispatch}}/> })
        dispatch({type:'list',key:'map2',value:reg});
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
            {map && <GetProperties {...{map,zoom,sc,
                bounds,data,FilterData,dispatch}}/>}

            <MapContainer center={viewport.center} zoom={viewport.zoom}
                whenCreated={e=>dispatch({type:'object',
                key:'map',value:e})} doubleClickZoom={false}>
                {map && 
                    <SearchField {...{map,result,setResult}}/>}
                {zoom < sc && <Choro id={0} {...{zoom,map,
                    geojson,data:geoCounties,dispatch}}/>}

                {zoom >= sc && region.length>0 && map2}

                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                <MarkerClusterGroup>     
                {zoom >= sc && bounds && markers.length > 0 && markers}
                </MarkerClusterGroup>
            </MapContainer> 
            
            </Card>
        </Grid>
        </Grid>              
        </div>
    )
}

export default ClusterMap
