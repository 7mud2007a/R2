import { ThemeProvider } from './context/ThemeContext';
import AnimatedNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ScrollVideo from './components/ScrollVideo';
import CarsSection from './components/CarsSection';
import TechSection from './components/TechSection';
import AboutSection from './components/AboutSection';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';

export default function App() {
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#070b08] text-slate-900 dark:text-slate-100 font-sans selection:bg-[#223023] selection:text-white transition-colors duration-300">
        {/* Animated Custom Navbar */}
        <AnimatedNavbar onNavigate={handleNavigate} />

        <main>
          {/* Hero Section */}
          <HeroSection onExploreClick={() => handleNavigate('cinematic-experience')} />
<ScrollVideo />
          {/* Scroll Cinematic Car Experience Section */}

          {/* Cars Fleet Section */}
          <CarsSection />

          {/* Technology Section */}
          <TechSection />

          {/* About Heritage Section */}
          <AboutSection />

          {/* Social Navigation 3D Section */}
          <SocialSection />
        </main>

        {/* Minimal Luxury Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
