import Hero from "@/components/sections/Hero";
import AppPreview from "@/components/sections/AppPreview";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <AppPreview />
      <Projects />
      <Services />
      <About />
      <FAQ />
      <Footer />
    </main>
  );
}
