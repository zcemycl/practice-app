import React, { useState } from 'react'
import { IconButton } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';

const FileDownload = ({elements}) => {
    const [data,setData] = useState([]);
    const handleDownload = (e) => {
        setData([]);
        var i = 0;
        for (i=0;i<elements.length;i++){
            const {x1,x2,y1,y2,color,clabel} = elements[i];
            const bbox = {x:x1,y:y1,w:x2,h:y2};
            const bbox_class_color = {bbox:bbox,color:color,label:clabel}
            data.push(bbox_class_color);
            setData(data);
        }

        const fileName = "annotations";
        const json = JSON.stringify(data);
        const blob = new Blob([json],{type:"application/json"});
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setData([]);
    }
    return (
        <>
        <IconButton color="primary" 
                    aria-label="upload picture" 
                    component="span"
                    onClick={handleDownload}>
            <GetApp />
        </IconButton>
        </>
    )
}

export default FileDownload
