import React, { useRef,useState } from 'react';
import useStyles from './styles';
import { Grid,Card,Button,IconButton,Typography } from '@material-ui/core';
import { GetApp,Delete,RotateLeft } from '@material-ui/icons';
import TextInfo from './TextInfo';
import Board from './Board';
import { ToggleButton,ToggleButtonGroup } from '@material-ui/lab';
// import placeholder from './image.png';
import placeholder from './kitchen1.jpg';

const options = [
    {id: 0, name: "Class A"},
    {id: 1, name: "Class B"},
    {id: 2, name: "Class C"},
]

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

    const handleAlignment = (event,newValue) => {
        setLabel(newValue);
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
            <Grid xs={12} sm={10} md={8} lg={6} item={true}>
                <Card className={classes.card}>

                <Board setDims={setDims} elements={elements}
                    setElements={setElements}
                    img={img} targetRef={targetRef}
                    label={label}/>

                <div>
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
                    <Typography variant="inherit" style={{fontFamily:"Arial",
                            padding:"10px",border:"1px grey solid"}} gutterBottom>
                        {alt}
                    </Typography>
                    <IconButton color="primary" aria-label="delete elements" 
                        onClick={()=>{setElements([]);}} component="span">
                        <Delete />
                    </IconButton>
                    <IconButton color="primary" aria-label="reset" 
                        onClick={()=>{ 
                            setImg({
                                src: placeholder,
                                alt: ' No Files ',
                                img: theImg,});
                            setElements([]);
                        }} component="span">
                        <RotateLeft />
                    </IconButton>
                </div>
                
                <div>
                <ToggleButtonGroup
                    value={label}
                    exclusive
                    aria-label="label select"
                    onChange={handleAlignment}>
                    {options.map((option)=>(
                        <ToggleButton
                            selected={option.name===label}
                            aria-label={option.name}
                            value={option.name}
                            key={option.id}>
                            {option.name}
                        </ToggleButton>
                    ))}

                </ToggleButtonGroup>

                <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                    <GetApp />
                    </IconButton>
                </label>
                </div>

                <TextInfo theImg={img} dims={dims} setDims={setDims} targetRef={targetRef}/>
                
                </Card>
            </Grid>
        </Grid>
            
        </div>

    )
}

export default Annotate

