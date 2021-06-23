import React,{useState,useEffect} from 'react'
import {Grid,Typography} from '@material-ui/core';
import Plot from 'react-plotly.js';

const conf = {displayModeBar: false}

const Doughnut2 = ({xs,sm,md,lg,w,h,wW,minW,data}) => {
    const keys = Object.keys(data.topics);
    const vals = Object.values(data.topics);
    const L = keys.length;
    const [colors,setColors] = useState([]);
    const lout2 = {width:wW>minW?w*0.4:0.4*w,showlegend: true,
        height: wW>minW?h*0.3:h*0.2,marker:{color:'#3CB371'},
        margin: {l: 10,r: wW>minW?50:0,b: 0,t: 0,pad: 0},
        legend: {orientation: "v",x:0,xanchor:'right',bgcolor:'transparent'}}

    useEffect(() => {
        var c = []
        for (var i = 0; i < L; i++) {
            c = [...c,`rgba(0,${255/(L-1)*(i)},255,1)`]
        }
        setColors(c)
    },[L])

    return (
        <>
        <Grid xs={xs} sm={sm} md={md} lg={lg} item>           
            <Typography variant="h6" style={{textAlign:'center'}}
                gutterBottom>What were viewed?</Typography> 
            <Plot data={[{type:'pie',values:vals, 
                labels:keys,direction:'clockwise',
                marker: {
                    colors: colors
                },
                sort:false,textposition:'inside',texttemplate:'%{percent:%f}',
                textinfo:'percentage',hoverinfo:'label+value+percent',
                hole:0.5}]} layout={lout2} config={conf}/>
        </Grid>   
        </>
    )
}

export default Doughnut2
