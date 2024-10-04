import { Component, createSignal, For, Show } from "solid-js";
import {
  Category,
  ExperienceLevel,
  ExperienceLevelDescription,
} from "../utils";
import { getToolsByNames, Tool } from "./Tools";
import { A } from "@solidjs/router";

enum LinkType {
  Website = "Website",
  GitHub = "GitHub",
  GitLab = "GitLab",
  YouTube = "YouTube",
}

interface Link {
  name: string;
  url: string;
  type: LinkType;
}

const LinkIcon = {
  [LinkType.Website]: "fa-solid fa-globe",
  [LinkType.GitHub]: "fa-brands fa-github",
  [LinkType.GitLab]: "fa-brands fa-gitlab",
  [LinkType.YouTube]: "fa-brands fa-youtube",
};

interface Project {
  name: string;
  description: string;
  categories: Category[];
  experienceLevel: ExperienceLevel;
  tools: Tool[];
  date: string;
  images: string[];
  languages: string[];
  links?: Link[];
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

function getCategoriesFromID(...ids: string[]): Category[] {
  return projectsCategories.filter((cat) => ids.includes(cat.id));
}

const projectsList: Project[] = [
  {
    name: "SNEE - Gmod Integration",
    description: `
                Gmod Integration is an innovative platform designed to create interaction between Garry\'s Mod servers and their Discord communities.
                This all-in-one service offers advanced features such as chat synchronization, player statistics and a trust factor system, all with quick and easy setup.
                Praised by more than +400 servers for a total of +65,000 users, Gmod Integration is the solution of choice to enrich community interactions.
                We adopt a freemium business model, offering free basic services as well as tailor-made solutions and premium subscriptions.
            `,
    links: [
      {
        name: "Website",
        url: "https://gmod-integration.com",
        type: LinkType.Website,
      },
      {
        name: "GitHub",
        url: "https://github.com/gmod-integration",
        type: LinkType.GitHub,
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/watch?v=XOb_u4N8OSk&list=PL0VrTsrJCBkHeKQ_yLky2utOA2NDXpSa_",
        type: LinkType.YouTube,
      },
    ],
    images: [
      "/projects/gmod_integration_main.png",
      "/projects/gmod_integration_bot.png",
      "/projects/gmod_integration_link.png",
      "/projects/gmod_integration_profile.png",
      "/projects/gmod_integration_verif.png",
      "/projects/gmod_integration_panel.png",
    ],
    experienceLevel: ExperienceLevel.Professional,
    tools: getToolsByNames(
      "HTML",
      "CSS",
      "JavaScript",
      "NodeJS",
      "Express",
      "MariaDB",
      "Redis",
      "Nginx",
      "Cloudflare",
      "TypeScript",
      "Bruno",
      "Git",
      "GitHub",
      "Kubernetes",
      "Ubuntu",
      "DJS",
      "SQL",
      "Figma",
      "Tailwind CSS",
      "Daisy UI",
      "PM2",
      "Sentry",
    ),
    date: "2023 - Current",
    languages: ["fr", "en", "tr", "en", "es", "de", "ru"],
    categories: getCategoriesFromID("gmod", "web"),
  },
  {
    name: "Internship - Web Development",
    description: `
                I am excited to share my progress on a significant project during my internship, which involved developing an intuitive web-based editor for 3D scene configuration.
                This project entailed creating a user-friendly interface that allows users to select predefined scenes, place and configure objects (such as assigning a PDF to a TV screen), and perform scene "baking" for realistic rendering of lights and shadows.
                Leveraging advanced technologies like Aframe, Three.js, and SolidJS coupled with Tailwind for UI design, this role has enhanced my skills in 3D manipulation and front-end programming, optimizing user experiences in virtual reality settings.
            `,
    links: [
      {
        name: "Website",
        url: "https://allocola.com",
        type: LinkType.Website,
      },
      {
        name: "GitHub",
        url: "https://github.com/vincentfretin/allocola",
        type: LinkType.GitHub,
      },
    ],
    images: [
      "/projects/internship/allocola_1.png",
      "/projects/internship/allocola_2.png",
      "/projects/internship/allocola_3.png",
      "/projects/internship/allocola_4.png",
      "/projects/internship/allocola_5.png",
    ],
    experienceLevel: ExperienceLevel.Professional,
    tools: getToolsByNames(
      "Aframe",
      "Three.js",
      "SolidJS",
      "Tailwind CSS",
      "Blender",
      "Unreal Engine",
      "Python",
      "TypeScript",
      "Daisy UI",
      "NodeJS",
      "PM2",
      "Sentry",
    ),
    date: "2024/S2",
    languages: ["en"],
    categories: getCategoriesFromID("web"),
  },
  {
    name: "SAE 5.01 (Emulation of a RISC-V processor)",
    description: `
                In project SAÉ 5.01, I developed a RISC-V emulator using GO, focusing on instruction and memory management.
                The project required advanced knowledge of RISC-V architecture and GO programming.
                My strengths in GO programming and system architecture were crucial for successful emulator development.
                The main challenge was implementing memory management, requiring extensive research.
                This project deepened my understanding of system architecture and RISC-V, preparing me for future projects involving system emulation.
            `,
    images: [
      "/projects/sae-5-01/accueil.png",
      "/projects/sae-5-01/emulateur.png",
      "/projects/sae-5-01/emulateur_2.png",
      "/projects/sae-5-01/emulateur_3.png",
    ],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/linventif/s5-sae-emulateur",
        type: LinkType.GitHub,
      },
    ],
    experienceLevel: ExperienceLevel.SchoolProject,
    tools: getToolsByNames("Go"),
    date: "2024/S2",
    languages: ["fr"],
    categories: getCategoriesFromID("university"),
  },
  {
    name: "SAE 4.02 - Web Development / Beat'em Up",
    description: `
                In project SAÉ 4.02, I developed a 2D Beat'em Up game using HTML, CSS, and JavaScript, focusing on game mechanics and user experience.
                The game features a player and enemies, with the goal of defeating all enemies to progress to the next level.
                A significant challenge was implementing enemy AI and player health management, requiring extensive research.
                This project deepened my understanding of game development and user experience, preparing me for future projects involving game development.
            `,
    links: [
      {
        name: "GitLab",
        url: "https://gitlab.univ-lille.fr/gregoire.launaybecue.etu/sae-2024-groupeI-launaybecue-mirey-collsson",
        type: LinkType.GitLab,
      },
    ],
    images: [
      "/projects/sae-4-02/accueil.png",
      "/projects/sae-4-02/jeu.png",
      "/projects/sae-4-02/jeu_2.png",
      "/projects/sae-4-02/jeu_3.png",
    ],
    experienceLevel: ExperienceLevel.SchoolProject,
    tools: getToolsByNames("HTML", "CSS", "JavaScript"),
    date: "2024/S1",
    languages: ["fr"],
    categories: getCategoriesFromID("university"),
  },
  {
    name: "SAE 4.01 - REST API / Pizza Delivery",
    description: `
                In project SAÉ 4.01, I developed a REST API for a fictional pizza delivery service, focusing on user authentication and order management.
                The project required advanced knowledge of Tomcat WebServlets, Java, and MySQL database management.
                My strengths in Java programming and database management were crucial for successful API development.
                The main challenge was implementing user authentication and order management, requiring extensive research.
                This project deepened my understanding of REST API development and database management, preparing me for future projects involving API development.
            `,
    links: [
      {
        name: "GitLab",
        url: "https://gitlab.univ-lille.fr/gregoire.launaybecue.etu/sae-web-s4",
        type: LinkType.GitLab,
      },
    ],
    images: [
      "/projects/sae-4-01/uml.png",
      "/projects/sae-4-01/postman.png",
      "/projects/sae-4-01/swagger.png",
    ],
    experienceLevel: ExperienceLevel.SchoolProject,
    tools: getToolsByNames(
      "Java",
      "Tomcat",
      "MySQL",
      "Bruno",
      "Swagger",
      "PostgresSQL",
    ),
    date: "2024/S1",
    languages: ["fr"],
    categories: getCategoriesFromID("university"),
  },
  {
    name: "SAE 3.03 - Secure Matrix Chat Deployment",
    description: `
                In project SAÉ 3.03, I secured Matrix Chat deployment on a Debian server with Element Web, focusing on secure communication and data privacy.
                The project required advanced knowledge of Debian, Nginx configuration, and SSL certificate installation.
                My strengths in system administration and network security were crucial for successful deployment.
                The main challenge was configuring Nginx to proxy requests to the Matrix server, requiring extensive research.
                This project deepened my understanding of secure application deployment and network security, preparing me for future projects involving secure communication systems.
            `,
    links: [
      {
        name: "GitLab",
        url: "https://gitlab.univ-lille.fr/etu/2023-2024/s303/i-launaybecue-collin",
        type: LinkType.GitLab,
      },
    ],
    images: [
      "/projects/sae-3-03/element_1.png",
      "/projects/sae-3-03/element_2.png",
      "/projects/sae-3-03/architecture.png",
    ],
    experienceLevel: ExperienceLevel.SchoolProject,
    tools: getToolsByNames(
      "Debian",
      "Nginx",
      "Matrix",
      "Element",
      "VirtualBox",
    ),
    categories: getCategoriesFromID("university"),
    date: "2023/S2",
    languages: ["fr"],
  },
  {
    name: "SAE 3.02 - 2D Monster Hunter Game",
    description: `
                In project SAÉ 3.02, I developed a 2D Monster Hunter-inspired game using javaFX, focusing on game mechanics and user experience.
                There are a monster and a hunter, and the goal is to kill the monster before it escapes the labyrinth.
                A big point of this project was the use Dijkstra's algorithm to made the AI of the monster and custom pathfinding for the hunter.
                The main challenge was the pathfinding of the hunter, but I managed to make it work.
                This project deepened my understanding of game development and pathfinding, preparing me for future projects involving game development.
            `,
    links: [
      {
        name: "GitLab",
        url: "https://gitlab.univ-lille.fr/sae302/2023/I3_SAE3A",
        type: LinkType.GitLab,
      },
    ],
    images: [
      "/projects/sae-3-02/cas-utilisation.png",
      "/projects/sae-3-02/diagrame_uml.png",
    ],
    tools: getToolsByNames("Java", "JavaFX", "Dijkstra's algorithm"),
    experienceLevel: ExperienceLevel.SchoolProject,
    date: "2023/S2",
    languages: ["fr"],
    categories: getCategoriesFromID("university"),
  },
  {
    name: "Scrum Week - Ascii Invaders",
    description: `
              AsciiInvader is a Space Invaders in command prompt, made in a group of 5 in a Scrum framework.
              The goal of this project was to get us back into programming after the summer break and to train us in the Scrum framework.
              Time being precious, we settled for 5 sprints of 3 hours spread over 4 days before presenting the final result to the first-year students.
          `,
    links: [
      {
        name: "GitLab",
        url: "https://gitlab.univ-lille.fr/2023-projet-agile-de-rentree/groupe-7",
        type: LinkType.GitLab,
      },
    ],
    images: ["/projects/back-to-school/ascii_invader.png"],
    tools: getToolsByNames("Java", "Scrum"),
    date: "2023/S2",
    languages: ["fr"],
    experienceLevel: ExperienceLevel.SchoolProject,
    categories: getCategoriesFromID("university"),
  },
  {
    name: "SAE 2.05 / 2.06 - Project Management / Teamwork",
    description: `
              In projects SAÉ 2.05 and 2.06, our goal was to enhance project management and teamwork skills through creating an escape game and managing its promotion.
              We designed captivating puzzles and an engaging storyline for the game, utilizing tools like Trello and Asana for project coordination.
              My creativity played a significant role, guiding the team from concept to execution seamlessly.
              Communication proved challenging due to frequent illnesses among team members.
              Nevertheless, these projects provided valuable experience in planning, coordinating, and collaborating within a team.
              They equipped us with essential skills for future careers requiring effective project management and teamwork.
          `,
    links: [
      {
        name: "Genially",
        url: "https://app.genial.ly/editor/642150f644300e001276ed76",
        type: LinkType.Website,
      },
    ],
    images: [
      "/projects/sae-2-05/affiche.png",
      "/projects/sae-2-05/img_3.png",
      "/projects/sae-2-05/img.png",
      "/projects/sae-2-05/img_1.png",
      "/projects/sae-2-05/img_2.png",
    ],
    tools: getToolsByNames("Genially"),
    date: "2023/S1",
    languages: ["fr"],
    experienceLevel: ExperienceLevel.SchoolProject,
    categories: getCategoriesFromID("university"),
  },
  {
    name: "SAE 1.04 / 2.04 - Introduction and Exploitation of BDD",
    description: `
              In project SAÉ 1.04, I developed a simple student management system using Microsoft Access forms to grasp database fundamentals.
              Project SAÉ 2.04 focused on a more intricate database using Olympic Games data, requiring advanced data manipulation skills.
              My strengths lay in prior knowledge of tools like Data Grip and SQL proficiency from extracurricular projects.
              The main challenge was the solo execution, yet I managed to master necessary skills.
              Database proficiency is crucial in computing, shaping my future goal of mastering various database systems like MySQL or PostgreSQL.
          `,
    links: [
      {
        name: "Moodle",
        url: "https://moodle.univ-lille.fr/course/view.php?id=30827&sectionid=266882",
        type: LinkType.Website,
      },
    ],
    images: ["/projects/sae-2-04/img.png"],
    tools: getToolsByNames("SQL", "PostgresSQL", "DataGrip", "Access"),
    date: "2022/S2",
    languages: ["fr"],
    experienceLevel: ExperienceLevel.SchoolProject,
    categories: getCategoriesFromID("university"),
  },
  {
    name: "SAE 1.03 / 2.03 - Debian Mate Workstation Installation",
    description: `
              In project SAÉ 1.03, I installed a Debian Mate workstation and virtualized a network system to enhance my networking and IP address management skills.
              Project SAÉ 2.03 focused on installing network services and configuring a virtualized system, allowing practical application of my system administration and network management knowledge.
              The overarching goal was to produce comprehensive documentation on Debian Mate workstation installation and configuration, with minimal challenges due to prior coursework coverage.
              My strength lay in virtualization and network configuration, stemming from personal experience managing home network infrastructures.
              These projects deepened my networking administration skills, IP address management, and technical documentation writing, preparing me for future IT projects involving network system installation and configuration.
          `,
    links: [
      {
        name: "Moodle",
        url: "https://moodle.univ-lille.fr/course/view.php?id=30827&sectionid=266881",
        type: LinkType.Website,
      },
    ],

    images: [
      "/projects/sae-1-03/sae_1.3_1.png",
      "/projects/sae-1-03/sae_1.3_2.png",
    ],
    tools: getToolsByNames("Debian", "VirtualBox", "GNS3"),
    date: "2022/S2",
    languages: ["fr"],
    experienceLevel: ExperienceLevel.SchoolProject,
    categories: getCategoriesFromID("university"),
  },
  {
    name: "SAE 1.05 / 1.06 - Eco-Friendly Transportation Promotion",
    description: `
              In projects SAÉ 1.05 and 1.06, we collaborated on a WordPress website promoting eco-friendly transportation modes. We conducted an economic analysis, advocating cost-sharing between employees and employers to encourage adoption.
              Developing informative pages and vehicle reservation forms were crucial tasks, adhering to Rockstar's graphic standards for design consistency.
              While leveraging team expertise was beneficial, I found WordPress limiting compared to direct HTML and CSS control.
              Despite challenges, we successfully completed the project, accessible here.
              These projects enhanced my teamwork skills and deepened my understanding of eco-friendly transportation and its economic implications.
              For future projects, I aim to apply these skills, favoring HTML and CSS for more control over web development.
          `,
    links: [
      {
        name: "Moodle",
        url: "https://moodle.univ-lille.fr/course/view.php?id=30388&sectionid=262716",
        type: LinkType.Website,
      },
    ],
    images: ["/projects/sae_1.5_1.png", "/projects/sae_1.5_2.png"],
    tools: getToolsByNames("WordPress"),
    date: "2022/S2",
    languages: ["fr"],
    experienceLevel: ExperienceLevel.SchoolProject,
    categories: getCategoriesFromID("university"),
  },
  {
    name: "SAE 1.02 - Algorithm Comparisons",
    description: `
              In project SAÉ 1.02, our aim was to refine our algorithm analysis skills by implementing and comparing various algorithms. We utilized resources like algorithmic books and programming tools such as IJava for implementation and data collection.
              Soft skills like creativity and brainstorming were crucial in devising the game structure during team meetings. Despite facing the challenge of working solo due to my partner's withdrawal, I achieved a commendable score of 16/20.
              Through this project, I honed my abilities in Bash scripting, ASCII art, and game design, particularly improving my understanding of terminal operations. Moving forward, I'll be more discerning in selecting team members to enhance collaboration in future projects.
          `,
    links: [
      {
        name: "GitHub",
        url: "https://github.com/linventif/SAE-1.02",
        type: LinkType.GitHub,
      },
    ],
    images: ["/projects/sae_1.2.png"],
    tools: getToolsByNames("IJava"),
    date: "2022/S2",
    languages: ["fr"],
    experienceLevel: ExperienceLevel.SchoolProject,
    categories: getCategoriesFromID("university"),
  },
];

