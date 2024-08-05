/* @refresh reload */
import { ErrorBoundary, render } from "solid-js/web";

import "./index.css";
import "./sentry";
import { Route, Router } from "@solidjs/router";
import RedirectMiddleware from "./middleware/redirection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Social from "./pages/Social";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

const App = (props: any) => (
  <>
    <RedirectMiddleware />
    <Header />
    <div class="flex-grow flex-shrink-0 flex-auto flex flex-col">{props.children}</div>
    <Footer />
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
  root!
);