import {
  Radar
} from "react-chartjs-2"

import {
  Chart,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js"

Chart.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

interface Props {
  labels: string[]
  valuesUser: number[]
  valuesPerfume: number[]
}

const ProfileRadar: React.FC<Props> = ({
  labels,
  valuesUser,
  valuesPerfume
}) => {

  const data = {
    labels,
    datasets: [
      {
        label: "Tu perfil",
        data: valuesUser,
        backgroundColor: "rgba(255,255,255,0.05)",
        borderColor: "#ffffff",
        borderWidth: 2
      },
      {
        label: "Fragancia recomendada",
        data: valuesPerfume,
        backgroundColor: "rgba(212,175,55,0.25)",
        borderColor: "#d4af37",
        borderWidth: 2
      }
    ]
  }

  const options = {
    responsive: true,
    scales: {
      r: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 2,
          backdropColor: "transparent",
          color: "#888"
        },
        grid: {
          color: "rgba(255,255,255,0.08)"
        },
        angleLines: {
          color: "rgba(255,255,255,0.08)"
        },
        pointLabels: {
          color: "#aaa",
          font: {
            size: 12
          }
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: "#ccc"
        }
      }
    }
  }

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <Radar data={data} options={options} />
    </div>
  )
}

export default ProfileRadar