import React, { useRef,useState } from 'react';
import useStyles from './styles';
import { Grid,Card,Button,IconButton } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';
import TextInfo from './TextInfo';
import Board from './Board';
import { ToggleButton,ToggleButtonGroup } from '@material-ui/lab';
// import placeholder from './image.png';
import placeholder from './kitchen1.jpg';

const Annotate = () => {
    const classes = useStyles();
    const targetRef = useRef();
    const theImg = new Image();
    theImg.src = placeholder;
    const imgW = theImg.width;
    const imgH = theImg.height;
    const [{src,alt,img}, setImg] = useState({
        src: placeholder,
        alt: 'Upload an Image',
        img: theImg,
    });
    
    const [dims, setDims] = useState({width:imgW,height:imgH});

    const [alignment, setAlignment] = useState('left');

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

    const handleImg = (e) => {
        if(e.target.files[0]) {
            theImg.src = URL.createObjectURL(e.target.files[0]);
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name,
                img: theImg,
            });  
            
        } 
    }

    return (
        <div className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container 
            justify="center" 
            direction="row"
            spacing={0}
            className={classes.grid}>
            <Grid xs={12} sm={10} md={8} lg={6}>
                <Card className={classes.card}>

                <Board setDims={setDims}
                    img={img} targetRef={targetRef}/>

                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={handleImg}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                    Upload
                    </Button>
                </label>

                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                >
                    <ToggleButton value="left" aria-label="left aligned" style={{padding:"5px",margin:"5px"}}>
                        Class 1
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="centered" style={{padding:"5px",margin:"5px"}}>
                        Class 2
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right aligned" style={{padding:"5px",margin:"5px"}}>
                        Class 3
                    </ToggleButton>
                </ToggleButtonGroup>

                <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                    <GetApp />
                    </IconButton>
                </label>

                <TextInfo theImg={img} dims={dims} setDims={setDims} targetRef={targetRef}/>
                
                </Card>
            </Grid>
        </Grid>
            
        </div>

    )
}

export default Annotate

