import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Programs from "@/components/sections/Programs";
import WhyChoose from "@/components/sections/WhyChoose";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs />
      <WhyChoose />
      <Newsletter />
      <Footer />
    </>
  );
}
