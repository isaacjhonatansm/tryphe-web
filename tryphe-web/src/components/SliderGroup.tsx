import type { OlfactiveProfile } from "../types"
import { families } from "../data/perfumes"

interface Props {
  values: OlfactiveProfile
  setValues: React.Dispatch<React.SetStateAction<OlfactiveProfile>>
}

const SliderGroup: React.FC<Props> = ({ values, setValues }) => {

  const handleChange = (family: keyof OlfactiveProfile, value: number) => {
    setValues(prev => ({
      ...prev,
      [family]: value
    }))
  }

  return (
    <div className="row g-4">
      {families.map(family => (
        <div key={family} className="col-6">
          <label className="form-label text-capitalize">
            {family}
          </label>

          <input
            type="range"
            min="0"
            max="10"
            value={values[family]}
            className="form-range custom-slider"
            onChange={(e) => handleChange(family, Number(e.target.value))}
          />

          <div className="text-end">{values[family]}</div>
        </div>
      ))}
    </div>
  )
}

export default SliderGroup