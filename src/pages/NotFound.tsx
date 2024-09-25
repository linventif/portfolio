import { Component, Match, Switch } from "solid-js";
import { isRedirecting } from "../middleware/redirection";
import { A } from "@solidjs/router";

const NotFound: Component = () => {
  return (
    <div class="flex flex-col items-center justify-center gap-4 h-lvh">
      <Switch>
        <Match when={isRedirecting() != ""}>
          <h1 class="text-2xl font-bold">Redirecting...</h1>
          <A href={isRedirecting()} class="link text-xl">
            Click here if you are not redirected.
          </A>
        </Match>
        <Match when={isRedirecting() == ""}>
          <h1 class="text-6xl font-bold mb-4">404</h1>
          <p class="text-xl">The page you are looking for does not exist.</p>
          <A href="/" class="link text-xl">
            Go back to the home page.
          </A>
        </Match>
      </Switch>
    </div>
  );
};

export default NotFound;
