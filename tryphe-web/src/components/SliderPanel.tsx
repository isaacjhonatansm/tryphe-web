import { families } from "../data/perfumes"
import { type OlfactiveProfile } from "../types"

interface Props {
  values: OlfactiveProfile
  onChange: React.Dispatch<React.SetStateAction<OlfactiveProfile>>
}

const SliderPanel: React.FC<Props> = ({ values, onChange }) => {

  const handleChange = (family: string, value: number) => {
    onChange(prev => ({
      ...prev,
      [family]: value
    }))
  }

  return (
    <div>
      <h2 className="mb-4">Define tu perfil olfativo</h2>

      {families.map(family => (
        <div key={family} className="slider-row">
          <div className="slider-label">
            {family}
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={values[family]}
            className="slider-touch"
            onChange={e =>
              handleChange(family, Number(e.target.value))
            }
          />

          <div className="slider-value">
            {values[family]}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SliderPanel