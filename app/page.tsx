import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import IDo from "./components/IDo";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IDo />
        <Works />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
