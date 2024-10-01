import { Component, For, Show } from "solid-js";

const timeline = [
  {
    date: "2004",
    title: "Born in France",
    description:
      "Born in France, I grew up in a small town near Lille, where I developed a passion for climbing and technology.",
  },
  {
    date: "2012",
    title: "Started Climbing",
    description:
      "Began climbing at the age of 7 and quickly became passionate about the sport.",
  },
  {
    date: "2015",
    title: "Started Competing in Climbing",
    description:
      "Entered competitive climbing and participated in various competitions.",
  },
  {
    date: "2016",
    title: "Started Coding with C++ on Arduino",
    description:
      "At the age of 14, began coding using C++ on Arduino, marking the start of my journey in programming.",
  },
  {
    date: "2017",
    title: "Learned 3D Modeling with Google Sketchup & Fusion 360",
    description:
      "Started learning 3D modeling to design and 3D print components for DIY electronic projects. Shared open-source designs on Cults3D.",
  },
  {
    date: "2018",
    title: "Learned Source Engine Mapping for Garry's Mod",
    description:
      "Began learning Source Engine Mapping for Garry's Mod, advancing my skills in game development.",
  },
  {
    date: "2020",
    title: "Created First Garry's Mod Server",
    description:
      "Launched my first Gmod server, expanding my practical knowledge in server management and gaming.",
  },
  {
    date: "2021",
    title: "Started Learning Lua for Gmod Addons",
    description:
      "Focused on learning Lua to create open-source addons for my Gmod server, sharing them with the community.",
  },
  {
    date: "2023",
    title: "Learning DiscordJS and Web Development",
    description:
      "Started learning DiscordJS and web development to create a SaaS, Gmod Integration, which interconnects my Gmod server and Discord community.",
  },
  {
    date: "Present",
    title: "Studying at University of Lille",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science at the University of Lille, with aspirations to achieve a Master's degree and potentially a PhD.",
  },
];

// edit every date to be "[year] - [age]yo"
timeline.forEach((item, index) => {
  let year = parseInt(item.date);
  if (isNaN(year)) {
    year = new Date().getFullYear();
  }
  item.date = `${item.date} - ${year - 2004}yo`;
});
timeline.reverse();
/*
bac +3 : 2024-2025 : 19-20yo
bac +2 : 2023-2024 : 18-19yo
bac +1 : 2022-2023 : 17-18yo
terminale : 2021-2022 : 16-17yo
1ere : 2020-2021 : 15-16yo
2nde : 2019-2020 : 14-15yo
3eme : 2018-2019 : 13-14yo
4eme : 2017-2018 : 12-13yo
5eme : 2016-2017 : 11-12yo
6eme : 2015-2016 : 10-11yo
CM2 : 2014-2015 : 9-10yo
CM1 : 2013-2014 : 8-9yo
CE2 : 2012-2013 : 7-8yo
CE1 : 2011-2012 : 6-7yo
CP : 2010-2011 : 5-6yo
 */
export const AboutMe: Component = () => {
  return (
    <>
      <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <For each={timeline}>
          {({ date, title, description }, index) => (
            <li>
              {index() !== 0 && <hr />}
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div
                class={`timeline-${index() % 2 === 0 ? "start" : "end"} mb-10 ${index() % 2 === 0 ? "md:text-end" : ""}`}
              >
                <time class="font-mono italic">{date}</time>
                <div class="text-lg font-black">{title}</div>
                {description}
              </div>
              <Show when={index() !== timeline.length - 1}>
                <hr />
              </Show>
            </li>
          )}
        </For>
      </ul>
    </>
  );
};
