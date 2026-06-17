import SEO from "../components/common/SEO";

import HeroSection from "../components/home/HeroSection";
import MissionVision from "../components/home/MissionVision";
import LabsOverview from "../components/home/LabsOverview";
import Statistics from "../components/home/Statistics";
import FeaturedProjects from "../components/home/FeaturedProjects";
import CTASection from "../components/home/CTASection";
import OrganogramPreview from "../components/home/OrganogramPreview";
import FeaturedVideos from "../components/videos/FeaturedVideos";

const Home = () => {
  return (
    <>
      <SEO
        title="FabLab"
        description="Innovation Research Lab"
      />

      <HeroSection />

      <MissionVision />

      <LabsOverview />

      <Statistics />

      <FeaturedProjects />

      <OrganogramPreview />

      <FeaturedVideos />

      <CTASection />
    </>
  );
};

export default Home;