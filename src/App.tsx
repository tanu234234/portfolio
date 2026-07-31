import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CurrentFocus from "./components/CurrentFocus";
import About from "./components/About";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Strengths from "./components/Strengths";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import BeyondScreen from "./components/BeyondScreen";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import CursorSpotlight from "./components/CursorSpotlight";

export default function App() {
  return (
    <>
      <CursorSpotlight />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <CurrentFocus />
        <About />
        <Journey />
        <Skills />
        <Strengths />
        <Projects />
        <Education />
        <Certificates />
        <BeyondScreen />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
