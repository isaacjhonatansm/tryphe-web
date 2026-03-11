import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BrandSection from "../components/BrandSection";
import CollectionSection from "../components/CollectionSection";
import QuizSection from "../components/QuizSection";
import FooterSection from "../components/FooterSection";

type Props = {
  onQuizFinish: (values: number[]) => void;
  onStaff: () => void;
};

export default function LandingPage({ onQuizFinish, onStaff }: Props) {
  return (
    <div className="landing">
      <Navbar onStaff={onStaff} />
      <HeroSection />
      <BrandSection />
      <CollectionSection />
      <QuizSection onFinish={onQuizFinish} />
      <FooterSection />
    </div>
  );
}
