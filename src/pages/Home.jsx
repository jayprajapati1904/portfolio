import React from "react";
import Navbar from "../components/Navber";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="bg-[#10172a]">
        {/* Hero Section */}
        <section className="mb-8">
          <Hero />
        </section>

        {/* About Section */}
        <section className="mt-0 mb-8">
          <About />
        </section>

        <section className="mt-0 mb-8">
          <Skills />
        </section>

        {/* Projects Section */}
        <section className="mt-0 mb-8">
          <Projects />
        </section>

        {/* Contact Section */}
        <section className="mt-0 ">
          <Contact />
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
