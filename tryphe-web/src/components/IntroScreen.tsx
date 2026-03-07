type Props = {
  onStart: () => void;
  onStaff: () => void;
};

export default function IntroScreen({
  onStart,
  onStaff
}: Props) {

  return (

    <div className="screen">

      <h1>TRYPHÉ</h1>

      <p className="subtitle">
        Descubre tu identidad olfativa
      </p>

      <button
        className="btn-gold"
        onClick={onStart}
      >
        Comenzar experiencia
      </button>

      <div style={{marginTop:30}}>

        <button
          className="btn-gold"
          onClick={onStaff}
        >
          Modo Staff
        </button>

      </div>

    </div>

  );
}