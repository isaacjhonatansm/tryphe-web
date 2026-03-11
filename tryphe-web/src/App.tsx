import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import LandingPage from "./pages/LandingPage";
import StaffScanner from "./components/StaffScanner";
import ResultsOverlay from "./components/ResultsOverlay";
import QROverlay from "./components/QROverlay";

type View    = "landing" | "staff";
type Overlay = "none" | "results" | "qr";

export default function App() {
  const [view,    setView]    = useState<View>("landing");
  const [overlay, setOverlay] = useState<Overlay>("none");
  const [profile, setProfile] = useState<number[]>([]);

  const handleQuizFinish = (values: number[]) => {
    setProfile(values);
    setOverlay("results");
  };

  const handleGenerateQR = () => setOverlay("qr");

  const handleRestart = () => {
    setProfile([]);
    setOverlay("none");
  };

  const handleProfileFromQR = (values: number[]) => {
    setProfile(values);
    setView("landing");
    setOverlay("results");
  };

  return (
    <>
      {view === "landing" && (
        <LandingPage
          onQuizFinish={handleQuizFinish}
          onStaff={() => setView("staff")}
        />
      )}

      {view === "staff" && (
        <StaffScanner
          onProfileLoaded={handleProfileFromQR}
          onBack={() => setView("landing")}
        />
      )}

      <AnimatePresence>
        {overlay === "results" && (
          <ResultsOverlay
            key="results"
            profile={profile}
            onGenerateQR={handleGenerateQR}
            onClose={handleRestart}
          />
        )}
        {overlay === "qr" && (
          <QROverlay
            key="qr"
            profile={profile}
            onRestart={handleRestart}
          />
        )}
      </AnimatePresence>
    </>
  );
}