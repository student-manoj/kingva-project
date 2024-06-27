import CustmerReviewSection from "./CustmerReviewSection";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import TestimonialSection from "./TestimonialSection";

const PortfolioMain = () => {
  return (
    <>
      <HeroSection title="Portfolio" pageName="Portfolio" />
      <PortfolioSection />
      <CustmerReviewSection />
      <TestimonialSection />
    </>
  );
};

export default PortfolioMain;
