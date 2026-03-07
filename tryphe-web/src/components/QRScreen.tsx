import QRCode from "react-qr-code";

type Props = {
  profile: number[];
  onRestart: () => void;
};

function encodeProfile(profile: number[]) {
  return profile.join("-");
}

export default function QRScreen({
  profile,
  onRestart
}: Props) {

  const code = encodeProfile(profile);

  const qrValue =
    "https://tryphe-web.vercel.app/profile?code=" + code;

  return (
    <div className="screen qr">

      <h2>Tu identidad olfativa</h2>

      <p>
        Guarda este código y muéstralo en tienda para recrear tu fragancia.
      </p>

      <div className="qr-container">

        <div className="qr-box">

          <QRCode
            value={qrValue}
            size={220}
          />

        </div>

      </div>

      <div className="qr-code">
        Código: {code}
      </div>

      <button
        className="btn-gold"
        onClick={onRestart}
      >
        Crear otra experiencia
      </button>

    </div>
  );
}