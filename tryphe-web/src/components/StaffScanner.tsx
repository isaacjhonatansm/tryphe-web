import { useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

type Props = {
  onProfileLoaded: (profile: number[]) => void;
  onBack?: () => void;
};

function decodeProfile(url: string): number[] | null {
  try {
    const parsed = new URL(url);
    const code = parsed.searchParams.get("code");

    if (!code) return null;

    return code.split("-").map(Number);
  } catch {
    return null;
  }
}

export default function StaffScanner({
  onProfileLoaded,
  onBack
}: Props) {

  const scannedRef = useRef(false);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  useEffect(() => {

    if (scannerRef.current) return;

    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      {
        fps: 10,
        qrbox: { width: 250, height: 250 }
      },
      false
    );

    scannerRef.current = scanner;

    const onScanSuccess = (decodedText: string) => {

      if (scannedRef.current) return;

      const profile = decodeProfile(decodedText);

      if (profile) {

        scannedRef.current = true;

        scanner.clear().catch(() => {});

        onProfileLoaded(profile);
      }
    };

    const onScanFailure = () => {
      // errores de lectura se ignoran
    };

    scanner.render(onScanSuccess, onScanFailure);

    return () => {
      scanner.clear().catch(() => {});
      scannerRef.current = null;
    };

  }, [onProfileLoaded]);

  return (
    <div className="screen">

      <h2>Modo Staff</h2>

      <p>Escanea el QR del cliente</p>

      <div
        id="qr-reader"
        style={{
          width: "100%",
          maxWidth: 400,
          margin: "30px auto"
        }}
      />

      {onBack && (
        <button
          className="btn-gold"
          onClick={onBack}
        >
          Volver
        </button>
      )}

    </div>
  );
}