import { useEffect, useState } from "react"

export type DeviceType = "kiosk" | "tablet" | "mobile"

const useDeviceType = (): DeviceType => {

  const getType = (): DeviceType => {
    const width = window.innerWidth

    if (width >= 1600) return "kiosk"
    if (width >= 768) return "tablet"
    return "mobile"
  }

  const [deviceType, setDeviceType] = useState<DeviceType>(getType())

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getType())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return deviceType
}

export default useDeviceType