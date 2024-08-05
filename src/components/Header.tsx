import { A } from "@solidjs/router";
import { Component, For } from "solid-js";

const navLinks = [
  {
    title: "Documentation",
    fontAwesomeIcon: "fas fa-book",
    href: "/docs"
  },
  {
    title: "Add Bot",
    fontAwesomeIcon: "fas fa-robot",
    href: "/invite"
  },
  {
    title: "Support",
    fontAwesomeIcon: "fab fa-discord",
    href: "/discord"
  },
  {
    title: "Premium",
    fontAwesomeIcon: "fas fa-crown",
    href: "/premium",
    color: "text-amber-400",
    hoverColor: "hover:text-amber-300"
  }
];

export const Header: Component = () => {
  return (
    <>
      <div class="navbar bg-background max-w-screen-2xl mx-auto p-4">
        <div class="flex-1">
          <A href="/" class="text-2xl font-bold ml-4 text-font whitespace-nowrap">
          {window.location.hostname}
          </A>
          <For each={navLinks}>
            {({ title, fontAwesomeIcon, href, color, hoverColor }) => (
              <A href={href}
                 class={"ml-6 whitespace-nowrap " + (color ? color : "text-base-content") + " " + (hoverColor ? hoverColor : "hover:text-zinc-300")}>
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
