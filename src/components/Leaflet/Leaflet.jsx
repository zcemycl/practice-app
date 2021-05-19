import React, {useState,useEffect} from 'react'
import { Grid, Card } from '@material-ui/core';
import useStyles from './styles';
import L from 'leaflet';
import { MapContainer,TileLayer,Marker,Popup,GeoJSON } from 'react-leaflet';
import './styles.css'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { csv } from "d3-fetch";
import MarkerClusterGroup from "react-leaflet-markercluster";
import geojsonLondon from './England_London.json'

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


const Leaflet = ({setSelected}) => {
    const classes = useStyles();
    const center = [51.505, -0.09]
    const [data,setData] = useState([]);
    useEffect(()=>{
        setSelected("Cluster Map");
    },[setSelected])
    
    useEffect(() => {
        csv("./data/postcode-outcodes.csv").then(outcodes => {
          setData(outcodes);
        });
    }, []);

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
                <MapContainer center={center} zoom={13}>
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <GeoJSON key="my-geojson" data={geojsonLondon}
                        style={{fillColor:'blue',
                                fillOpacity: 0.1}}/>
                    <MarkerClusterGroup>
                    {
                    data.map(({id,latitude,longitude,postcode})=>
                        (<Marker key={id}
                            position={[parseFloat(latitude),
                            parseFloat(longitude)]} >
                            <Popup>
                            {postcode}
                            </Popup>
                        </Marker>)
                    )
                    }
                    </MarkerClusterGroup>
                    
                </MapContainer>
                </Card>
            </Grid>
            
        </Grid>              
        
        </div>
    )
}

export default Leaflet
