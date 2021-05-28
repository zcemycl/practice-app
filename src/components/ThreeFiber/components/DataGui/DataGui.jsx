import React,{useEffect} from 'react'
import DatGui,{DatColor,DatNumber,
    DatFolder,DatButton} from 'react-dat-gui'

const DataGui = ({data,setData,defaultSettings,cam}) => {
    const handleData = (newData) => {
        setData(newData)
    }

    useEffect(()=>{
        if (cam){
            if (data.camx !== cam.position.camx){
                cam.position.x = data.camx
            } 
            if (data.camy !== cam.position.camy){
                cam.position.y = data.camy
            } 
            if (data.camz !== cam.position.camz){
                cam.position.z = data.camz
            }
            if (data.fov !== cam.fov){
                cam.fov = data.fov
                cam.updateProjectionMatrix();
            }
        }
    },[data.camx,data.camy,data.camz,data.fov])

    useEffect(()=>{
        if (cam){
            cam.lookAt(data.camlx,data.camly,data.camlz)
        }
    },[cam,data.camlx,data.camly,data.camlz])

    return (
    <div style={{textAlign:'left'}}>
    <DatGui data={data}
        onUpdate={handleData
        } style={{position:"absolute",top:"10px"}}
        >
        <DatFolder title="Camera" closed={false}>
            <DatNumber path="camx" label="Position X" min={-100} max={100} step={10}/>
            <DatNumber path="camy" label="Position Y" min={-100} max={100} step={10}/>
            <DatNumber path="camz" label="Position Z" min={-100} max={100} step={10}/>
            <DatNumber path="camlx" label="Look At X" min={-100} max={100} step={10}/>
            <DatNumber path="camly" label="Look At Y" min={-100} max={100} step={10}/>
            <DatNumber path="camlz" label="Look At Z" min={-100} max={100} step={10}/>
            <DatNumber path="fov" label="Field of View" min={0} max={500} step={10}/>
        </DatFolder>
        
        <DatFolder title="Cube" closed={false}>
            <DatNumber path="boxx" label="Position X" min={-10} max={10} step={1}/>
            <DatNumber path="boxy" label="Position Y" min={2} max={20} step={1}/>
            <DatNumber path="boxz" label="Position Z" min={-10} max={10} step={1}/>
            <DatColor path="color" label="Color"/>
        </DatFolder>
        
        
        <DatButton
            label="reset"
            onClick={(e)=>setData(defaultSettings)}/>
    </DatGui>
    </div>
    
    )
}

export default DataGui
