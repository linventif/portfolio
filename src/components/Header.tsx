import { A } from "@solidjs/router";
import { Component, For } from "solid-js";

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

export const Header: Component = () => {
  return (
    <>
      <div class="navbar bg-background max-w-screen-2xl mx-auto p-4">
        <div class="flex-1">
          <A href="/" class="text-2xl font-bold ml-4 text-font whitespace-nowrap">
          {window.location.hostname}
          </A>
          <div class="flex w-full"/>
          <For each={navLinks}>
            {({ title, fontAwesomeIcon, href }) => (
              <A href={href}
                 class={"ml-6 whitespace-nowrap text-base-content hover:text-zinc-300"}>
                <i class={fontAwesomeIcon + " mr-1"}></i> {title}
              </A>
            )}
          </For>
        </div>
      </div>

      <hr class="border-[1px] border-primary" />
    </>
  );
};
