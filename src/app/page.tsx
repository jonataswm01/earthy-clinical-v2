import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import Profile from "@/components/home/Profile";
import Services from "@/components/home/Services";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";
import NextPageTrigger from "@/components/layout/NextPageTrigger";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Manifesto />
      <Profile />
      <Services />
      <CTASection />
      <Footer />
      <NextPageTrigger />
    </main>
  );
}
