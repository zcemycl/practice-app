import React, {useEffect,useRef,useState} from 'react';
import { CardHeader } from '@material-ui/core';
import useStyles from './styles';
import {GridList,GridListTile,GridListTileBar,IconButton} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

const LeoLayout = () => {
    return (<div style={{ height:"100%", width:"100%" }}
    dangerouslySetInnerHTML={{__html:
    "<iframe style='height:100%; width:100%' src='https://zcemycl.github.io'/>"}}
     /> )
}

const tileData = [
    {key:0,img:"https://raw.githubusercontent.com/zcemycl/ProbabilisticPerspectiveMachineLearning/master/LIME/result.png",
     title:"LIME",author:"Leo"},
    {key:1,img:"https://raw.githubusercontent.com/zcemycl/Matlab-GAN/master/CycleGAN/CycleGANepoch1.jpg",title:"CycleGAN",author:"Leo"},
    {key:2,img:"https://raw.githubusercontent.com/zcemycl/Robotics/master/Perception/3D%20object%20projection/ar_result.png",title:"AR Homography",author:"Leo"},
    {key:3,img:"https://raw.githubusercontent.com/zcemycl/ProbabilisticPerspectiveMachineLearning/master/LIME/result.png",
     title:"LIME",author:"Leo"},
    {key:4,img:"https://raw.githubusercontent.com/zcemycl/Matlab-GAN/master/CycleGAN/CycleGANepoch1.jpg",title:"CycleGAN",author:"Leo"},
    {key:5,img:"https://raw.githubusercontent.com/zcemycl/Robotics/master/Perception/3D%20object%20projection/ar_result.png",title:"AR Homography",author:"Leo"},
    {key:6,img:"https://raw.githubusercontent.com/zcemycl/ProbabilisticPerspectiveMachineLearning/master/LIME/result.png",
     title:"LIME",author:"Leo"},
    {key:7,img:"https://raw.githubusercontent.com/zcemycl/Matlab-GAN/master/CycleGAN/CycleGANepoch1.jpg",title:"CycleGAN",author:"Leo"},
    {key:8,img:"https://raw.githubusercontent.com/zcemycl/Robotics/master/Perception/3D%20object%20projection/ar_result.png",title:"AR Homography",author:"Leo"}
];

const AILayout = ({targetRef,cols}) => {
    const classes =useStyles();
    
    return (
        <div className={classes.content} ref={targetRef}>
        <div className={classes.toolbar}/>
        <GridList cellHeight={320} spacing={20} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <CardHeader avatar={
                    <img alt="ailogo" src="https://raw.githubusercontent.com/zcemycl/practice-app/master/resources/ai.png"/>}
                title="Artificial Intelligence" titleTypographyProps={{variant:'h5',align:'left' }}/>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.key} cols={cols}>
            <img src={tile.img} alt={tile.title} style={{backgroundColor:"white"}}/>
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />

          </GridListTile>
        ))}
      </GridList>
        </div>
    )
}

const contentSwitch = ({nodeId,targetRef,cols}) => {
    switch (nodeId) {
        default:
        case 1:
            return LeoLayout();
        case 2:
            return AILayout({targetRef,cols});
    }
}

const ContentFarm = ({nodeId}) => {
    const targetRef = useRef();
    const [cols,setCols] = useState(1);
    const handleResize = (e) => {
        if (targetRef.current){
            const w = targetRef.current.offsetWidth;
            if (w<=420){
                setCols(2);
            } else if (w>420 && w<=800) {
                setCols(1);
            } else if (w>800){
                setCols(1);
            }
        }
    };
    useEffect(() => {
        handleResize()
    },[])

    useEffect(() => {
        window.addEventListener("resize",handleResize);
        return () => window.removeEventListener("resize",handleResize);
    },[])
    return (
        <>
            {contentSwitch({nodeId,targetRef,cols})}
        </>
    )
}

export default ContentFarm
