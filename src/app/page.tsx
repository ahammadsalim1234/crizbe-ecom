"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Features from '@/components/Features';
import FeaturedProducts from '@/components/FeaturedProducts';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Link from "next/link";
import { video } from 'framer-motion/client';

// const VIDEOS = [
//   'https://res.cloudinary.com/dlqmw3xcn/video/upload/v1767116524/Video_Ready_After_Packet_akklop.mp4',
//   'https://customer-assets.emergentagent.com/job_cf2f213e-cdbf-4abe-a3ac-9a8f4d8424ad/artifacts/0aondkzn_WhatsApp%20Video%202025-12-24%20at%2008.12.29.mp4',
//   'https://res.cloudinary.com/dlqmw3xcn/video/upload/v1767110143/WhatsApp_Video_2025-12-24_at_03.36.27_uko75e.mp4',
// ];
const videos = [
  {
    name: "pista",
    video: 'https://res.cloudinary.com/dlqmw3xcn/video/upload/v1767723764/Product_Video_Advertisement_Generated_ruj1an.mp4',

  },
  {
    name: "almond",
    video: 'https://res.cloudinary.com/dlqmw3xcn/video/upload/v1767196957/Video_Ready_After_Color_Change_ufuhdr.mp4',
  },
  {
    name: "al",
    video: 'https://customer-assets.emergentagent.com/job_cf2f213e-cdbf-4abe-a3ac-9a8f4d8424ad/artifacts/0aondkzn_WhatsApp%20Video%202025-12-24%20at%2008.12.29.mp4',
  }
]
console.log(videos, "videosvideos")



const Home = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  console.log(videos[videoIndex].video, "oneee")

  const handleVideoEnded = () => {
    // Switches to the next video in the list
    setVideoIndex((prev) => (prev + 1) % videos.length);
  };
  return (
    <div data-testid="home-page">
      {/* Hero Section with Video */}
      <section className="hero-video-container" data-testid="hero-section">
        <video
          key={videos[videoIndex].name}
          onEnded={handleVideoEnded}
          className="hero-video"
          autoPlay
          loop={false}
          muted
          playsInline
          poster="https://customer-assets.emergentagent.com/job_cf2f213e-cdbf-4abe-a3ac-9a8f4d8424ad/artifacts/e1lrpt25_Flyer.jpg"
        >
          <source src={videos[videoIndex].video} type="video/mp4" />
        </video>
        <div className="hero-overlay" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-accent text-2xl text-[#B4D334] mb-4 block"
            >
              be premium
            </motion.span>
            {
              videos[videoIndex].name === "pista" ? (
                <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Taste the <span className="text-[#B4D334]">Premium</span>
                  <br />Difference
                </h1>
              ) : videos[videoIndex].name === "almond" ? (
                <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-[#ffff] mb-6 leading-tight">
                  Tayyiba <span className="text-[##683310442]">Premium</span>
                  <br />Difference
                </h1>
              ) : (
                <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-[#ffff] mb-6 leading-tight">
                  Ahammad <span className="text-[##683310442]">Premium</span>
                  <br />Difference
                </h1>
              )
            }

            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto">
              Handcrafted chocolate sticks with premium ingredients.
              Experience the perfect blend of rich chocolate and crunchy nuts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/products" data-testid="hero-shop-btn">
                <Button className="bg-[#a7c31e] text-lg px-10 py-5 text-white hover:bg-[#8AB02A] rounded-full font-medium transition-all">
                  Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link href="/contact" data-testid="hero-contact-btn">
                <Button className="btn-secondary text-lg px-10 py-5 border-white text-white hover:bg-white hover:text-[#4A5D23]">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* About Section */}
      <About />

      {/* Testimonials */}
      <Testimonials />

    </div>
  );
};

export default Home;

