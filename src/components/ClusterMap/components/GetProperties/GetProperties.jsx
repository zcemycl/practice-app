import React,{useEffect,useCallback} from 'react'
import {Marker,Tooltip} from 'react-leaflet';

const GetProperties = ({map,zoom,sc,bounds,data,FilterData,
        setZoom,setBounds,setFilterdata,setFilterData,
        setMarkers}) => {
    
    const getProperties = useCallback(({map}) => {
        const currZoom = map.getZoom();
        setZoom(currZoom);
        const ne = map.getBounds().getNorthEast();
        const [ne_lat,ne_lng] = [ne.lat,ne.lng]
        const sw = map.getBounds().getSouthWest();
        const [sw_lat,sw_lng] = [sw.lat,sw.lng]
        setBounds({ne_lat,ne_lng,sw_lat,sw_lng})
    },[setZoom,setBounds])

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
            setFilterData(filterData)
            let markerList = filterData.map(({id,latitude,longitude,postcode})=>
                {return <Marker key={id}
                    position={[parseFloat(latitude),
                    parseFloat(longitude)]} >
                    <Tooltip>{postcode}</Tooltip>
                </Marker>})
            setMarkers(markerList)
            }
    },[map,bounds,data,zoom,sc,getProperties,setFilterData,setMarkers])
    
    const handleChange = useCallback(()=>{
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
                setFilterdata(simpleFilterData)
            }
        }
    },[sc,bounds,zoom,FilterData,handleMarkers,setFilterdata]) 

    useEffect(()=>{
        map.on('zoomend moveend viewreset',handleChange)
        return () => map.off('zoomend moveend viewreset',handleChange)
    },[map,handleChange])

    useEffect(()=>{
        map.on('zoom move',handleMarkers)
        return () => map.off('zoom move',handleMarkers)
    },[map,handleMarkers])

    return null
}

export default GetProperties
