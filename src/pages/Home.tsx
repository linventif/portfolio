import { Component, createSignal, For, Show } from "solid-js";
import { A } from "@solidjs/router";
import { SolidTyper } from "solid-typer";
import { Social } from "../components/Social";
import { Projects } from "../components/Projects";
import { Tools } from "../components/Tools";
import { Header } from "../components/Header";

const Article: Component = (props: ArticleProps) => {
  return (
    <article
      id={props.id}
      class={
        "gap-4 p-4 text-center flex flex-col justify-center " + props.class
      }
    >
      <Show when={props.name}>
        <div class="flex flex-row justify-center">
          <hr class="border-primary border-[1px] w-full self-center" />
          <h2 class="text-3xl mx-10 text-nowrap font-bold">{props.name}</h2>
          <hr class="border-primary border-[1px] w-full self-center" />
        </div>
      </Show>

      {props.children}
    </article>
  );
};

const Home: Component = () => {
  const pseudoList = ["Linventif", "Grégoire Bécue"];
  return (
    <>
      <Header />

      <section class="gap-10 text-center">
        <Article id="hero" class="h-[800px]">
          <h2 class="text-3xl font-bold text-blue">Hello there, I'm</h2>
          <SolidTyper
            text={pseudoList}
            backspaceSpeed={100}
            className="text-6xl p-10 font-bold"
            loop
            cursor
            cursorClassName="cursor"
          />
          <h2 class="text-xl">
            <span class="font-bold">Fullstack Developer</span> who passionate in
            creating awesome stuff.
          </h2>
          <Social />
        </Article>
        <Article id="about-me" name="About Me">
          <div>
            <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-start mb-10 md:text-end">
                  <time class="font-mono italic">1984</time>
                  <div class="text-lg font-black">First Macintosh computer</div>
                  The Apple Macintosh—later rebranded as the Macintosh 128K—is
                  the original Apple Macintosh personal computer. It played a
                  pivotal role in establishing desktop publishing as a general
                  office function. The motherboard, a 9 in (23 cm) CRT monitor,
                  and a floppy drive were housed in a beige case with integrated
                  carrying handle; it came with a keyboard and single-button
                  mouse.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-end mb-10">
                  <time class="font-mono italic">1998</time>
                  <div class="text-lg font-black">iMac</div>
                  iMac is a family of all-in-one Mac desktop computers designed
                  and built by Apple Inc. It has been the primary part of
                  Apple's consumer desktop offerings since its debut in August
                  1998, and has evolved through seven distinct forms
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-start mb-10 md:text-end">
                  <time class="font-mono italic">2001</time>
                  <div class="text-lg font-black">iPod</div>
                  The iPod is a discontinued series of portable media players
                  and multi-purpose mobile devices designed and marketed by
                  Apple Inc. The first version was released on October 23, 2001,
                  about 8+1⁄2 months after the Macintosh version of iTunes was
                  released. Apple sold an estimated 450 million iPod products as
                  of 2022. Apple discontinued the iPod product line on May 10,
                  2022. At over 20 years, the iPod brand is the oldest to be
                  discontinued by Apple
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-end mb-10">
                  <time class="font-mono italic">2007</time>
                  <div class="text-lg font-black">iPhone</div>
                  iPhone is a line of smartphones produced by Apple Inc. that
                  use Apple's own iOS mobile operating system. The
                  first-generation iPhone was announced by then-Apple CEO Steve
                  Jobs on January 9, 2007. Since then, Apple has annually
                  released new iPhone models and iOS updates. As of November 1,
                  2018, more than 2.2 billion iPhones had been sold. As of 2022,
                  the iPhone accounts for 15.6% of global smartphone market
                  share
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-start mb-10 md:text-end">
                  <time class="font-mono italic">2015</time>
                  <div class="text-lg font-black">Apple Watch</div>
                  The Apple Watch is a line of smartwatches produced by Apple
                  Inc. It incorporates fitness tracking, health-oriented
                  capabilities, and wireless telecommunication, and integrates
                  with iOS and other Apple products and services
                </div>
              </li>
            </ul>
          </div>
        </Article>
        <Article id="projects" name="Projects">
          <Projects />
        </Article>
        <Article id="tools" name="Tools Box">
          <Tools />
        </Article>
        <Article id="contact" name="Contact">
          <p>Feel free to contact me through the following links:</p>
          <Social />
        </Article>
      </section>

      {/* Footer */}
      <div class="flex flex-shrink-0 flex-col">
        <hr class="border-[1px] border-primary" />
        <footer class="footer py-4 bg-background text-base-content">
          <div class="flex flex-col">
            <A
              class="font-bold link no-underline text-blue hover:text-blue-active"
              href="/"
            >
              {window.location.hostname}
            </A>
            <p>
              Created with ❤️ by{" "}
              <A href="https://github.com/linventif" class="link">
                Linventif (Grégoire)
              </A>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
