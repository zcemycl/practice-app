import {useEffect} from 'react'
import { csv } from "d3-fetch";
import { format } from 'react-string-format';

export const FetchData = ({filterdata,dispatch}) => {

    useEffect(() => {
        csv("data/postcode-outcodes.csv").then(outcodes => {
            dispatch({type:'list',key:'data',value:outcodes})
        });
    },[dispatch]);

    useEffect(() => {
        fetch('data/ukcounties.json').then((res) => res.json())
            .then((json)=>{
                dispatch({type:'list',key:'geoCounties',value:json})
            });
    },[dispatch]);

    useEffect(() => {
        const uriform = 'data/json/{0}.json'
        dispatch({type:'list',key:'region',value:[]})
        Promise.all(filterdata.map((item)=>
        fetch(format(uriform,item)))
        ).then((responses)=>{
            return Promise.all(responses.map((resp)=>{
                return resp.json()}))
        }).then((d)=>{
            if (d.length>0){
                dispatch({type:'list',key:'region',value:d})
            }
            
        })
    },[filterdata,dispatch])

}

