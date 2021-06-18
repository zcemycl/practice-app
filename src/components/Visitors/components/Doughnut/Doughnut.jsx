import React,{useState,useEffect} from 'react'
import {Grid,Typography} from '@material-ui/core';
import Plot from 'react-plotly.js';

const conf = {displayModeBar: false}

const Doughnut = ({xs,sm,md,lg,w,h,wW,minW,data,topics,dispatch}) => {
    const [L,setL] = useState(0)
    const [keys,setKeys] = useState([]);
    const [vals,setVals] = useState([]);
    const [colors,setColors] = useState([]);
    const lout2 = {width:wW>minW?w*0.45:w,showlegend: true,
        height: wW>minW?h*0.6:h*0.2,marker:{color:'#3CB371'},
        margin: {l: 10,r: wW>minW?50:0,b: 0,t: 0,pad: 0},
        legend: {orientation: "v",x:0,xanchor:'right',bgcolor:'transparent'}}

    useEffect(() => {
        var counts2 = {};
        for (var i = 0; i < data.length; i++) {
            if (data[i].Topic !== ""){
                counts2[data[i].Topic] = 1 + (counts2[data[i].Topic] || 0);
            }
        }
        dispatch({type:'object',key:'topics',value:counts2})
        const keys = Object.keys(counts2)
        const vals = Object.values(counts2)
        setKeys(keys)
        setVals(vals)
        setL(keys.length)
    },[data,dispatch])

    useEffect(() => {
        var c = []
        for (var i = 0; i < keys.length; i++) {
            c = [...c,`rgb(0,${255/L*(i)},255)`]
        }
        setColors(c)
    },[keys,L])

    return (
        <>
        <Grid xs={xs} sm={sm} md={md} lg={lg} item>           
            <Typography variant="h6" style={{textAlign:'center'}}
                gutterBottom>Topics Views</Typography> 
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

export default Doughnut
