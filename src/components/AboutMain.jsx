import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import VideoSection from "./VideoSection";
import HeroSection from "./HeroSection";

const AboutMain = () => {
  return (
    <>
      <HeroSection title="About Us" pageName="About Us" />
      <AboutSection />
      <SkillsSection />
      <VideoSection />
    </>
  );
};

export default AboutMain;
