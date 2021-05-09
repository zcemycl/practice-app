import React from 'react';
import { ToggleButton,ToggleButtonGroup } from '@material-ui/lab';

const options = [
    {id: 0, name: "Class A"},
    {id: 1, name: "Class B"},
    {id: 2, name: "Class C"},
]

const LabelSelect = ({label,setLabel}) => {
    const handleLabel = (event,newValue) => {
        if (newValue !== null) {
            setLabel(newValue);
        }
    };
    return (
        <>
        <ToggleButtonGroup
            value={label}
            exclusive
            aria-label="label select"
            onChange={handleLabel}>
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
        </>
    )
}

export default LabelSelect
