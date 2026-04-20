import Navbar from "./components/Navbar/Navbar";
import Hero from "./(root)/Hero/Hero";
import Experience from "./(root)/Experience/Experience";
import Techstack from "./(root)/Techstack/Techstack";
import Portfolio from "./(root)/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Contact from "./contacts/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Techstack />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
