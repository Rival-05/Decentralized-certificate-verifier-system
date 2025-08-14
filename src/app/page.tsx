"use client";

import { Hero } from "@/components/home_page/hero_section";
import { Features } from "@/components/home_page/feature_section";
import { How } from "@/components/home_page/how_it_works";
export default function Home() {
  

  return (
    <main className="flex flex-col items-center min-h-screen bg-[#1b1b1b] font-handwriting relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('/textures/dark-paper.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      ></div>

      <Hero />
      <Features />
      <How />

      <section className="py-20 text-center ">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Start issuing secure certificates today!
        </h2>
        <a
          href="/issue"
          className="px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold shadow-lg hover:bg-yellow-500 transition-all duration-300"
          style={{ boxShadow: "4px 4px 0px #000" }}
        >
          ✏️ Get Started
        </a>
      </section>
    </main>
  );
}
