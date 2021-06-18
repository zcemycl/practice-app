import React,{useState,useEffect,useRef,useReducer} from 'react'
import {Grid,Card,Typography} from '@material-ui/core';
import useStyles from './styles';
import {initState,reducer} from './store'
import {Numbar,Map,Bar,Doughnut,GetSize,GetData} from './components'

const VisitRecords = ({setSelected}) => {
    const classes = useStyles();
    const [visits,setVisits] = useState({});
    const cardRef = useRef(null);
    const [{numViews,w,h,minW,wW,sheeturi,
        data,noPlaces,topics,geo},
        dispatch] = useReducer(reducer,initState)
    
    useEffect(()=>{
        setSelected("Visitor Record");
    },[setSelected])

    GetSize({cardRef,dispatch})
    GetData({src:'uri',sheeturi,data,visits,setVisits,dispatch}) //csv or uri

    return (
        <div className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container 
            justify="center" 
            direction="row"
            spacing={0}
            className={classes.grid} ref={cardRef}>
            <Grid xs={12} sm={10} md={10} lg={10} item>
                <Card className={classes.card} style={{borderRadius:'15px',position:'relative'}}>       
                <Typography variant="h6" style={{fontWeight:600,textAlign:'left',padding:'10px',
                    backgroundColor:'#7B68EE',color:'white',fontFamily:'sans-serif'}}
                    gutterBottom>Visitors Statistics</Typography> 
                <Grid xs={12} item>
                    <Grid container justify="center" 
                        direction="row" spacing={0}>
                    <Bar xs={12} sm={6} md={6} {...{w,h,wW,minW,noPlaces}}/>
                    <Doughnut xs={12} sm={6} md={6} {...{w,h,wW,minW,data,topics,dispatch}}/>
                    </Grid>
                </Grid>
                
                <Map xs={12} md={12} {...{h,geo,dispatch}}/>
                
                <Numbar xs={12} md={12} {...{numViews,visits,noPlaces}}/>
                

                </Card>
            </Grid>
            
        </Grid>
            
        </div>
    )
}

export default VisitRecords
