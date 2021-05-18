import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Card } from '@material-ui/core';
import { ComposableMap,
    Geographies, ZoomableGroup,
    Geography } from "react-simple-maps";
import useStyles from './styles';
import ReactTooltip from 'react-tooltip';

// import data from './uk-counties.json';

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/united-kingdom/uk-counties.json";

const Profile = () => {
    const [content,setContent] = useState("");
    const classes = useStyles();
    const handleClick = geo => () => {
        console.log(geo);
    }
    return (
        <div className={classes.content} >
            <div className={classes.toolbar}/>
            <Grid container 
                justify="center" 
                direction="row"
                spacing={0}
                className={classes.grid}>
                <Grid xs={12} sm={12} md={12} lg={12} item={true}>
                    <Card className={classes.card}>

                        <ComposableMap 
                            data-tip=""
                            projection="geoAzimuthalEqualArea"
                            projectionConfig={{
                                rotate: [3.0, -55.0, -11],
                                scale: 3000
                            }}
                            >
                            <ZoomableGroup zoom={1}
                                maxZoom={12}>
                            <Geographies geography={geoUrl}
                            >
                            {({ geographies }) =>
                                geographies.map(geo => (
                                    <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    style={{
                                        default: {
                                            fill:"darkseagreen",
                                            stroke:"#EAEAEC",
                                            strokeWidth:.25,
                                            outline:"none"
                                        },
                                        hover: {
                                            fill:"lightgreen",
                                            stroke:"grey",
                                            strokeWidth:.25,
                                            outline:"none"
                                        },
                                        pressed: {
                                            fill:"lightgreen",
                                            stroke:"grey",
                                            strokeWidth:.25,
                                            outline:"none"
                                        }
                                    }}
                                    onMouseEnter={()=>{
                                        // console.log(geo.properties)
                                        const {NAME_1,NAME_2,TYPE_2}=geo.properties;
                                        setContent(`${NAME_1}: ${NAME_2}: ${TYPE_2}`);
                                    }}
                                    onMouseLeave={()=>{
                                        setContent("")
                                    }}
                                    onClick={handleClick(geo.properties)}
                                    />
                                ))
                                }
                            </Geographies>
                            </ZoomableGroup>
                        </ComposableMap>
                        <ReactTooltip>{content}</ReactTooltip>
                    </Card>
                </Grid>
            </Grid>
            </div>
    )
}

export default withRouter(Profile);
