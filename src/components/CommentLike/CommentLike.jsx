import React,{useEffect,useState} from 'react';
import { Grid,Card } from '@material-ui/core';
import { Comment,Header } from 'semantic-ui-react'
import { Like,Comments } from './components';
import axios from 'axios';
import './styles.css';
import useStyles from './styles';
import {assign} from '../../actions';
import {useDispatch} from 'react-redux';

const CommentLike = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [data,setData] = useState([])
    const sheeturi = 'https://sheet.best/api/sheets/82c23d79-9535-4ef8-9970-f59acfed6f0a'

    useEffect(()=>{
      dispatch(assign("Like Comment"));
    },[dispatch])

    useEffect(() => {
        axios.get(sheeturi)
          .then(res=>{
            // console.log(res.data)
            setData(res.data)
          }).catch((error)=>{
          })
          .finally()
    },[])

    return (
      <div className={classes.content}>
          <div className={classes.toolbar}/>
          <Grid container 
              justify="center" 
              direction="row"
              spacing={0}>
              <Grid xs={12} sm={10} md={8} lg={6} item={true}>
                  <Card className={classes.card}>
                    <Like/>
                  </Card>
                  <div className={classes.content} 
                    style={{textAlign:'left'}}>
                  <Comment.Group>
                    <Header as='h3' dividing>
                      Comments
                    </Header>

                    <Comments data={data} setData={setData}/>
                    
                  </Comment.Group>
                  </div>
              </Grid>
          </Grid>
              
        </div>
    )
}

export default CommentLike
