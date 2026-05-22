import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#F2F2F4]">
        <Hero />
        <Features />
        <HowItWorks />
        <About />
      </main>
      <Footer />
    </>
  );
}