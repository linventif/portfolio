import { A } from "@solidjs/router";
import { Component, For } from "solid-js";

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
    title: "Scholar Timeline",
    href: "#scholar-timeline",
    fontAwesomeIcon: "fas fa-graduation-cap",
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
      <div class="navbar bg-background max-w-screen-2xl mx-auto p-4 flex flex-wrap items-center justify-between">
        <div class="flex-1 flex items-center">
          <A
            href="/"
            class="text-2xl font-bold ml-4 text-font whitespace-nowrap"
          >
            {window.location.hostname}
          </A>
          <div class="flex-grow" />
          <div class="hidden lg:flex">
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
        <div class="block lg:hidden">
          <details class="dropdown dropdown-end">
            <summary class="btn btn-ghost">
              <i class="fas fa-bars"></i>
            </summary>
            <ul
              tabIndex="0"
              class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-0 py-2 shadow border border-primary"
            >
              <For each={navLinks}>
                {({ title, fontAwesomeIcon, href }) => (
                  <li>
                    <A
                      href={href}
                      class="menu-title text-zinc-300 hover:text-white"
                    >
                      <div class="flex flex-row items-center gap-2">
                        <div class="flex w-8 justify-center">
                          <i class={fontAwesomeIcon}></i>
                        </div>
                        <span>{title}</span>
                      </div>
                    </A>
                  </li>
                )}
              </For>
            </ul>
          </details>
        </div>
      </div>

      <hr class="border-[1px] border-primary" />
    </>
  );
};
