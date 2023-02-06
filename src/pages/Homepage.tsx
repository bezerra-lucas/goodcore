import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VideoModal from "@/components/VideoModal/VideoModal";
import { useState } from "react";

export default function HomePage() {
  const [videoModalIsOpen, setVideoModalIsOpen] = useState(false);

  return (
    <div>
      <VideoModal isOpen={videoModalIsOpen} setIsOpen={setVideoModalIsOpen} />
      <Header />
      <HeroSection setVideoModalIsOpen={setVideoModalIsOpen} />
      <ServicesSection />
    </div>
  );
}
