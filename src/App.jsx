import * as THREE from "three"
import { Suspense, useRef, useState } from "react"
import { Environment } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { DepthOfField, EffectComposer } from "@react-three/postprocessing"

function Avocado({ z }) {

  const ref = useRef()

  const { nodes, materials } = useGLTF('/avocado-transformed.glb')
  const { viewport, camera } = useThree()
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z])

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI
  })

  useFrame(() => {
    ref.current.rotation.set((data.rX += 0.001), (data.rY += 0.007), (data.rZ += 0.007))
    ref.current.position.set(data.x * width, (data.y += 0.05), z)
    if (data.y > height) {
      data.y = -height / 1.5
    }
  })

  return (
    <mesh
      ref={ref}
      geometry={nodes.avocado.geometry}
      material={materials.skin}
      scale={0.05}
    />
  )
}

export default function App({ count = 100, depth = 80 }) {

  return (
    <Canvas gl={{ alpha: false }} camera={{ near: 0.01, far: 110, fov: 30 }}>
      <color attach="background" args={["#71d98c"]} />
      <ambientLight intesity={0.1} />
      <spotLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null} >
        <Environment preset="sunset" />
        {Array.from({ length: count }, (_, i) => (
          <Avocado key={i} z={-(i / count) * depth - 20} />
        ))}
        <EffectComposer>
          <DepthOfField target={[0, 0, depth / 2]} focalLength={0.5} bokehScale={20} height={700} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}

