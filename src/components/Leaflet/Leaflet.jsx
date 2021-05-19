import React, {useEffect} from 'react'
import { Grid, Card } from '@material-ui/core';
import useStyles from './styles';
import L from 'leaflet';
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet';
import './styles.css'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


const Leaflet = ({setSelected}) => {
    const classes = useStyles();
    const position = [51.505, -0.09]
    const center = [51.505, -0.09]
    useEffect(()=>{
        setSelected("Cluster Map");
    },[setSelected])
    
    return (
        <div className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container 
            justify="center" 
            direction="row"
            spacing={0}
            className={classes.grid}>
            <Grid xs={12} sm={10} md={8} lg={6} item={true}>
                <Card className={classes.card} >
                <MapContainer center={center} zoom={13}>
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>,
                </Card>
            </Grid>
            
        </Grid>              
        
        </div>
    )
}

export default Leaflet
