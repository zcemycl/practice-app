import React, { useRef,useState } from 'react';
import useStyles from './styles';
import { Grid,Card } from '@material-ui/core';
import { TextInfo,Board,FileManage,FileDownload,LabelSelect,DelRename,ModeSelect } from '.';
import placeholder from './kitchen1.jpg';

const Annotate = () => {
    const classes = useStyles();
    const targetRef = useRef();
    const [elements,setElements] = useState([]);
    const theImg = new Image();
    theImg.src = placeholder;
    const imgW = theImg.width;
    const imgH = theImg.height;
    const [{src,alt,img}, setImg] = useState({
        src: placeholder,
        alt: ' No Files ',
        img: theImg,
    });
    
    const [dims, setDims] = useState({width:imgW,height:imgH});
    const [label, setLabel] = useState("Class A");
    const [mode, setMode] = useState("Box");
    
    return (
        <div className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container 
            justify="center" 
            direction="row"
            spacing={0}
            className={classes.grid}>
            <Grid xs={12} sm={10} md={8} lg={6} item={true}>
                <Card className={classes.card}>

                <Board setDims={setDims} elements={elements} setElements={setElements}
                    img={img} targetRef={targetRef} label={label} mode={mode}/>

                <div>
                    <FileManage placeholder={placeholder} theImg={theImg} setImg={setImg} alt={alt} />
                    <DelRename theImg={theImg} placeholder={placeholder} setImg={setImg} setElements={setElements}/>
                </div>
                
                <div>
                    <ModeSelect mode={mode} setMode={setMode}/>
                    <LabelSelect label={label} setLabel={setLabel}/>
                    <FileDownload elements={elements}/>
                </div>

                <TextInfo theImg={img} dims={dims} setDims={setDims} targetRef={targetRef}/>
                
                </Card>
            </Grid>
        </Grid>
            
        </div>

    )
}

export default Annotate

