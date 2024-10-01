import { Component } from "solid-js";
import { Social } from "../components/Social";
import { Projects } from "../components/Projects";
import { Tools } from "../components/Tools";
import { Header } from "../components/Header";
import { Article } from "../components/Article";
import { Hero } from "../components/Hero";
import { AboutMe } from "../components/AboutMe";
import { Footer } from "../components/Footer";
import { ScholarTimeline } from "../components/TimeLine";

const Home: Component = () => {
  return (
    <>
      <Header />

      <section class="gap-10">
        <Article id="hero" class="mt-44 h-[500px]">
          <Hero />
          <Social />
        </Article>
        <Article id="about-me" name="About Me">
          <AboutMe />
        </Article>
        <Article id="scholar-timeline" name="Scholar Timeline">
          <ScholarTimeline />
        </Article>
        <Article id="projects" name="Projects">
          <Projects />
        </Article>
        <Article id="tools" name="Tools Box">
          <Tools />
        </Article>
        <Article id="contact" name="Contact">
          <p class="text-center">
            Feel free to contact me through the following links:
          </p>
          <Social />
        </Article>
      </section>

      <Footer />
    </>
  );
};

export default Home;
