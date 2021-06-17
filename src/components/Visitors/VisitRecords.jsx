import React,{useState,useEffect} from 'react'
import { Grid, Card } from '@material-ui/core';
import axios from 'axios';
import { csv } from "d3-fetch";
import useStyles from './styles';

const VisitRecords = ({setSelected}) => {
    const classes = useStyles();
    const [data,setData] = useState([])
    const [numViews,setNumViews] = useState(0);
    const sheeturi = 'https://sheet.best/api/sheets/82c23d79-9535-4ef8-9970-f59acfed6f0a'
    useEffect(()=>{
        setSelected("Visitor Record");
    },[setSelected])

    useEffect(() => {
        csv("data/Visitors-Test.csv").then(d => {
            console.log(d,d.length)
            setData(d)
            setNumViews(d.length)
            for (let i = 0; i < d.length; i++){
                axios.get('http://www.geoplugin.net/json.gp?ip='+d[i].IP)
                    .then(res=>{
                        console.log(d[i].IP,res.data.geoplugin_countryName)
                    })
            }

        });
    },[]);

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
                <Card className={classes.card}>                    
                
                </Card>
                
            </Grid>
        </Grid>
            
        </div>
    )
}

export default VisitRecords
