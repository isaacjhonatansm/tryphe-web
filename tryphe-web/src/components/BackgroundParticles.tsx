import Particles from "@tsparticles/react"

const BackgroundParticles = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 40 },
          color: { value: "#d4af37" },
          opacity: { value: 0.08 },
          size: { value: 2 },
          move: {
            enable: true,
            speed: 0.3
          }
        }
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none"
      }}
    />
  )
}

export default BackgroundParticles