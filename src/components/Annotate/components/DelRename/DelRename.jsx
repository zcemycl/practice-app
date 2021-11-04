import React from 'react';
import { IconButton } from '@material-ui/core';
import { Delete,RotateLeft } from '@material-ui/icons';

const DelRename = ({theImg,placeholder,setImg,setElements}) => {
    return (
        <>
        <IconButton color="primary" aria-label="delete elements" 
            data-testid="delRename_Del"
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
        </>
    )
}

export default DelRename
