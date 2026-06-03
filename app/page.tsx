import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Journey from "../components/journey/Journey";
import Expertise from "../components/expertise/Expertise";
import Skills from "../components/skills/Skills";

import Competition from "../components/competition/Competition";
import Certifications from "../components/certifications/Certifications";
import Projects from "../components/projects/Projects";
import Leadership from "../components/leadership/Leadership";

import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

import MouseGlow from "../components/effects/MouseGlow";
import Cursor from "../components/effects/Cursor";
import Particles from "../components/effects/Particles";
import FloatingOrbs from "../components/effects/FloatingOrbs";

import LoadingScreen from "../components/loading/LoadingScreen";

import FadeUp from "../components/animations/FadeUp";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[#05010f]">
      {/* Effects */}

      <LoadingScreen />

      <Cursor />

      <MouseGlow />

      <Particles />

      <FloatingOrbs />

      {/* Navbar */}

      <Navbar />

      {/* Hero stays visible */}

      <Hero />

      {/* Sections appear on scroll */}

      <FadeUp>
        <About />
      </FadeUp>

      <FadeUp>
        <Journey />
      </FadeUp>

      <FadeUp>
        <Expertise />
      </FadeUp>

      <FadeUp>
        <Skills />
      </FadeUp>

      <FadeUp>
        <Competition />
      </FadeUp>

      <FadeUp>
        <Certifications />
      </FadeUp>

      <FadeUp>
        <Projects />
      </FadeUp>

      <FadeUp>
        <Leadership />
      </FadeUp>

      <FadeUp>
        <Contact />
      </FadeUp>

      {/* Footer */}

      <Footer />
    </main>
  );
}