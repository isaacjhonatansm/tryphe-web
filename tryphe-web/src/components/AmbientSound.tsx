import { useEffect, useRef } from "react"

const AmbientSound = () => {

  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio("/ambient.mp3")
    audioRef.current.loop = true
    audioRef.current.volume = 0.05

    const playAudio = () => {
      audioRef.current?.play().catch(() => {})
    }

    window.addEventListener("click", playAudio)

    return () => {
      window.removeEventListener("click", playAudio)
    }
  }, [])

  return null
}

export default AmbientSound