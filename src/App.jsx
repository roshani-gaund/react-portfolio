import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Section from "./components/Section";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Section id="about" title="About Me">
          <p className="text-slate-700 leading-7">
            Passionate MERN stack developer focused on building delightful user experiences,
            scalable APIs, and clean component systems. I enjoy working with Tailwind, React,
            and Node.js — and I care deeply about accessibility and performance.
          </p>
        </Section>
        <Skills />
        <Projects />
        <Education />
        <Certifications />
       
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
