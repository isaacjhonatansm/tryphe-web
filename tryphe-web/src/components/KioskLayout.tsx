import { type ReactNode } from "react"
import useDeviceType from "../hooks/useDeviceType"

interface Props {
  left: ReactNode
  right: ReactNode
}

const KioskLayout: React.FC<Props> = ({ left, right }) => {

  const deviceType = useDeviceType()

  // 🖥 KIOSKO 4K
  if (deviceType === "kiosk") {
    return (
      <div className="container-fluid kiosk-layout-horizontal">
        <div className="row h-100">
          <div className="col-6 kiosk-panel kiosk-fullheight">
            {left}
          </div>
          <div className="col-6 kiosk-panel kiosk-fullheight">
            {right}
          </div>
        </div>
      </div>
    )
  }

  // 📱 TABLET
  if (deviceType === "tablet") {
    return (
      <div className="container kiosk-layout-vertical">
        <div className="kiosk-panel mb-4">
          {left}
        </div>
        <div className="kiosk-panel">
          {right}
        </div>
      </div>
    )
  }

  // 📲 MOBILE (AHORA SI MUESTRA AMBOS)
  return (
    <div className="container mobile-layout">
      <div className="kiosk-panel mb-4">
        {left}
      </div>

      <div className="kiosk-panel">
        {right}
      </div>
    </div>
  )
}

export default KioskLayout