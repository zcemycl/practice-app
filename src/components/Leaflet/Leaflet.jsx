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
import ReactLeafletKml from 'react-leaflet-kml';
import Choropleth from "react-leaflet-choropleth";
import country_geo from './country.json';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const kmlUrl = 'https://raw.githubusercontent.com/andreafalzetti/uk-counties-list/master/uk-areas/kml/England/England_East_of_England.kml'

const Leaflet = ({setSelected}) => {
    const classes = useStyles();
    const center = [51.505, -0.09]
    const [data,setData] = useState([]);
    const [Kml,setKml] = useState(null);

    const style = {
        fillColor: "#F28F3B",
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.5
      };

    useEffect(()=>{
        setSelected("Cluster Map");
    },[setSelected])
    
    useEffect(() => {
        csv("./data/postcode-outcodes.csv").then(outcodes => {
          setData(outcodes);
        });
    },[]);

    useEffect(() => {
        fetch(kmlUrl)
            .then((response)=> response.text())
            .then((kmlText)=>{
                const parser = new DOMParser();
                const doc = parser.parseFromString(kmlText,'text/html');
                setKml(doc);
            })
    },[]);

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
                <MapContainer center={center} zoom={9}>
                <Choropleth
                    data={{ type: "FeatureCollection", features: country_geo.features }}
                    valueProperty={feature => feature.properties.value}
                    scale={["#b3cde0", "#011f4b"]}
                    steps={7}
                    mode="e"
                    style={style}
                    onEachFeature={(feature, layer) =>
                        layer.bindPopup(
                        feature.properties.name + " " + feature.properties.type
                        )
                    }
                    //onEachFeature={this.onEachFeature}
                    />
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <GeoJSON key="my-geojson" data={geojsonLondon}
                        style={{fillColor:'blue',
                                fillOpacity: 0.1}}/>
                    {Kml && <ReactLeafletKml key="my-kml" kml={Kml} />}
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
