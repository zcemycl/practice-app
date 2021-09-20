import React,{useEffect} from 'react'
import {Grid,Typography} from '@material-ui/core';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {MapContainer,TileLayer,Marker,Tooltip} from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";
import 'leaflet/dist/leaflet.css'
import '../../styles.css'

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({xs,sm,md,lg,h,geo,dispatch}) => {

    useEffect(() => {
        const waterMarks = document.getElementsByClassName('leaflet-control-attribution')
        for (let i =0; i < waterMarks.length; i++) {
            document.getElementsByClassName('leaflet-control-attribution')[i].style.display = 'none';
        }
    },[])

    return (
        <>
        <Grid xs={xs} sm={sm} md={md} lg={lg} item >
            <Typography variant="h6" style={{textAlign:'center'}}
                gutterBottom>Visitor Internet Service Providers</Typography>  
            <MapContainer center={[51.5074, 0.1278]} zoom={1} 
                whenCreated={e=>dispatch({type:'object',key:'map',value:e})}
                style={{height:h*0.4}}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

            <MarkerClusterGroup> 
            {Object.values(geo)
                .filter((item)=>item.Lat && item.Lng && 
                    !isNaN(item.Lat) && !isNaN(item.Lng))
                .map(({Lat,Lng},index)=>(<Marker key={index}
                position={[parseFloat(Lat),
                parseFloat(Lng)]} 
                eventHandlers={{
                    click: (e) => console.log(Lat,Lng),
                }}>
                <Tooltip>{Lat},{Lng}</Tooltip>
                </Marker>))}
            </MarkerClusterGroup>
            
            </MapContainer>
        </Grid>
        </>
    )
}

export default Map
