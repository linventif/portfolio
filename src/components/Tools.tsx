import { Component, createSignal, For } from "solid-js";
import { Category } from "../utils";

let [activeToolsCategory, setActiveToolsCategory] = createSignal(
  [] as Category[],
);

const toolsCategories: Category[] = [
  {
    name: "Programming Languages",
    icon: "fa-solid fa-code",
    description:
      "Programming languages are the foundation of software development.",
    id: "languages",
  },
  {
    name: "Frameworks",
    icon: "fa-solid fa-cogs",
    description:
      "Frameworks are libraries that provide pre-built solutions for common problems.",
    id: "frameworks",
  },
  {
    name: "Databases",
    icon: "fa-solid fa-database",
    description: "Databases are used to store and manage data.",
    id: "databases",
  },
  {
    name: "DevOps",
    icon: "fa-solid fa-server",
    description:
      "DevOps is a set of practices that combines software development and IT operations.",
    id: "devops",
  },
  {
    name: "Design",
    icon: "fa-solid fa-palette",
    description: "Design is the process of creating visual content.",
    id: "design",
  },
  {
    name: "APIs",
    icon: "fa-solid fa-network-wired",
    description: "APIs are used to connect different software applications.",
    id: "apis",
  },
  {
    name: "Miscellaneous",
    icon: "fa-solid fa-toolbox",
    description: "Miscellaneous tools are used for various purposes.",
    id: "misc",
  },
];

function getCategoryFromID(id: string): Category {
  return toolsCategories.find((category) => category.id === id) as Category;
}

export interface Tool {
  name: string;
  description: string;
  image: string;
  url: string;
  category: Category;
}

const toolsList: Tool[] = [
  {
    name: "TypeScript",
    description:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/typescript.svg",
    url: "https://typescriptlang.org",
    category: getCategoryFromID("languages"),
  },
  {
    name: "SolidJS",
    description:
      "SolidJS is a declarative JavaScript library for building user interfaces.",
    image: "https://solidjs.com/logo.svg",
    url: "https://solidjs.com",
    category: getCategoryFromID("frameworks"),
  },
];

const [activeTools, setActiveTools] = createSignal(toolsList as Tool[]);

export const Tools: Component = () => {
  return (
    <>
      <div class="flex flex-wrap gap-4 py-4">
        <For each={toolsCategories}>
          {(category) => (
            <button
              class="btn btn-primary btn-outline"
              classList={{
                "!btn-active": activeToolsCategory().includes(category),
              }}
              onClick={() => {
                if (activeToolsCategory().includes(category)) {
                  setActiveToolsCategory(
                    activeToolsCategory().filter((cat) => cat !== category),
                  );
                } else {
                  setActiveToolsCategory([...activeToolsCategory(), category]);
                }

                const activeCategories = activeToolsCategory();
                if (activeCategories.length === 0) {
                  setActiveTools(toolsList);
                } else {
                  setActiveTools(
                    toolsList.filter((tool) =>
                      activeCategories.includes(tool.category),
                    ),
                  );
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

      <For each={activeTools()}>
        {(tool) => (
          <div class="flex flex-col gap-4">
            <div class="flex flex-row gap-4">
              <img
                src={tool.image}
                alt={tool.name}
                class="w-12 h-12 rounded-full"
              />
              <div class="flex flex-col">
                <a
                  href={tool.url}
                  class="text-lg font-bold text-blue hover:text-blue-500"
                >
                  {tool.name}
                </a>
                <p>{tool.description}</p>
              </div>
            </div>
          </div>
        )}
      </For>
    </>
  );
};
