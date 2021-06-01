import React,{useEffect,useCallback} from 'react'
import {Marker,Tooltip} from 'react-leaflet';

const GetProperties = ({map,zoom,sc,bounds,data,FilterData,dispatch}) => {
    
    const getProperties = useCallback(({map}) => {
        const currZoom = map.getZoom();
        dispatch({type:'value',key:'zoom',value:currZoom})
        const ne = map.getBounds().getNorthEast();
        const [ne_lat,ne_lng] = [ne.lat,ne.lng]
        const sw = map.getBounds().getSouthWest();
        const [sw_lat,sw_lng] = [sw.lat,sw.lng]
        dispatch({type:'object',key:'bounds',
            value:{ne_lat,ne_lng,sw_lat,sw_lng}})
    },[dispatch])

    const handleMarkers = useCallback(() => {
        if (map){
            getProperties({map})
        }
        
        if (zoom >= sc && bounds){
            let filterData = data
            .filter(({latitude,longitude})=>{
                return longitude<bounds.ne_lng
                        && longitude>bounds.sw_lng
                        && latitude<bounds.ne_lat
                        && latitude>bounds.sw_lat})
            dispatch({type:'list',key:"FilterData",value:filterData})
            let markerList = filterData.map(({id,latitude,longitude,postcode})=>
                {return <Marker key={id}
                    position={[parseFloat(latitude),
                    parseFloat(longitude)]} >
                    <Tooltip>{postcode}</Tooltip>
                </Marker>})
            dispatch({type:'list',key:'markers',value:markerList})
            }
    },[map,bounds,data,zoom,sc,getProperties,dispatch])
    
    const handleChange = useCallback((e)=>{
        if (zoom >= sc && bounds){
            handleMarkers();
            var simpleFilterData = [];
            for (var i=0; i<FilterData.length; i++){
                var preout = FilterData[i].postcode.split(/([0-9]+)/)[0]
                if (simpleFilterData.indexOf(preout)<0){
                    simpleFilterData = simpleFilterData.concat(preout)
                }
            }
            if (simpleFilterData.length>0){
                dispatch({type:'list',key:'filterdata',
                    value:simpleFilterData})
                if (zoom === sc){
                    setTimeout(() => {
                        dispatch({type:'list',key:'filterdata',
                            value:simpleFilterData})
                    }, 300)
                }
            }
        }
    },[sc,bounds,zoom,FilterData,handleMarkers,dispatch]) 

    useEffect(()=>{
        map.on('load unload viewreset zoomend moveend',handleChange)
        return () => map.off('load unload viewreset zoomend moveend',handleChange)
    },[map,handleChange])

    useEffect(()=>{
        map.on('zoom move',handleMarkers)
        return () => map.off('zoom move',handleMarkers)
    },[map,handleMarkers])

    return null
}

export default GetProperties
