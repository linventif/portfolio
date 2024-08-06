import { Component, For, Show } from "solid-js";
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
    <article id={props.id} class={"gap-4 text-center flex flex-col justify-center " + props.class}>
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
      {/* Header */}
      <div class="navbar bg-background max-w-screen-2xl mx-auto p-4">
        <div class="flex-1">
          <A href="/" class="text-2xl font-bold ml-4 text-font whitespace-nowrap">
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
        <Article id="projects" name="Projects"></Article>
        <Article id="tools" name="Tools Box"></Article>
        <Article id="contact" name="Contact">
          <SocialLink />
        </Article>
      </section>

      {/* Footer */}
      <div class="flex flex-shrink-0 flex-col">
        <hr class="border-[1px] border-primary" />
        <footer class="footer px-10 py-4 bg-background text-base-content max-w-screen-2xl mx-auto">
          <aside class="items-center grid-flow-col">
            <div class="ml-2 flex flex-col">
              <h3 class="text-font font-bold">{window.location.hostname}</h3>
              <p>
                Created with ❤️ by{" "}
                <A href="https://github.com/linventif" class="link">
                  Linventif (Gregoire)
                </A>
              </p>
            </div>
          </aside>
        </footer>
      </div>
    </>
  );
};

export default Home;
