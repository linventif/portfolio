import { createEffect, createSignal } from "solid-js";
import { useLocation, useNavigate } from "@solidjs/router";

interface RedirectLink {
  url: string;
  redirect: string;
  exact?: boolean;
  func?: (path: string) => void;
}

const redirections: RedirectLink[] = [
  {
    url: "/github",
    redirect: "https://github.com/linventif",
  },
];

export const [isRedirecting, setRedirecting] = createSignal("");

const RedirectMiddleware = () => {
  const location = useLocation();
  const navigate = useNavigate();

  createEffect(() => {
    setRedirecting("");
    const currentPath = location.pathname + location.search;
    const redirectRule = redirections.find((r) => currentPath.startsWith(r.url));

    if (redirectRule && redirectRule.func) {
      redirectRule.func(currentPath);
      return;
    }

    if (!redirectRule) return;
    if (redirectRule.exact && currentPath !== redirectRule.url) return;
    if (currentPath === redirectRule.redirect) return;

    const pathToRedirect = currentPath.replace(redirectRule.url, redirectRule.redirect);
    setRedirecting(pathToRedirect);
    if (redirectRule.redirect.startsWith("/")) {
      navigate(pathToRedirect);
    } else {
      window.location.href = pathToRedirect;
    }
  });

  return null;
};

export default RedirectMiddleware;
