import { Component } from "solid-js";
import { A } from "@solidjs/router";

export const Footer: Component = () => {
  return (
    <>
      <div class="flex flex-shrink-0 flex-col">
        <hr class="border-[1px] border-primary" />
        <footer class="footer px-10 py-4 bg-background text-base-content max-w-screen-2xl mx-auto">
          <aside class="items-center grid-flow-col">
            <div class="ml-2 flex flex-col">
              <h3 class="text-font font-bold">{window.location.hostname}</h3>
              <p>Created with ❤️ by <A href="https://github.com/linventif" class="link">Linventif</A>.</p>
            </div>
          </aside>
        </footer>
      </div>
    </>
  );
};
