import { Component, For, Match, Switch } from "solid-js";
import { isRedirecting } from "../middleware/redirection";
import { A } from "@solidjs/router";

interface SocialCardProps {
  title: string;
  url: string;
  alias: string;
  logo?: string;
}

const SocialList = [] as SocialCardProps[];
SocialList.push({ title: "Discord", url: "https://discord.gg/4w2v3Jh", alias: "linventif" });

const Social: Component = () => {
  console.log(isRedirecting());
  return (
    <div class="flex flex-col items-center justify-center gap-6 my-auto w-full">
      <For each={SocialList}>
        {({ title, url, alias, logo }) => (
          <A href={url} class="border w-[300px] border-primary rounded-md primary flex flex-col items-center gap-2 p-2">
            <h1 class="text-2xl font-bold">{title}</h1>
            <p class="text-xl">{alias}</p>
          </A>
        )}
      </For>
    </div>
  );
};

export default Social;