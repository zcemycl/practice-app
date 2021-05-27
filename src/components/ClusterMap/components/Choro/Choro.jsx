import React,{useMemo} from 'react'
import Choropleth from "react-leaflet-choropleth";

const Choro = ({zoom,map,geojson,data,setZoom}) => {
    const highlightFeature = (e) => {
        var layer = e.target;

        layer.setStyle({
            fillColor: "#F28F3B",
            weight: 2,
            opacity: 1,
            color: "white",
            dashArray: "3",
            fillOpacity: 0.05,
        });
    }

    const resetHighlight = (e) => {
        geojson.resetStyle(e.target)
    }

    const zoomCenter = (e) => {
        if (map){
            const tmp = zoom+2
            map.setView(e.latlng,tmp);
            setZoom(tmp);
        }
    }

    const style = useMemo(() => {
        return {
            fillColor: "#F28F3B",
            weight: 2,
            opacity: 1,
            color: "white",
            dashArray: "3",
            fillOpacity: 0.2,
          };
    },[])


    return (
        <Choropleth data={data} mode="e"
        // valueProperty={feature => feature.properties.value}
        // scale={["#b3cde0", "#011f4b"]}
        // steps={7}
            style={style}
            onEachFeature={(feature, layer) =>{
                const fp = feature.properties
                layer.bindTooltip(
                    fp.ENGTYPE_2
                        ?(fp.ENGTYPE_2==="London Borough"
                            ?fp.NAME_1+' : London : '+fp.NAME_2
                            :fp.NAME_1+' : '+fp.NAME_2)
                        :fp.name
                )
                layer.on({
                    mouseover:highlightFeature,
                    mouseout:resetHighlight,
                    dblclick:zoomCenter,

                })
            }}
        />   
    )
}

export default Choro
