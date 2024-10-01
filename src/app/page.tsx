import Navbar from "./components/Navbar"
import SectionHero from "./components/SectionHero";
import SectionPlans from "./components/SectionServices";
import SectionTools from './components/SectionTools'

export default function Home() {
  return (
    <div className="flex-col w-full min-h-screen">
      <Navbar />

      <SectionHero />
      <SectionPlans />
      <SectionTools />
    </div>
  );
}
