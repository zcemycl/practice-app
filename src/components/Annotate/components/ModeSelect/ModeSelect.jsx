import React from 'react'
import { Edit,AddBox } from '@material-ui/icons';
import { ToggleButton,ToggleButtonGroup } from '@material-ui/lab';

const ModeSelect = ({mode,setMode}) => {
    const handleMode = (event,newValue) => {
        if (newValue !== null) {
            setMode(newValue);
        }
    };

    return (
        <>
        <ToggleButtonGroup
            style={{marginRight:"10px"}}
            value={mode}
            exclusive
            aria-label="mode select"
            onChange={handleMode}>
            <ToggleButton
                style={{top:"7px",marginBottom:"10px" }}
                selected={"Box"===mode}
                aria-label="Box" value="Box" key={0}>
                <AddBox color="primary"/>
            </ToggleButton>
            <ToggleButton
                style={{top:"7px",marginBottom:"10px" }}
                selected={"Edit"===mode}
                aria-label="Edit" value="Edit" key={1}>
                <Edit color="primary"/>
            </ToggleButton>
        </ToggleButtonGroup>      
        </>
    )
}

export default ModeSelect
