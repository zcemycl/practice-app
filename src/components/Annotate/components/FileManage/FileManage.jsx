import React from 'react';
import useStyles from '../../styles';
import { Button,Typography } from '@material-ui/core';

const FileManage = ({theImg,setImg,alt}) => {
    const classes = useStyles();
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
        <>
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
        </>
    )
}

export default FileManage
