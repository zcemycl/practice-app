import { useSphere } from "@react-three/cannon";
import React from "react";

export const Bullet = (props) => {
  const [sphereRef] = useSphere(() => ({
    mass: 5,
    args: 0.1,
    ...props
  }));

  return (
    <mesh ref={sphereRef} castShadow>
      <sphereBufferGeometry args={[0.1, 32, 32]} />
      <meshLambertMaterial color="lightgreen" />
    </mesh>
  );
};
