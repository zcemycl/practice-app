import React,{useEffect,useRef,useReducer} from 'react'
import {Grid,Card} from '@material-ui/core';
import useStyles from './styles';
import {initState,reducer} from './store'
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Numbar,Map,Bar,Doughnut,GetSize,
    GetData,Header,Doughnut2} from './components'

const VisitRecords = ({setSelected}) => {
    const classes = useStyles();
    const cardRef = useRef(null);
    const [{numViews,w,h,minW,wW,sheeturi,numUni,active,map,
        data,noPlaces,topics,geo,tabs,opts,displayData},
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
                <Header {...{data,map,opts,geo,tabs,active,displayData,dispatch}}/>
                <Map xs={12} md={12} {...{h,geo,dispatch}}/> 
                {active !== "" && displayData[active] && <Grid xs={12} item>
                    <Grid container justify="center" 
                        direction="row" spacing={0}>
                        
                        <Grid item xs={12} style={{textAlign:'left'}}>
                            <Grid container justify="center" 
                                direction="row" spacing={0}>
                                <Grid item xs={6}>
                            <div style={{display:'block',overflow:'auto',width:'100%'}}>
                                <Table striped bordered hover size="sm" variant="dark">
                                <tbody>
                                    <tr>
                                        <td>IP Address</td>
                                        <td>{displayData[active].IP}</td>
                                    </tr>
                                    <tr>
                                        <td>LatLng</td>
                                        <td>{displayData[active].Lat},{displayData[active].Lng}</td>
                                    </tr>
                                    <tr>
                                        <td>Region</td>
                                        <td>{displayData[active].country}</td>
                                    </tr>
                                    <tr>
                                        <td>Latest Visit Date</td>
                                        <td>{displayData[active].lastdate}</td>
                                    </tr>
                                </tbody>
                                </Table>
                            </div>
                                </Grid>
                            
                            <Doughnut2 xs={6} {...{w,h,wW,minW,
                                data:displayData[active],dispatch}}/>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Grid>}
                <Grid xs={12} item>
                    <Grid container justify="center" 
                        direction="row" spacing={0}>
                    <Bar xs={12} sm={6} md={6} {...{w,h,wW,minW,noPlaces}}/>
                    <Doughnut xs={12} sm={6} md={6} {...{w,h,wW,minW,data,topics,dispatch}}/>
                    </Grid>
                </Grid>
                <Numbar xs={12} md={12} {...{numViews,numUni,noPlaces}}/>
                </Card>
            </Grid>
            
        </Grid>
            
        </div>
    )
}

export default VisitRecords
