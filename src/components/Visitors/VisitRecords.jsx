import React,{useEffect,useRef,useReducer} from 'react'
import {Grid,Card} from '@material-ui/core';
import useStyles from './styles';
import {initState,reducer} from './store'
import {Numbar,Map,Bar,Doughnut,GetSize,
    GetData,Header} from './components'

const VisitRecords = ({setSelected}) => {
    const classes = useStyles();
    const cardRef = useRef(null);
    const [{numViews,w,h,minW,wW,sheeturi,numUni,
        data,noPlaces,topics,geo,tabs},
        dispatch] = useReducer(reducer,initState)
    useEffect(()=>{
        setSelected("Visitor Record");
    },[setSelected])

    GetSize({cardRef,dispatch})
    GetData({src:'csv',sheeturi,data,dispatch}) //csv or uri

    return (
        <div className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify="center" direction="row"
            spacing={0} className={classes.grid} ref={cardRef}>
            <Grid xs={12} sm={10} md={10} lg={10} item>
                <Card className={classes.card} style={{borderRadius:'15px',position:'relative'}}>       
                <Header {...{geo,tabs,dispatch}}/>
                <Grid xs={12} item>
                    <Grid container justify="center" 
                        direction="row" spacing={0}>
                    <Bar xs={12} sm={6} md={6} {...{w,h,wW,minW,noPlaces}}/>
                    <Doughnut xs={12} sm={6} md={6} {...{w,h,wW,minW,data,topics,dispatch}}/>
                    </Grid>
                </Grid>
                <Map xs={12} md={12} {...{h,geo,dispatch}}/> 
                <Numbar xs={12} md={12} {...{numViews,numUni,noPlaces}}/>
                </Card>
            </Grid>
            
        </Grid>
            
        </div>
    )
}

export default VisitRecords
