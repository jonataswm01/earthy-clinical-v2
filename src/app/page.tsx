import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import Profile from "@/components/home/Profile";
import Services from "@/components/home/Services";
import Atmosphere from "@/components/home/Atmosphere";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Manifesto />
      <Profile />
      <Services />
      <Atmosphere />
      <Footer />
    </main>
  );
}
