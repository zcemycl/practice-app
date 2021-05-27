import {useEffect,useMemo,useCallback} from 'react'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {GeoSearchControl,OpenStreetMapProvider} from 'leaflet-geosearch';
import 'leaflet-geosearch/dist/geosearch.css';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

const SearchField = ({map,setResult}) => {
    
    const provider = useMemo(() => 
        new OpenStreetMapProvider(),[])

    const search = useMemo(() => 
        new GeoSearchControl({
            style: 'bar', marker: DefaultIcon,
            provider: provider,
        })
    ,[provider])

    useEffect(() => {
        map.addControl(search);
        return () => map.removeControl(search);
      }, [map,search])

    const handleKeyUp = useCallback(async (event) => {
        event.preventDefault();
        const form = document.querySelector('form');
        const input = form.querySelector('input[type="text"]');
        if (event.key === "Enter"){
            console.log(input.value)
            const results = await provider.search(
                    {query:input.value}) 
            console.log(results)
            console.log('Enter!!')
            setResult(results)
            // handleChange();
        } 
    },[provider,setResult])

    useEffect(() => {
        window.addEventListener('keyup',handleKeyUp);
        return () => window.removeEventListener('keyup',handleKeyUp)
    },[handleKeyUp])

    return null;
}

export default SearchField
