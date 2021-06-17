import React,{useState,useEffect,useRef} from 'react'
import { Grid, Card } from '@material-ui/core';
import axios from 'axios';
import { csv } from "d3-fetch";
import useStyles from './styles';
import Plot from 'react-plotly.js';

const VisitRecords = ({setSelected}) => {
    const classes = useStyles();
    const [data,setData] = useState([])
    const [numViews,setNumViews] = useState(0);
    const [visits,setVisits] = useState({});
    const [noPlaces,setNoPlaces] = useState({});
    const cardRef = useRef(null);
    const [w,setW] = useState(640);
    const sheeturi = 'https://sheet.best/api/sheets/82c23d79-9535-4ef8-9970-f59acfed6f0a'
    useEffect(()=>{
        setSelected("Visitor Record");
    },[setSelected])

    useEffect(()=>{
        if (cardRef){
            setW(cardRef.current.clientWidth)
        }
    },[])

    useEffect(() => {
        csv("data/Visitors-Test.csv").then(d => {
            console.log(d,d.length)
            setData(d)
            setNumViews(d.length)
            for (let i = 0; i < d.length; i++){
                axios.get('http://www.geoplugin.net/json.gp?ip='+d[i].IP)
                    .then(res=>{
                        setVisits(prev=>{return {...prev,[d[i].IP]:res.data.geoplugin_countryName}})
                        console.log(res.data)
                    })
            }
            console.log(visits)

        });
    },[]);

    useEffect(() => {
        const Unique = Object.keys(visits)
        const Countries = Object.values(visits)
        var counts = {};
        for (var i = 0; i < Countries.length; i++) {
            counts[Countries[i]] = 1 + (counts[Countries[i]] || 0);
        }
        setNoPlaces(counts)
    },[visits])

    

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
            <Grid xs={12} sm={10} md={10} lg={10} item={true}>
                <Card className={classes.card} ref={cardRef}>                    
                <Plot
                    data={[
                    {type:'bar',x:Object.keys(noPlaces), 
                        y:Object.values(noPlaces)},
                    ]}
                    layout={ {width: w, height: 480, title: 'Unique Visitors Regions'} }
                />
                </Card>
                
            </Grid>
        </Grid>
            
        </div>
    )
}

export default VisitRecords
