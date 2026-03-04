import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useMemo } from "react"

interface Props {
  compatibility: number
  dominantFamily: string
}

const Bottle = ({ compatibility, dominantFamily }: Props) => {

  const color = useMemo(() => {
    const map: Record<string, string> = {
        citricos: "#f5e642",
        frescos: "#5ad6ff",
        aromaticos: "#8fd14f",
        florales: "#ff9ecf",
        frutales: "#ffb347",
        amaderados: "#8b5e3c",
        orientales: "#d4af37",
        dulces: "#ff6b6b",
        almizclados: "#e0e0e0",
        verdes: "#3cb371",
        especiados: "#c0392b",
        cuero: "#5c4033"
    }
    return map[dominantFamily] || "#ffffff"
  }, [dominantFamily])

  const glow = compatibility > 85 ? 2 : 1

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 3, 5]} intensity={glow} color={color} />

      <mesh>
        <cylinderGeometry args={[1, 1, 3, 64]} />
        <meshPhysicalMaterial
          color={color}
          transmission={1}
          roughness={0}
          thickness={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>

      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.6, 32]} />
        <meshStandardMaterial color="#d4af37" />
      </mesh>
    </>
  )
}

const Bottle3D: React.FC<Props> = ({ compatibility, dominantFamily }) => {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <Canvas style={{ height: "100%", width: "100%" }}>
        <Bottle
          compatibility={compatibility}
          dominantFamily={dominantFamily}
        />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  )
}

export default Bottle3D