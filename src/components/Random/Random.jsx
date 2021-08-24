import React, {useEffect} from 'react';
import useStyles from './styles';
import {Grid} from '@material-ui/core';
import {SpringCard} from './components'
import data from "./data.json";
import {assign} from '../../actions';
import {useDispatch} from 'react-redux';

const Random = () => {
    const classes = useStyles();
    // const num = data.length;
    const num = 3;
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(assign("Gallery"));
    },[dispatch])
    
    return (
        <div className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container 
                justify="center" 
                direction="row"
                spacing={1}
                className={classes.grid}>
        
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Grid container spacing={3} direction="column">
                    {data.filter((d,index)=>(index<num)).map(({src,title,content},index)=>(
                        <SpringCard key={index} {...{src,title,content,reverse:-1}}/>
                    ))}
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Grid container spacing={3} direction="column">
                    {data.filter((d,index)=>(index>=num)).map(({src,title,content},index)=>(
                        <SpringCard key={index} {...{src,title,content,reverse:1}}/>
                    ))}
                    </Grid>
                </Grid>

            </Grid>
        
            
            
        </div>
    )
}

export default Random
