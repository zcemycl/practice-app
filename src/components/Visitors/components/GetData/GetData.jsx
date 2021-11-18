import {useState,useEffect} from 'react'
import axios from 'axios';
import { csv } from "d3-fetch";

export const GetData = ({src,sheeturi,data,dispatch}) => {
    const [uniqueIP,setUniqueIP] = useState({})
    useEffect(() => {
        if (src === 'uri'){
            axios.get(sheeturi, { crossdomain: true })
                .then(res=>{
                    // console.log('res data',res.data)
                    dispatch({type:'list',key:'data',value:res.data})
                    dispatch({type:'value',key:'numViews',value:res.data.length})
                })
                .catch((error)=>{
                })
                .finally(()=>{
                    csv("data/Visitors-Test1.csv").then(d => {
                        dispatch({type:'list',key:'data',value:d})
                        dispatch({type:'value',key:'numViews',value:d.length})
                    }); 
                })

            
        } else if (src === 'csv'){
            csv("data/Visitors-Test1.csv").then(d => {
                dispatch({type:'list',key:'data',value:d})
                dispatch({type:'value',key:'numViews',value:d.length})
            });
        }
    },[sheeturi,src,dispatch])

    useEffect(() => {
        var counts = {};
        for (var i = 0; i < data.length; i++) {
            if (counts[data[i].IP]===undefined){
                counts[data[i].IP] = {IP:data[i].IP,Country:data[i].Country,count:1,
                    Lat:data[i].Lat,Lng:data[i].Lng}
            } else {
                counts[data[i].IP].count = counts[data[i].IP].count+1
            }
        }
        setUniqueIP(counts)
        dispatch({type:'list',key:'geo',value:counts})

        counts = {};
        for (i = 0; i < data.length; i++) {
            counts[data[i].Country] = 1 + (counts[data[i].Country] || 0)
        }
        dispatch({type:'object',key:'noPlaces',value:counts})
    },[data,dispatch])

    useEffect(()=>{
        const keyIPs = Object.keys(uniqueIP)
        dispatch({type:'value',key:'numUni',value:keyIPs.length})
    },[uniqueIP,dispatch])

}
