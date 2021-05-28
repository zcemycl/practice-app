import * as t from "three";

export const init = (targetRef) => {
    let width = targetRef.current.clientWidth;
    let height = targetRef.current.clientHeight;

    const scene = new t.Scene();
    const camera = new t.PerspectiveCamera( 75, 
        width/height, 0.1, 1000 );
    const renderer = new t.WebGLRenderer({antialias:true});
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = t.PCFSoftShadowMap; // default THREE.PCFShadowMap
    return {width,height,scene,camera,renderer}
}