import {useEffect} from 'react'
import axios from 'axios';
import publicIp from 'public-ip'

const sheeturi = 'https://sheet.best/api/sheets/82c23d79-9535-4ef8-9970-f59acfed6f0a'

export const Visitors = ({selected}) => {

    useEffect(() => {
        const getVisitorInfo = async () => {    
            let currentTimestamp = Date.now()
            let date = new Intl.DateTimeFormat('en-US',
                {year:'numeric',month:'2-digit',day:'2-digit',
                hour:'2-digit',minute:'2-digit',second:'2-digit'})
                .format(currentTimestamp)
            const ip = await publicIp.v4({fallbackUrls:["https://ifconfig.co/ip"]});
            console.log(ip,date)
            fetch("https://ipapi.co/"+ip+"/json/")
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    if (selected!=="" ){
                        const {ip,country_name,latitude,longitude} = data;
                        const objt = {IP:ip,Topic:selected,
                            Timestamp:date,Country:country_name,
                            Lat:latitude,Lng:longitude};
                        axios.post(sheeturi,objt)
                            .then((response) => {
                                console.log(response);
                            });
                    }
                })
                .catch(e=>{})

        }
        getVisitorInfo();
        }, [selected]);

}
