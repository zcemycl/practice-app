import {useEffect} from 'react'
import axios from 'axios';
import publicIp from 'public-ip'
import {useSelector} from 'react-redux';
import {db} from '../lib/init-firebase'
import {ref,set,push} from "firebase/database";

const sheeturi = 'https://sheet.best/api/sheets/82c23d79-9535-4ef8-9970-f59acfed6f0a'

export const Visitors = () => {
    const selected = useSelector(state=>state.selected)

    useEffect(() => {
        const getVisitorInfo = async () => {    
            let currentTimestamp = Date.now()
            let date = new Intl.DateTimeFormat('en-US',
                {year:'numeric',month:'2-digit',day:'2-digit',
                hour:'2-digit',minute:'2-digit',second:'2-digit'})
                .format(currentTimestamp)
            try {
                if (window.location.hostname !== "localhost"){
                    const ip = await publicIp.v4({fallbackUrls:["https://ifconfig.co/ip"]});
                    // console.log(ip,date)
                    fetch("https://ipapi.co/"+ip+"/json/")
                    .then((response) => response.json())
                    .then((data) => {
                        const {ip,country_name,latitude,longitude} = data;
                        const ignoreIP = process.env.REACT_APP_IGNORE_IP.split(",")
                        if (selected!=="" && ip && ignoreIP.indexOf(ip)<0 ){
                            const objt = {IP:ip,Topic:selected,
                                Timestamp:date,Country:country_name,
                                Lat:latitude,Lng:longitude};
                            
                            axios.post(sheeturi,objt)
                            .then((response) => {
                                // console.log(response);
                            })
                            .catch((error)=>{
                                if (error.response.status===402 && error.response.statusText==="Payment Required"){
                                    // console.log(error.response.statusText);    
                                }
                            })
                            .finally();
                            const postListRef = push(ref(db,'visitors'));
                            set(postListRef,objt);                                
                            
                        }

                    })
                    .catch(e=>{})
                }
            } catch (error) {

            }
            

        }
        getVisitorInfo();
        }, [selected]);

}
