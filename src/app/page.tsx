import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Benefits from "@/components/Benefits";
import CallToAction from "@/components/CallToAction";
import Insights from "@/components/Insights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Classes />
        <Benefits />
        <CallToAction />
        <Insights />
      </main>
      <Footer />
    </>
  );
}
