import { families, perfumes } from "../data/perfumes"
import { type OlfactiveProfile } from "../types"
import { cosineSimilarity } from "../utils/similarity"
import PerfumeCard from "./PerfumeCard"
import Bottle3D from "./Bottle3D"
import { QRCodeCanvas } from "qrcode.react"
import { useMemo, useState } from "react"

interface Props {
  values: OlfactiveProfile
}

const ResultsPanel: React.FC<Props> = ({ values }) => {

  const [weights, setWeights] = useState<number[]>(
    Array(families.length).fill(1)
  )

  const userVector = useMemo(
    () => families.map(f => values[f]),
    [values]
  )

  const ranked = useMemo(() => {
    return perfumes
      .map(p => {
        const perfumeVector = families.map((f, i) =>
          p.profile[f] * weights[i]
        )

        const similarity = cosineSimilarity(userVector, perfumeVector)

        return { ...p, similarity }
      })
      .sort((a, b) => b.similarity - a.similarity)
  }, [userVector, weights])

  const topPerfume = ranked[0]
  const compatibility = Math.round((topPerfume?.similarity ?? 0) * 100)

  const dominantFamily = families.reduce((a, b) =>
    values[a] > values[b] ? a : b
  )

  const reinforceLearning = () => {
    setWeights(prev =>
      prev.map((w, i) => w + userVector[i] * 0.02)
    )
  }

if (!topPerfume) {
  return <div>Cargando resultados...</div>
}

  return (
    <div className="fade-in">

      {/* BOTELLA */}
      <Bottle3D
        compatibility={compatibility}
        dominantFamily={dominantFamily}
        key={compatibility + dominantFamily}
      />

      <div className="text-center mb-4">
        <h3>{topPerfume.name}</h3>
        <p>{compatibility}% compatibilidad</p>
      </div>

      {/* QR DINÁMICO */}
      <div className="text-center mb-4">
        <QRCodeCanvas
          value={`https://tryphe.com/perfume/${topPerfume.id}?c=${compatibility}`}
          size={120}
          bgColor="transparent"
          fgColor="#d4af37"
        />
      </div>

      <div className="d-flex gap-3 justify-content-center mb-4 flex-wrap">
        <button className="btn btn-gold" onClick={reinforceLearning}>
          Me gusta
        </button>
      </div>

      <div className="row g-4">
        {ranked.slice(0, 3).map((p, index) => (
          <div key={p.id} className="col-12 col-md-6 col-xl-4">
            <PerfumeCard
              perfume={p}
              similarity={p.similarity}
              highlight={index === 0}
            />
          </div>
        ))}
      </div>

    </div>
  )
}

export default ResultsPanel