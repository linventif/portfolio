import { Component, For, Show } from "solid-js";

interface TimelineItem {
  date: string;
  title: string;
  establishment: string;
  description: string;
}

const timeline = [
  // {
  //   date: "2022 - 2025",
  //   title: "Computer Science Bachelor's Degree",
  //   establishment: "University of Lille",
  //   description:
  //     "I'm currently in my last year of my Bachelor's and I'm very proud of it, I learned a lot of things" +
  //     " give me perspective on technology I first learned myself, I also learned a lot of new things and" +
  //     " I'm very happy to have chosen this path. Also the way of teaching is very different from the High School" +
  //     " and it's way more like the Freinet pedagogy I had in my elementary school, with work by project, group work," +
  //     " and a lot of autonomy.",
  // },
  // {
  //   date: "2019 - 2022",
  //   title: "High School Diploma with Honors",
  //   establishment: "Lycée César Baggio",
  //   description:
  //     "Return to classic pedagogy, and god it was hard, going from a Freinet pedagogy where teachers encourage" +
  //     " you to learn by yourself, present your work to the class and be proud of it, to a classic pedagogy where" +
  //     " teachers don't care about you and just want you to learn by heart and do the same thing as everyone else." +
  //     " But I managed to get my High School Diploma with honors and I'm very proud of it.",
  // },
  // {
  //   date: "2016 - 2019",
  //   title: "Middle School Diploma with Honors",
  //   establishment: "Collège François Rabelais",
  //   description:
  //     "In the continuation of my elementary school, I continued my education in a Freinet pedagogy school, in it I" +
  //     " started the Clibing Section and I was able to discover competition, I even won a few medals and go the the" +
  //     " national competition. I also started have very big interest in computer science, electronics and 3D modeling.",
  // },
  // {
  //   date: "2013 - 2016",
  //   title: "School Diploma",
  //   establishment: "École Primaire Prévert",
  //   description:
  //     "I started my education in a Freinet pedagogy school with a focus on autonomy, creativity, and" +
  //     " cooperation. For my this pedagogy is the best way to learn and I'm very grateful to my parents for" +
  //     " choosing this school for me.",
  // },
  {
    date: "2022 - now",
    title: "Computer Science Bachelor's Degree",
    establishment: "University of Lille",
    description: "",
  },
];
// TODO
export const ScholarTimeline: Component = () => {
  return (
    <>
      <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <For each={timeline}>
          {({ date, title, description, establishment }, index) => (
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
                class={`mx-2 timeline-${index() % 2 === 0 ? "start" : "end"} mb-10 ${index() % 2 === 0 ? "md:text-end" : ""}`}
              >
                <time class="font-mono italic">{date}</time>
                <div class="text-lg font-black">
                  {title} at <span class="text-blue">{establishment}</span>
                </div>
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
