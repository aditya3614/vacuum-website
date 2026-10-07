import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Install from "./components/Install.jsx";
import Permissions from "./components/Permissions.jsx";
import Safety from "./components/Safety.jsx";
import Faq from "./components/Faq.jsx";
import Closing from "./components/Closing.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <HowItWorks />
        <Install />
        <Permissions />
        <Safety />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
