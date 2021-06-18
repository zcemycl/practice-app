import {useEffect} from 'react'
import axios from 'axios';
import { csv } from "d3-fetch";

export const GetData = ({src,sheeturi,data,visits,setVisits,dispatch}) => {

    useEffect(() => {
        if (src === 'uri'){
            axios.get(sheeturi)
            .then(res=>{
                dispatch({type:'list',key:'data',value:res.data})
                dispatch({type:'value',key:'numViews',value:res.data.length})
            })
        } else if (src === 'csv'){
            csv("data/Visitors-Test.csv").then(d => {
                dispatch({type:'list',key:'data',value:d})
                dispatch({type:'value',key:'numViews',value:d.length})
            });
        }
        
    },[sheeturi,src,dispatch])

    useEffect(() => {
        for (let i = 0; i < data.length; i++){
            axios.get('https://ipapi.co/'+data[i].IP+'/json/')
                .then(res=>{
                    const {country_name,latitude,longitude} = res.data
                    setVisits(prev=>{return {...prev,[data[i].IP]:{place:country_name,
                        lat:latitude,lng:longitude}}})
                })}
    },[data,setVisits])

    useEffect(() => {
        const Countries = Object.values(visits)
        var counts = {};
        for (var i = 0; i < Countries.length; i++) {
            counts[Countries[i].place] = 1 + (counts[Countries[i].place] || 0);
        }
        dispatch({type:'object',key:'noPlaces',value:counts})
        dispatch({type:'list',key:'geo',value:Countries})
    },[visits,dispatch])

}
