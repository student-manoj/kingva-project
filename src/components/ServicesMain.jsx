import HeroSection from "./HeroSection";
import PlansSection from "./PlansSection";
import ServicesSectionTow from "./ServicesSectionTow";
import TeamSection from "./Teamsection";

const ServicesMain = () => {
  return (
    <>
      <HeroSection title="Services" pageName="Services" />
      <ServicesSectionTow />
      <TeamSection />
      <PlansSection />
    </>
  );
};

export default ServicesMain;
