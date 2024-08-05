import { Component, createSignal, Show } from "solid-js";
import { A } from "@solidjs/router";

export const API_VERSION = "v3";
const devFQDN = "http://localhost:53136";
const prodFQDN = "https://api.gmod-integration.com";
const devWss = "ws://localhost:53139";
const prodWss = "wss://ws.gmod-integration.com";
const devInvite = "https://discord.com/oauth2/authorize?client_id=1136093457782415420&permissions=8&scope=bot";
const prodInvite = "https://discord.com/oauth2/authorize?client_id=1110121451501129758&permissions=8&scope=bot";

export const API_FQDN = window.location.href.includes("localhost")
  ? `${devFQDN}/${API_VERSION}`
  : `${prodFQDN}/${API_VERSION}`;

// export const WS_URL = (window.location.href.includes("localhost") ? devWss : prodWss) + "?token=" + localStorage.getItem("accessToken") + "&discordID=" + localStorage.getItem("discordID");
export function getWSUrl(action: string, params: Array<string> = []) {
  let baseUrl = window.location.href.includes("localhost") ? devWss : prodWss;
  baseUrl += "?action=" + action;
  baseUrl += "&token=" + localStorage.getItem("accessToken");
  baseUrl += "&discordID=" + localStorage.getItem("discordID");
  params.forEach((param) => {
    baseUrl += `&${param}`;
  });
  return baseUrl;
}

export const INVITE_URL = window.location.href.includes("localhost") ? devInvite : prodInvite;

export function getAPIUrl(withVersion = true) {
  if (withVersion) {
    return API_FQDN;
  }
  return window.location.href.includes("localhost") ? devFQDN : prodFQDN;
}

export function linkifyEmails(text: string) {
  const emailPattern = /(\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b)/gi;
  return text.replace(emailPattern, "<a class=\"text-blue hover:text-blue-active\" href=\"mailto:$1\">$1</a>");
}

export function getGuild() {
  return JSON.parse(localStorage.getItem("guilds") || "{}");
}

export function getServer() {
  return JSON.parse(localStorage.getItem("server") || "{}");
}

export function getDiscordUser() {
  return JSON.parse(localStorage.getItem("discordUser") || "{}");
}

export const NeedWebsocket: Component = () => {
  return <>
    <div class="text-info flex h-12 items-center rounded-lg border-info border p-4 gap-4">
      <i class="fa-solid fa-info-circle"></i>
      <span>This feature requires a <A class="link" href="https://github.com/FredyH/GWSockets/releases">GWSocket</A> connection to work properly.</span>
    </div>
  </>;
};

export function isPremium() {
  return getGuild().isPremium;
}

export const PremiumFeature: Component = (props: any) => {
  const [guildIsPremium] = createSignal(isPremium());
  return <>
    <Show when={!guildIsPremium()}>
      <div class="text-amber-400 flex h-12 items-center rounded-lg border-amber-400 border p-4 gap-4">
        <i class="fas fa-crown"></i>
        <span>{props.message ? props.message : "This feature requires a premium plan."} <A class="link" href="/premium">Upgrade Now</A></span>
      </div>
    </Show>
  </>;
};

export function getUrlWithActualParams(url: string) {
  url = url.replace(":discordID", localStorage.getItem("discordID") || "");
  url = url.replace(":serverID", JSON.parse(localStorage.getItem("server") || "{}").id || "");
  url = url.replace(":userID", JSON.parse(localStorage.getItem("discordUser") || "{}").id || "");
  url = url.replace(":guildID", JSON.parse(localStorage.getItem("guilds") || "{}").id || "");
  return url;
}

export function fetchAPI(endpoint: string, method: string, body?: any) {
  endpoint = getUrlWithActualParams(endpoint);
  return fetch(`${API_FQDN}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    },
    body: JSON.stringify(body)
  });
}

export function convertSecToTime(seconds: number, string = true) {
  const time = [0, 0, 0, 0, 0];
  time[4] = seconds % 60;
  time[3] = Math.floor(seconds / 60) % 60;
  time[2] = Math.floor(seconds / 60 / 60) % 24;
  time[1] = Math.floor(seconds / 60 / 60 / 24) % 7;
  time[0] = Math.floor(seconds / 60 / 60 / 24 / 7);
  if (string) {
    let timeString = "";
    if (time[0] > 0) timeString += `${time[0]}w `;
    if (time[1] > 0) timeString += `${time[1]}d `;
    if (time[2] > 0) timeString += `${time[2]}h `;
    if (time[3] > 0) timeString += `${time[3]}m `;
    if (time[4] > 0) timeString += `${time[4]}s`;
    if (timeString === "") return "0s";
    return timeString;
  }
}