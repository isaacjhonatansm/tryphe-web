import { useState } from "react";

type Props = {
  onFinish: (values: number[]) => void;
};

export default function QuizScreen({ onFinish }: Props) {
  const [values, setValues] = useState<number[]>([5, 5, 5, 5, 5, 5]);

  const labels = [
    "Citrus",
    "Floral",
    "Woody",
    "Fresh",
    "Sweet",
    "Oriental"
  ];

  const updateValue = (index: number, value: number) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  return (
    <div className="screen quiz">
      <h2>Ajusta tus preferencias aromáticas</h2>

      {labels.map((label, index) => (
        <div className="slider-group" key={label}>
          <label>{label}</label>

          <input
            type="range"
            min="0"
            max="10"
            value={values[index]}
            onChange={(e) =>
              updateValue(index, Number(e.target.value))
            }
          />
        </div>
      ))}

      <button
        className="primary-button"
        onClick={() => onFinish(values)}
      >
        Encontrar mi fragancia
      </button>
    </div>
  );
}