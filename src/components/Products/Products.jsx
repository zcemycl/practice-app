import React, {useEffect} from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import {assign} from '../../actions';
import {useDispatch} from 'react-redux';
import useStyles from './styles';

const Products = ({products}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(assign("Shop"));
    },[dispatch])
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.length>0 && products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products