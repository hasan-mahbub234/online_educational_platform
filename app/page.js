import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Programs from "@/components/sections/Programs";
import WhyChoose from "@/components/sections/WhyChoose";
import Courses from "@/components/sections/Courses";
import Reviews from "@/components/sections/Reviews";
import BooksSection from "@/components/sections/BooksSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs />
      <WhyChoose />
      <Courses />
      <BooksSection />
      <Reviews />
      <Footer />
    </>
  );
}
