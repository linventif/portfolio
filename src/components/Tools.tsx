import { Component, createSignal, For, Show } from "solid-js";
import {
  Category,
  ExperienceLevel,
  ExperienceLevelDescription,
} from "../utils";
import { A } from "@solidjs/router";

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
    name: "AI",
    icon: "fa-solid fa-brain",
    description: "AI tools are used to create intelligent systems.",
    id: "ai",
  },
  {
    name: "IDE",
    icon: "fa-solid fa-laptop-code",
    description: "IDEs are used to write and debug code.",
    id: "ide",
  },
  {
    name: "OS",
    icon: "fa-solid fa-desktop",
    description:
      "Operating Systems are the software that manages computer hardware.",
    id: "os",
  },
  {
    name: "3D / Game Development",
    icon: "fa-solid fa-gamepad",
    description: "Game engines are used to create video games.",
    id: "3d-game-engines",
  },
  {
    name: "Miscellaneous",
    icon: "fa-solid fa-toolbox",
    description: "Miscellaneous tools are used for various purposes.",
    id: "miscellaneous",
  },
];

function getCategoriesFromID(...ids: string[]): Category[] {
  return toolsCategories.filter((cat) => ids.includes(cat.id));
}

export interface Tool {
  name: string;
  image: string;
  url: string;
  categories: Category[];
  experienceLevel: ExperienceLevel;
}

