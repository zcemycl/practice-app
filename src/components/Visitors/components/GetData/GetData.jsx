import {useState,useEffect} from 'react'
import axios from 'axios';
import { csv } from "d3-fetch";
import { format } from 'react-string-format';

export const GetData = ({src,sheeturi,data,visits,setVisits,dispatch}) => {
    const [uniqueIP,setUniqueIP] = useState({})
    // const [count200,setCount200] = useState(0)
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
        var counts = {};
        for (var i = 0; i < data.length; i++) {
            if (counts[data[i].IP]===undefined){
                counts[data[i].IP] = {200:false,count:1}
            } else {
                counts[data[i].IP].count = counts[data[i].IP].count+1
            }
        }
        setUniqueIP(counts)
    },[data])

    useEffect(() => {
        const proto = 'https:'
        const uriform = proto+'//ipapi.co/{0}/json/'
        const keyIPs = Object.keys(uniqueIP)
        Promise.all(keyIPs.filter(item=>(item!=="")&&!uniqueIP[item][200])
            .map((item)=>
                fetch(format(uriform,item))
            )
        ).then((responses)=>{
            return Promise.all(responses.map((resp)=>{
                return resp.json()}))
        }).then((d)=>{
            var num = 0
            // var tmpUniqueIP = {...uniqueIP}
            // let ipProp;
            for (var i=0; i<d.length; i++){
                const {country_name,latitude,longitude} = d[i]
                const ip = keyIPs[i]
                if (ip && d[i].country_name && d[i].latitude && d[i].longitude){
                    setVisits(prev=>{return {...prev,[ip]:{place:country_name,
                        lat:latitude,lng:longitude}}})
                    num+=1
                    // ipProp = {...tmpUniqueIP[ip]}
                    // ipProp[200] = true
                    // tmpUniqueIP = {...tmpUniqueIP,[ip]:ipProp}
                }
            }
            // console.log(num,tmpUniqueIP)
            console.log(num)
            // setCount200(num)
            // setUniqueIP(tmpUniqueIP)
        })
    },[uniqueIP,setVisits
        // ,count200
    ])

    useEffect(()=>{
        const keyIPs = Object.keys(uniqueIP)
        dispatch({type:'value',key:'numUni',value:keyIPs.length})
    },[uniqueIP,dispatch])

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
