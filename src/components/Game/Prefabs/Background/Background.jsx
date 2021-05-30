import {useEffect} from 'react'
// import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { CubeTextureLoader } from 'three';

const Background = () => {
    const {scene} = useThree();
    useEffect(()=>{
        // Python script to convert cubemap to 6 faces
        // from cubemap_splitter import split_cubemap
        // split_cubemap('./sky.png',
        //       format_type=1,output_directory="./")

        // scene.background = new THREE.Color('lightblue')
        scene.background = new CubeTextureLoader()
            .setPath('textures/background/')
            .load(["left.png","right.png",
                    "top.png","bottom.png",
                    "back.png","front.png"])
    },[scene])
    return null
}

export default Background;
