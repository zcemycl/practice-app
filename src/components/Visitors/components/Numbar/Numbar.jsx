import React,{useState,useEffect} from 'react'
import {Grid,Typography} from '@material-ui/core';

const Numbar = ({xs,sm,md,lg,numViews,numUni,noPlaces,data}) => {
    const [topics,setTopics] = useState([])
    useEffect(()=>{
        let tmpTopics = []
        for (let i=0; i<data.length; i++){
            if (tmpTopics.indexOf(data[i].Topic) === -1) {
                if (data[i].Topic !== "")
                    tmpTopics = [...tmpTopics,data[i].Topic]
            }
        }
        setTopics(tmpTopics);
    },[data])

    return (
        <>
        <Grid xs={xs} sm={sm} md={md} lg={lg} item>
        <Grid container 
            justify="center" 
            direction="row"
            alignItems="stretch"
            spacing={0}>
            <Grid xs={3} item >
            <Typography variant="h6" style={{fontWeight:600,textAlign:'center',
                backgroundColor:'#20B2AA',color:'white',height:'100%',border:'2px solid white'}}
                gutterBottom>Views<div>{numViews}</div></Typography>             
            </Grid>
            <Grid xs={3} item>
            <Typography variant="h6" style={{fontWeight:600,textAlign:'center',
                backgroundColor:'#20B2AA',color:'white',height:'100%',border:'2px solid white'}}
                gutterBottom>Viewers<div>{numUni}</div></Typography>             
            </Grid>
            <Grid xs={3} item>
            <Typography variant="h6" style={{fontWeight:600,textAlign:'center',
                backgroundColor:'#20B2AA',color:'white',height:'100%',border:'2px solid white'}}
                gutterBottom>Regions<div>{Object.keys(noPlaces).length}</div></Typography>             
            </Grid>
            <Grid xs={3} item>
            <Typography variant="h6" style={{fontWeight:600,textAlign:'center',
                backgroundColor:'#20B2AA',color:'white',height:'100%',border:'2px solid white'}}
                gutterBottom>Pages<div>{topics.length}</div></Typography>             
            </Grid>
        </Grid>
        </Grid>   
        </>
    )
}

export default Numbar
