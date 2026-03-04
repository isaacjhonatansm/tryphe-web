import { useState } from "react"
import IntroScreen from "./components/IntroScreen"
import ResultsPanel from "./components/ResultsPanel"
import SliderPanel from "./components/SliderPanel"
import KioskLayout from "./components/KioskLayout"
import AmbientSound from "./components/AmbientSound"
import {type OlfactiveProfile } from "./types"

const initialProfile: OlfactiveProfile = {
  citricos: 50,
  amaderados: 50,
  florales: 50,
  orientales: 50,
  frescos: 50,
  dulces: 50,
  aromaticos: 50,
  almizclados: 50,
  frutales: 50,
  verdes: 50,
  especiados: 50,
  cuero: 50
}

function App() {

  const [started, setStarted] = useState(false)
  const [profile, setProfile] = useState<OlfactiveProfile>(initialProfile)

  if (!started) {
    return <IntroScreen onStart={() => setStarted(true)} />
  }

  return (
    <>
      <AmbientSound />

      <KioskLayout
        left={
          <SliderPanel
            values={profile}
            onChange={setProfile}
          />
        }
        right={
          <ResultsPanel values={profile} />
        }
      />
    </>
  )
}

export default App