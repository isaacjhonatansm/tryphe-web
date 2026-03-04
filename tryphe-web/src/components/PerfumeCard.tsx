import {type Perfume } from "../types"

interface Props {
  perfume: Perfume
  similarity: number
  highlight?: boolean
}

const PerfumeCard: React.FC<Props> = ({
  perfume,
  similarity,
  highlight
}) => {

  const compatibility = Math.round(similarity * 100)

  const glowStyle =
    compatibility > 90
      ? { boxShadow: "0 0 40px rgba(212,175,55,0.8)" }
      : compatibility > 75
      ? { boxShadow: "0 0 25px rgba(212,175,55,0.5)" }
      : {}

  return (
    <div
      className={`card perfume-card ${highlight ? "highlight" : ""}`}
      style={glowStyle}
    >
      <div className="card-body text-center">
        <h5>{perfume.name}</h5>
        <p>{compatibility}% match</p>
      </div>
    </div>
  )
}

export default PerfumeCard