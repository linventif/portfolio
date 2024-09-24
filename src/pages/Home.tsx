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
}

interface Tool {
  name: string;
  description: string;
  image: string;
  url: string;
}

interface Project {
  name: string;
  description: string;
  category: Category;
  url: string;
  tools: Tool[];
  image: string;
}

const categories: Category[] = [
  {
    name: "University of Lille",
  },
  {
    name: "Garry's Mod",
  },
  {
    name: "3D Printing",
  },
  {
    name: "Web Development",
  },
];

const projects: Project[] = [];

const SocialLink: Component = () => {
  return (
    <div class="flex flex-raw items-center justify-center gap-6 w-full p-4">
      <For each={socialLinks}>
        {({ title, fontAwesomeIcon, href }) => (
          <A href={href} class="btn btn-primary ">
            <i class={fontAwesomeIcon + " text-blue mr-2"}></i> {title}
          </A>
        )}
      </For>
    </div>
  );
};

const Article: Component = (props: any) => {
  return (
    <article id={props.id} class={"gap-4 p-4 text-center flex flex-col justify-center " + props.class}>
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
          <A href="/" class="link text-2xl font-bold whitespace-nowrap no-underline text-blue hover:text-blue-active">
            {window.location.hostname}
          </A>
          <div class="flex w-full" />
          <For each={navLinks}>
            {({ title, fontAwesomeIcon, href }) => (
              <A href={href} class={"ml-6 whitespace-nowrap text-base-content hover:text-zinc-300"}>
                <i class={fontAwesomeIcon + " mr-1"}></i> {title}
              </A>
            )}
          </For>
        </div>
      </div>

      <hr class="border-[1px] border-primary" />

      <section class="gap-10 text-center">
        <Article id="hero" class="h-[800px]">
          <h2 class="text-2xl font-bold text-blue">Hello there, I'm</h2>
          <SolidTyper
            text={pseudoList}
            backspaceSpeed={100}
            className="text-6xl p-10 font-bold"
            loop
            cursor
            cursorClassName="cursor"
          />
          <h2 class="text-xl">
            <span class="font-bold">Fullstack Developer</span> who passionate in creating awesome stuff.
          </h2>
          <SocialLink />
        </Article>
        <Article id="about-me" name="About Me"></Article>
        <Article id="projects" name="Projects">
          <div class="flex flex-row justify-center gap-4">
            <For each={categories}>{(category) => <button class="btn btn-primary">{category.name}</button>}</For>
          </div>
        </Article>
        <Article id="tools" name="Tools Box"></Article>
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
            <A class="font-bold link no-underline text-blue hover:text-blue-active" href="/">
              {window.location.hostname}
            </A>
            <p>
              Created with ❤️ by{" "}
              <A href="https://github.com/linventif" class="link">
                Linventif (Gregoire)
              </A>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
