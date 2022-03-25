
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/myfacebig.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0.geometry} material={materials.Material_0} position={[0, 0.25, 0]} rotation={[0, 1.43, 0]} />
    </group>
  )
}

useGLTF.preload('/myfacebig.glb')
