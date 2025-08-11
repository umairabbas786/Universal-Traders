import AboutHero from "./AboutHero";
import CompanyStory from "./CompanyStory";
import MissionVision from "./MissionVision";
import LeadershipTeam from "./LeadershipTeam";
import WhyChooseUs from "./WhyChooseUs";

export default function MainAbout() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <LeadershipTeam />
      <WhyChooseUs />
    </div>
  );
}