const toolsList: Tool[] = [
  // Languages
  {
    name: "TypeScript",
    image: "/tools/typescript.png",
    url: "https://typescriptlang.org",
    experienceLevel: ExperienceLevel.Professional,
    categories: getCategoriesFromID("languages"),
  },
  {
    name: "Go",
    image: "/tools/go.png",
    url: "https://golang.org",
    experienceLevel: ExperienceLevel.SchoolProject,
    categories: getCategoriesFromID("languages"),
  },
  // Frameworks
  {
    name: "SolidJS",
    image: "/tools/solidjs.png",
    url: "https://solidjs.com",
    experienceLevel: ExperienceLevel.Professional,
    categories: getCategoriesFromID("frameworks"),
  },
  // Database
  {
    name: "Visual Studio Code",
    image: "/tools/vscode.png",
    categories: getCategoriesFromID("ide"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://code.visualstudio.com/",
  },
  {
    name: "DataGrip",
    image: "/tools/datagrip.png",
    categories: getCategoriesFromID("ide"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.jetbrains.com/datagrip/",
  },
  {
    name: "IntelliJ IDEA",
    image: "/tools/intellij.png",
    categories: getCategoriesFromID("ide"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.jetbrains.com/idea/",
  },
  {
    name: "WebStorm",
    image: "/tools/webstorm.png",
    categories: getCategoriesFromID("ide"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.jetbrains.com/webstorm/",
  },
  {
    name: "CLion",
    image: "/tools/clion.png",
    categories: getCategoriesFromID("ide"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.jetbrains.com/clion/",
  },
  {
    name: "Java",
    image: "/tools/java.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.java.com/",
  },
  {
    name: "HTML",
    image: "/tools/html.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    image: "/tools/css.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Javascript",
    image: "/tools/js.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "C",
    image: "/tools/c.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  {
    name: "C++",
    image: "/tools/c++.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.HobbyProject,
    url: "https://www.cplusplus.com/",
  },
  {
    name: "Lua",
    image: "/tools/lua.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.lua.org/",
  },
  {
    name: "Python",
    image: "/tools/python.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.python.org/",
  },
  {
    name: "NodeJS",
    image: "/tools/nodejs.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://nodejs.org/",
  },
  {
    name: "PM2",
    image: "/tools/pm2.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://pm2.keymetrics.io/",
  },
  {
    name: "DiscordJS",
    image: "/tools/djs.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://discord.js.org/",
  },
  {
    name: "Express",
    image: "/tools/express.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://expressjs.com/",
  },
  {
    name: "EJS",
    image: "/tools/ejs.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.HobbyProject,
    url: "https://ejs.co/",
  },
  {
    name: "Windows",
    image: "/tools/windows.png",
    categories: getCategoriesFromID("os"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.microsoft.com/en-us/windows",
  },
  {
    name: "Ubuntu",
    image: "/tools/ubuntu.png",
    categories: getCategoriesFromID("os"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://ubuntu.com/",
  },
  {
    name: "Debian",
    image: "/tools/debian.png",
    categories: getCategoriesFromID("os"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.debian.org/",
  },
  {
    name: "Nginx",
    image: "/tools/nginx.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.nginx.com/",
  },
  {
    name: "Apache",
    image: "/tools/apache.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://httpd.apache.org/",
  },
  {
    name: "Tomcat",
    image: "/tools/tomcat.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "http://tomcat.apache.org/",
  },
  {
    name: "MySQL",
    image: "/tools/mysql.png",
    categories: getCategoriesFromID("databases"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.mysql.com/",
  },
  {
    name: "MariaDB",
    image: "/tools/mariadb.png",
    categories: getCategoriesFromID("databases"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://mariadb.org/",
  },
  {
    name: "Redis",
    image: "/tools/redis.png",
    categories: getCategoriesFromID("databases"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://redis.io/",
  },
  {
    name: "PostgresSQL",
    image: "/tools/postgres-sql.png",
    categories: getCategoriesFromID("databases"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.postgresql.org/",
  },
  {
    name: "Unreal Engine",
    image: "/tools/unreal.png",
    categories: getCategoriesFromID("3d-game-engines"),
    experienceLevel: ExperienceLevel.HobbyProject,
    url: "https://www.unrealengine.com/",
  },
  {
    name: "Source Engine",
    image: "/tools/source.png",
    categories: getCategoriesFromID("3d-game-engines"),
    experienceLevel: ExperienceLevel.HobbyProject,
    url: "https://partner.steamgames.com/doc/sdk",
  },
  {
    name: "Blender",
    image: "/tools/blender.png",
    categories: getCategoriesFromID("3d-game-engines"),
    experienceLevel: ExperienceLevel.HobbyProject,
    url: "https://www.blender.org/",
  },
  {
    name: "Fusion 360",
    image: "/tools/fusion.png",
    categories: getCategoriesFromID("3d-game-engines"),
    experienceLevel: ExperienceLevel.HobbyProject,
    url: "https://www.autodesk.com/products/fusion-360/",
  },
  {
    name: "Sketchup",
    image: "/tools/sketchup.png",
    categories: getCategoriesFromID("3d-game-engines"),
    experienceLevel: ExperienceLevel.HobbyProject,
    url: "https://www.sketchup.com/",
  },
  {
    name: "Midjourney",
    image: "/tools/midjourney.png",
    categories: getCategoriesFromID("ai"),
    experienceLevel: ExperienceLevel.HobbyProject,
    url: "https://www.midjourney.com/",
  },
  {
    name: "Copilot",
    image: "/tools/copilot.png",
    categories: getCategoriesFromID("ai"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://copilot.github.com/",
  },
  {
    name: "Chat GPT",
    image: "/tools/chatgpt.png",
    categories: getCategoriesFromID("ai", "apis"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://openai.com/chatgpt",
  },
  {
    name: "Git",
    image: "/tools/git.png",
    categories: getCategoriesFromID("devops"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    image: "/tools/github.png",
    categories: getCategoriesFromID("devops"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://github.com/",
  },
  {
    name: "GitLab",
    image: "/tools/gitlab.png",
    categories: getCategoriesFromID("devops"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://gitlab.com/",
  },
  {
    name: "Cloudflare",
    image: "/tools/cloudflare.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.cloudflare.com/",
  },
  {
    name: "SQL",
    image: "/tools/sql.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://en.wikipedia.org/wiki/SQL",
  },
  {
    name: "WireShark",
    image: "/tools/wireshark.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.wireshark.org/",
  },
  {
    name: "VirtualBox",
    image: "/tools/virtualbox.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.virtualbox.org/",
  },
  {
    name: "Jupyter Notebook",
    image: "/tools/jupyter.png",
    categories: getCategoriesFromID("ide"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://jupyter.org/",
  },
  {
    name: "Proxmox",
    image: "/tools/proxmox.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.proxmox.com/",
  },
  {
    name: "IJava",
    image: "/tools/ijava.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://github.com/SpencerPark/IJava",
  },
  {
    name: "WordPress",
    image: "/tools/wordpress.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://wordpress.org/",
  },
  {
    name: "Java EE",
    image: "/tools/java.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.oracle.com/java/technologies/java-ee-glance.html",
  },
  {
    name: "Java FX",
    image: "/tools/javafx.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://openjfx.io/",
  },
  {
    name: "JQuery",
    image: "/tools/jquery.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://jquery.com/",
  },
  {
    name: "SQLite",
    image: "/tools/sqlite.png",
    categories: getCategoriesFromID("databases"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.sqlite.org/",
  },
  {
    name: "Android Studio",
    image: "/tools/android-studio.png",
    categories: getCategoriesFromID("ide"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://developer.android.com/studio",
  },
  {
    name: "GNS3",
    image: "/tools/gns3.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.gns3.com/",
  },
  {
    name: "SolidWorks",
    image: "/tools/solidworks.png",
    categories: getCategoriesFromID("3d-game-engines"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.solidworks.com/",
  },
  {
    name: "Scrum",
    image: "/tools/scrum.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.scrum.org/",
  },
  {
    name: "Kanban",
    image: "/tools/kanban.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.atlassian.com/agile/kanban",
  },
  {
    name: "TDD",
    image: "/tools/tdd.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://en.wikipedia.org/wiki/Test-driven_development",
  },
  {
    name: "JUnit",
    image: "/tools/junit.png",
    categories: getCategoriesFromID("devops"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://junit.org/junit5/",
  },
  {
    name: "Gherkin",
    image: "/tools/gherkin.png",
    categories: getCategoriesFromID("devops"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://cucumber.io/docs/gherkin/",
  },

  {
    name: "PayPal",
    image: "/tools/paypal.png",
    categories: getCategoriesFromID("apis"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.paypal.com/",
  },
  {
    name: "Stripe",
    image: "/tools/stripe.png",
    categories: getCategoriesFromID("apis"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://stripe.com/",
  },
  {
    name: "Docker",
    image: "/tools/docker.png",
    categories: getCategoriesFromID("devops"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.docker.com/",
  },
  {
    name: "Postman",
    image: "/tools/postman.png",
    categories: getCategoriesFromID("apis"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.postman.com/",
  },
  {
    name: "Bruno",
    image: "/tools/bruno.png",
    categories: getCategoriesFromID("apis"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.bruno.com/",
  },
  {
    name: "Kubernetes",
    image: "/tools/kubernetes.png",
    categories: getCategoriesFromID("devops"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://kubernetes.io/",
  },
  {
    name: "GitKraken",
    image: "/tools/gitkraken.png",
    categories: getCategoriesFromID("devops"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.gitkraken.com/",
  },
  {
    name: "Figma",
    image: "/tools/figma.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.figma.com/",
  },
  {
    name: "Discord",
    image: "/tools/discord.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://discord.com/",
  },
  {
    name: "Trello",
    image: "/tools/trello.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://trello.com/",
  },
  {
    name: "Genially",
    image: "/tools/genially.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.genial.ly/",
  },
];

export function getToolsByNames(...names: string[]): Tool[] {
  return toolsList.filter((tool) => names.includes(tool.name));
}

const levelArray = Object.values(ExperienceLevel);

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
                  //     set active tools to the tools that have at least one of the active categories
                  setActiveTools(
                    toolsList.filter((tool) => {
                      if (!tool.categories) return false;
                      return tool.categories.some((cat) =>
                        activeCategories.includes(cat),
                      );
                    }),
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

      <For each={levelArray}>
        {(level) => (
          <>
            <Show
              when={
                activeTools().filter((tool) => tool.experienceLevel === level)
                  .length > 0
              }
            >
              <div class="text-left p-4">
                {/*  title: level */}
                <h2 class="text-2xl font-bold text-blue">{level}</h2>
                {/*  descripton: ExperienceLevelDescription[level].tools*/}
                <p class="text-zinc-300">
                  {ExperienceLevelDescription[level].tools}
                </p>
              </div>

              <div class="flex flex-wrap gap-4">
                <For
                  each={activeTools().filter(
                    (tool) => tool.experienceLevel === level,
                  )}
                >
                  {(tool) => (
                    <A
                      href={tool.url}
                      class="flex flex-col items-center gap-2 w-32 h-32"
                    >
                      <img
                        src={tool.image}
                        alt={tool.name}
                        class="max-h-12 max-w-12"
                      />
                      <span class="text-zinc-300">{tool.name}</span>
                    </A>
                  )}
                </For>
              </div>
            </Show>
          </>
        )}
      </For>
    </>
  );
};
