import { useState } from "react";
import IntroScreen from "./components/IntroScreen";
import QuizScreen from "./components/QuizScreen";
import ResultsScreen from "./components/ResultsScreen";
import QRScreen from "./components/QRScreen";
import StaffScanner from "./components/StaffScanner";

export type View =
  | "intro"
  | "quiz"
  | "results"
  | "qr"
  | "staff";

export default function App() {

  const [view, setView] = useState<View>("intro");
  const [profile, setProfile] = useState<number[]>([]);

  const startQuiz = () => {
    setView("quiz");
  };

  const finishQuiz = (values: number[]) => {
    setProfile(values);
    setView("results");
  };

  const generateQR = () => {
    setView("qr");
  };

  const restart = () => {
    setProfile([]);
    setView("intro");
  };

  const openStaff = () => {
    setView("staff");
  };

  const loadProfileFromQR = (values: number[]) => {
    setProfile(values);
    setView("results");
  };

  return (
    <div className="app">

      {view === "intro" && (
        <IntroScreen
          onStart={startQuiz}
          onStaff={openStaff}
        />
      )}

      {view === "quiz" && (
        <QuizScreen onFinish={finishQuiz} />
      )}

      {view === "results" && (
        <ResultsScreen
          profile={profile}
          onGenerateQR={generateQR}
        />
      )}

      {view === "qr" && (
        <QRScreen
          profile={profile}
          onRestart={restart}
        />
      )}

      {view === "staff" && (
        <StaffScanner
          onProfileLoaded={loadProfileFromQR}
          onBack={() => setView("intro")}
        />
      )}

    </div>
  );
}