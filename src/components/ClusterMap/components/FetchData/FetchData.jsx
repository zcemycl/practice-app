import {useEffect} from 'react'
import { csv } from "d3-fetch";
import { format } from 'react-string-format';

export const FetchData = ({filterdata,setData,
            setGeoCounties,setRegion}) => {

    useEffect(() => {
        csv("data/postcode-outcodes.csv").then(outcodes => {
          setData(outcodes);
        });
    },[setData]);

    useEffect(() => {
        fetch('data/ukcounties.json').then((res) => res.json())
            .then((json)=>{
                setGeoCounties(json);
            });
    },[setGeoCounties]);

    useEffect(() => {
        const uriform = 'data/json/{0}.json'
        setRegion([])
        Promise.all(filterdata.map((item)=>
        fetch(format(uriform,item)))
        ).then((responses)=>{
            return Promise.all(responses.map((resp)=>{
                return resp.json()}))
        }).then((d)=>{
            if (d.length>0){
                setRegion(d);
            }
            
        })
    },[filterdata,setRegion])

}

