import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./(root)/Hero/Hero";
import Experience from "./(root)/Experience/Experience";
import Techstack from "./(root)/Techstack/Techstack";
import Portfolio from "./(root)/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Cgradients from "./components/Cgradients/Cgradients";

export default function Home() {
  return (
    <>
      <Cgradients />
      <Navbar />
      <Hero />
      <Experience />
      <Techstack />
      <Portfolio />
      <Footer />
    </>
  );
}
