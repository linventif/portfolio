import { Component, For } from "solid-js";
import { A } from "@solidjs/router";

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

export const Social: Component = () => {
  return (
    <>
      <div class="flex flex-wrap items-center justify-center gap-6 w-full p-4">
        <For each={socialLinks}>
          {({ title, fontAwesomeIcon, href }) => (
            <A href={href} class="btn btn-primary btn-outline">
              <i class={fontAwesomeIcon + " text-blue mr-2 text-lg"} />
              <span class="text-zinc-300 hover:text-white">{title}</span>
            </A>
          )}
        </For>
      </div>
    </>
  );
};
