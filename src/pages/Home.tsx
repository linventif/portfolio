import { Component, createSignal, For, Show } from "solid-js";
import { A } from "@solidjs/router";
import { SolidTyper } from "solid-typer";

const navLinks = [
  {
    title: "Home",
    href: "/",
    fontAwesomeIcon: "fas fa-home",
  },
  {
    title: "About Me",
    href: "#about-me",
    fontAwesomeIcon: "fas fa-info-circle",
  },
  {
    title: "Projects",
    href: "#projects",
    fontAwesomeIcon: "fas fa-project-diagram",
  },
  {
    title: "Tools Box",
    href: "#tools",
    fontAwesomeIcon: "fas fa-toolbox",
  },
  {
    title: "Contact",
    href: "#contact",
    fontAwesomeIcon: "fas fa-envelope",
  },
];

const socialLinks = [
  {
    title: "Email",
    href: "mailto:contact@gregoire-becue.me",
    fontAwesomeIcon: "fas fa-envelope",
  },
  {
    title: "Discord",
    href: "https://discord.com/invite/EkVPk9y",
    fontAwesomeIcon: "fab fa-discord",
  },
  {
    title: "GitHub",
    href: "https://github.com/linventif",
    fontAwesomeIcon: "fab fa-github",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/linventif/",
    fontAwesomeIcon: "fab fa-linkedin",
  },
];

// const projectsCategories = ["University of Lille", "Garry's Mod", "3D Printing", "Web Development"];

interface Category {
  name: string;
  icon: string;
  id: string;
  description?: string;
}

interface Project {
  name: string;
  description: string;
  category: Category;
  url: string;
  tools: Tool[];
  image: string;
}

const projectCategories: Category[] = [
  {
    name: "University of Lille",
    icon: "fa-solid fa-graduation-cap",
    id: "university",
  },
  {
    name: "Garry's Mod",
    icon: "fa-solid fa-gamepad",
    id: "gmod",
  },
  {
    name: "3D Printing",
    icon: "fa-solid fa-cube",
    id: "3d",
  },
  {
    name: "Web Development",
    icon: "fa-solid fa-code",
    id: "web",
  },
];

const projects: Project[] = [];

interface Tool {
  name: string;
  description: string;
  image: string;
  url: string;
  category: Category;
}

const toolsCategories: Category[] = [
  {
    name: "Programming Languages",
    icon: "fa-solid fa-code",
    description:
      "Programming languages are the foundation of software development.",
    id: "languages",
  },
  {
    name: "Frameworks",
    icon: "fa-solid fa-cogs",
    description:
      "Frameworks are libraries that provide pre-built solutions for common problems.",
    id: "frameworks",
  },
  {
    name: "Databases",
    icon: "fa-solid fa-database",
    description: "Databases are used to store and manage data.",
    id: "databases",
  },
  {
    name: "DevOps",
    icon: "fa-solid fa-server",
    description:
      "DevOps is a set of practices that combines software development and IT operations.",
    id: "devops",
  },
  {
    name: "Design",
    icon: "fa-solid fa-palette",
    description: "Design is the process of creating visual content.",
    id: "design",
  },
  {
    name: "APIs",
    icon: "fa-solid fa-network-wired",
    description: "APIs are used to connect different software applications.",
    id: "apis",
  },
  {
    name: "Miscellaneous",
    icon: "fa-solid fa-toolbox",
    description: "Miscellaneous tools are used for various purposes.",
    id: "misc",
  },
];

const catMap = new Map<string, Category>();
projectCategories.forEach((cat) => catMap.set(`project:${cat.id}`, cat));
toolsCategories.forEach((cat) => catMap.set(`tool:${cat.id}`, cat));

const tools: Tool[] = [
  {
    name: "TypeScript",
    description:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/typescript.svg",
    url: "https://typescriptlang.org",
    category: catMap.get("tool:languages")!,
  },
];

const SocialLink: Component = () => {
  return (
    <div class="flex flex-raw items-center justify-center gap-6 w-full p-4">
      <For each={socialLinks}>
        {({ title, fontAwesomeIcon, href }) => (
          <A href={href} class="btn btn-primary btn-outline">
            <i class={fontAwesomeIcon + " text-blue mr-2 text-lg"} />
            <span class="text-zinc-300 hover:text-white">{title}</span>
          </A>
        )}
      </For>
    </div>
  );
};

const Article: Component = (props: any) => {
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
  const [projects, setProjects] = createSignal([]);
  return (
    <>
      {/* Header */}
      <div class="navbar bg-background">
        <div class="flex-1">
          <A
            href="/"
            class="link text-2xl font-bold whitespace-nowrap no-underline text-blue hover:text-blue-active"
          >
            {window.location.hostname}
          </A>
          <div class="flex w-full" />
          <For each={navLinks}>
            {({ title, fontAwesomeIcon, href }) => (
              <A
                href={href}
                class={
                  "ml-6 whitespace-nowrap text-base-content hover:text-zinc-300"
                }
              >
                <i class={fontAwesomeIcon + " mr-1"}></i> {title}
              </A>
            )}
          </For>
        </div>
      </div>

      <hr class="border-[1px] border-primary" />

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
          <SocialLink />
        </Article>
        <Article id="about-me" name="About Me">
          <div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">1984</time>
                  <div className="text-lg font-black">
                    First Macintosh computer
                  </div>
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
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10">
                  <time className="font-mono italic">1998</time>
                  <div className="text-lg font-black">iMac</div>
                  iMac is a family of all-in-one Mac desktop computers designed
                  and built by Apple Inc. It has been the primary part of
                  Apple's consumer desktop offerings since its debut in August
                  1998, and has evolved through seven distinct forms
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">2001</time>
                  <div className="text-lg font-black">iPod</div>
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
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10">
                  <time className="font-mono italic">2007</time>
                  <div className="text-lg font-black">iPhone</div>
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
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">2015</time>
                  <div className="text-lg font-black">Apple Watch</div>
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
          <div class="flex flex-row gap-4 py-4">
            <For each={projectCategories}>
              {(category) => (
                <button class="btn btn-primary btn-outline">
                  <i class={`${category.icon} mr-2 text-blue`}></i>
                  <span class="text-zinc-300 hover:text-white">
                    {category.name}
                  </span>
                </button>
              )}
            </For>
          </div>
        </Article>
        <Article id="tools" name="Tools Box">
          <div class="flex flex-row gap-4 py-4">
            <For each={toolsCategories}>
              {(tool) => (
                <button class="btn btn-primary btn-outline">
                  <i class={`${tool.icon} mr-2 text-blue`}></i>
                  <span class="text-zinc-300 hover:text-white">
                    {tool.name}
                  </span>
                </button>
              )}
            </For>
          </div>
        </Article>
        <Article id="contact" name="Contact">
          <p>Feel free to contact me through the following links:</p>
          <SocialLink />
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
