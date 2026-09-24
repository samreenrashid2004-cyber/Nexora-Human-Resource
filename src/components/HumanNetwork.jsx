import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Line, Sparkles, Sphere } from '@react-three/drei'
import { useRef } from 'react'

const nodes = [
  { position: [0, 0, 0], size: 0.13 },
  { position: [-1.3, 0.7, 0], size: 0.08 },
  { position: [1.2, 0.8, -0.2], size: 0.08 },
  { position: [-1.1, -0.8, 0.3], size: 0.08 },
  { position: [1.3, -0.7, 0], size: 0.08 },
  { position: [0, 1.5, -0.5], size: 0.07 },
  { position: [0, -1.5, 0.4], size: 0.07 },
  { position: [-2, 0, -0.8], size: 0.05 },
  { position: [2, 0.2, -0.6], size: 0.05 },
  { position: [-0.5, 2, -0.7], size: 0.05 },
  { position: [0.7, -2, -0.8], size: 0.05 },
]

const connections = [
  [[0, 0, 0], [-1.3, 0.7, 0]],
  [[0, 0, 0], [1.2, 0.8, -0.2]],
  [[0, 0, 0], [-1.1, -0.8, 0.3]],
  [[0, 0, 0], [1.3, -0.7, 0]],
  [[0, 0, 0], [0, 1.5, -0.5]],
  [[0, 0, 0], [0, -1.5, 0.4]],
  [[-1.3, 0.7, 0], [-2, 0, -0.8]],
  [[-1.3, 0.7, 0], [-0.5, 2, -0.7]],
  [[1.2, 0.8, -0.2], [2, 0.2, -0.6]],
  [[1.2, 0.8, -0.2], [0, 1.5, -0.5]],
  [[-1.1, -0.8, 0.3], [-2, 0, -0.8]],
  [[-1.1, -0.8, 0.3], [0, -1.5, 0.4]],
  [[1.3, -0.7, 0], [2, 0.2, -0.6]],
  [[1.3, -0.7, 0], [0.7, -2, -0.8]],
]

function NetworkNode({ position, size }) {
  const isCore = size >= 0.13

  return (
    <Float
      speed={isCore ? 0.8 : 1.2}
      rotationIntensity={0.15}
      floatIntensity={isCore ? 0.2 : 0.35}
    >
      <group position={position}>
        <Sphere args={[size * 2.2, 16, 16]}>
          <meshBasicMaterial
            color={isCore ? '#8B5CF6' : '#FF4FD8'}
            transparent
            opacity={0.08}
          />
        </Sphere>

        <Sphere args={[size, 20, 20]}>
          <meshStandardMaterial
            color={isCore ? '#8B5CF6' : '#FF4FD8'}
            emissive={isCore ? '#8B5CF6' : '#FF4FD8'}
            emissiveIntensity={isCore ? 3 : 2}
            roughness={0.2}
            metalness={0.15}
          />
        </Sphere>

        {isCore && (
          <Sphere args={[size * 0.45, 16, 16]}>
            <meshBasicMaterial color="#F7F5FA" transparent opacity={0.75} />
          </Sphere>
        )}
      </group>
    </Float>
  )
}

function NetworkCore() {
  const group = useRef(null)

  useFrame((state) => {
    if (!group.current) return
    const { mouse } = state
    group.current.rotation.y += 0.0015
    group.current.rotation.x += (mouse.y * 0.08 - group.current.rotation.x) * 0.02
    group.current.rotation.z += (mouse.x * 0.04 - group.current.rotation.z) * 0.02
  })

  return (
    <group ref={group}>
      {connections.map((points, index) => <Line key={index} points={points} color="#8B5CF6" lineWidth={0.8} transparent opacity={0.45} />)}
      {nodes.map((node, index) => <NetworkNode key={index} position={node.position} size={node.size} />)}
      <Sparkles count={55} scale={[5, 5, 4]} size={1.1} speed={0.15} color="#FF4FD8" />
      <Sparkles count={25} scale={[4, 4, 3]} size={1.4} speed={0.1} color="#8B5CF6" />
    </group>
  )
}

function HumanNetwork() {
  return (
    <div className="network-canvas" aria-label="Interactive 3D network representing people, skills, opportunities and growth">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <pointLight position={[2, 3, 4]} intensity={7} color="#8B5CF6" />
        <pointLight position={[-3, -2, 2]} intensity={4} color="#FF4FD8" />
        <NetworkCore />
      </Canvas>
    </div>
  )
}

export { HumanNetwork }
export default HumanNetwork
