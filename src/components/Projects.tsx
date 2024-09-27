import { Component, createSignal, For } from "solid-js";
import { Category } from "../utils";
import { Tool } from "./Tools";

interface Project {
  name: string;
  description: string;
  categories: Category;
  url: string;
  tools: Tool[];
  image: string;
}

let [activeProjectsCategory, setActiveProjectsCategory] = createSignal(
  [] as Category[],
);

const projectsCategories: Category[] = [
  {
    name: "University of Lille",
    icon: "fa-solid fa-graduation-cap",
    id: "university",
  },
  {
    name: "Garry's Mod",
    icon: "fa-solid fa-gamepad",
    id: "gmod",
  },
  {
    name: "3D Printing",
    icon: "fa-solid fa-cube",
    id: "3d",
  },
  {
    name: "Web Development",
    icon: "fa-solid fa-code",
    id: "web",
  },
];

export const Projects: Component = () => {
  return (
    <>
      <div class="flex flex-row gap-4 py-4">
        <For each={projectsCategories}>
          {(category) => (
            <button
              class="btn btn-primary btn-outline"
              classList={{
                "!btn-active": activeProjectsCategory().includes(category),
              }}
              onClick={() => {
                if (activeProjectsCategory().includes(category)) {
                  setActiveProjectsCategory(
                    activeProjectsCategory().filter((cat) => cat !== category),
                  );
                } else {
                  setActiveProjectsCategory([
                    ...activeProjectsCategory(),
                    category,
                  ]);
                }
              }}
            >
              <i class={`${category.icon} mr-2 text-blue`}></i>
              <span class="text-zinc-300 hover:text-white">
                {category.name}
              </span>
            </button>
          )}
        </For>
      </div>
    </>
  );
};