const levelArray = Object.values(ExperienceLevel);
const [activeProjects, setActiveProjects] = createSignal(
  projectsList as Project[],
);

const [loadAll, setLoadAll] = createSignal(false);
const [placeProjects, setPlaceProjects] = createSignal(0);
const maxProjects = 4;

const isoToFlag = {
  fr: "🇫🇷",
  en: "🇬🇧",
  tr: "🇹🇷",
  es: "🇪🇸",
  de: "🇩🇪",
  ru: "🇷🇺",
} as const;

const Carousel = (props: { project: Project }) => {
  const [currentImage, setCurrentImage] = createSignal(0);
  const [isSliding, setIsSliding] = createSignal(false);

  const handleImageChange = (index: number) => {
    if (currentImage() !== index) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentImage(index);
        setIsSliding(false);
      }, 100);
    }
  };

  return (
    <div class="card w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] border border-primary rounded-lg gap-4 p-4 min-h-[45rem]">
      <div class="card-header">
        <h3 class="card-title text-blue">{props.project.name}</h3>
        <div class="flex flex-row gap-2">
          <p class="text-zinc-300 text-nowrap">{props.project.date}</p>
          <div class="flex w-full" />
          <div class="flex gap-2">
            <For each={props.project.languages}>
              {(lang) => (
                <div class="flex items-center justify-center">
                  <span>{isoToFlag[lang] || lang}</span>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
      <figure class="flex flex-col">
        <div class="carousel w-full relative overflow-hidden">
          <div
            class={`flex transition-transform duration-500 ease-in-out ${
              isSliding() ? "transform" : ""
            }`}
            style={{
              transform: `translateX(-${currentImage() * 100}%)`,
            }}
          >
            <For each={props.project.images}>
              {(image) => (
                <div class="carousel-item w-full flex-shrink-0 relative">
                  <img
                    src={image}
                    class="w-full h-full aspect-video relative z-10"
                  />
                </div>
              )}
            </For>
          </div>
        </div>
        <div class="flex w-full justify-center gap-2 py-2">
          <For each={props.project.images}>
            {(_, index) => (
              <button
                class={`text-zinc-600 text-xs ${
                  currentImage() === index() ? "text-zinc-200" : ""
                }`}
                onClick={() => handleImageChange(index())}
              >
                <i class="fa-solid fa-circle"></i>
              </button>
            )}
          </For>
        </div>
      </figure>
      <div class="card-body p-0">
        <p class="text-zinc-300 text-justify">{props.project.description}</p>
      </div>
      <div class="flex h-full" />
      <div class="card-footer mt-4 gap-4">
        <h4 class="text-blue">Technologies:</h4>
        <div class="flex flex-wrap gap-2 mt-2">
          <For each={props.project.tools}>
            {(tool) => (
              <div
                class="max-h-6 max-w-6 flex tooltip items-center justify-center w-6 h-6"
                data-tip={tool.description}
              >
                <img src={tool.image} alt={tool.name} class="max-h-6 max-w-6" />
              </div>
            )}
          </For>
        </div>
        <h4 class="text-blue mt-4">Links:</h4>
        <div class="flex flex-wrap text-lg gap-2">
          <For each={props.project.links}>
            {(link) => (
              <A
                href={link.url}
                class="flex items-center gap-2 mt-2 tooltip text-zinc-300"
                target="_blank"
                rel="noreferrer"
                data-tip={link.name}
              >
                <i class={LinkIcon[link.type]}></i>
              </A>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};

export const Projects: Component = () => {
  return (
    <>
      <div class="flex flex-wrap gap-4 py-4">
        <button
          class="btn btn-primary btn-outline"
          onClick={() => {
            setActiveProjects(projectsList);
            setActiveProjectsCategory([]);
          }}
        >
          <i class="fa-solid fa-sync mr-2 text-blue"></i>
          <span class="text-zinc-300 hover:text-white">Reset Filters</span>
        </button>
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

                const activeCategories = activeProjectsCategory();
                if (activeCategories.length === 0) {
                  setActiveProjects(projectsList);
                } else {
                  setActiveProjects(
                    projectsList.filter((project) => {
                      if (!project.categories) return false;
                      return project.categories.some((cat) =>
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
                activeProjects().filter(
                  (tool) => tool.experienceLevel === level,
                ).length > 0
              }
            >
              <div class="p-4">
                <h2 class="text-2xl font-bold text-blue">{level}</h2>
                <p class="text-zinc-300">
                  {ExperienceLevelDescription[level].projects}
                </p>
              </div>
              <div class="flex flex-wrap gap-4">
                <For
                  each={activeProjects().filter(
                    (project) => project.experienceLevel === level,
                  )}
                >
                  {(project) => {
                    return (
                      <>
                        <Carousel project={project} />
                      </>
                    );
                  }}
                </For>
              </div>
            </Show>
          </>
        )}
      </For>
    </>
  );
};
