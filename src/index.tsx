/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import { Route, Router } from "@solidjs/router";
import RedirectMiddleware from "./middleware/redirection";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Social from "./pages/Social";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

const App = (props: any) => (
  <>
    <RedirectMiddleware />
    <div class="flex flex-col px-4 w-screen max-w-screen-2xl mx-auto">
      {props.children}
    </div>
  </>
);

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/social" component={Social} />
      <Route path="*" component={NotFound} />
    </Router>
  ),
  root!,
);
