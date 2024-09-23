import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import SectionHero from "./components/SectionHero";
import SectionPlans from "./components/SectionPlans";
import SectionServices from "./components/SectionServices";

export default function Home() {
  return (
    <div className="flex-col w-full min-h-screen">
      <Navbar />

      <SectionHero />
      <SectionPlans />
      <SectionServices />

      <Footer />
    </div>
  );
}
