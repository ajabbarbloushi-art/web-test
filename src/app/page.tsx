import Hero from "@/components/sections/Hero";
import AppPreview from "@/components/sections/AppPreview";
import Projects from "@/components/sections/Projects";
import Team from "@/components/sections/Team";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <AppPreview />
      <Projects />
      <Team />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
