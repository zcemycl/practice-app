import React from 'react'

const contentSwitch = (nodeId) => {
    switch (nodeId) {
        default:
        case 1:
            return (<div style={{ height:"100%", width:"100%" }}
            dangerouslySetInnerHTML={{__html:
            "<iframe style='height:100%; width:100%' src='https://zcemycl.github.io'/>"}}
             /> )
    }
}

const ContentFarm = ({nodeId}) => {
    return (
        <>
            {contentSwitch(nodeId)}
        </>
    )
}

export default ContentFarm
