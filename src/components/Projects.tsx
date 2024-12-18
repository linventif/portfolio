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
  Cults3D = "Cults3D",
  Steam = "Steam",
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
  [LinkType.Cults3D]: "fa-solid fa-cube",
  [LinkType.Steam]: "fa-brands fa-steam-symbol",
};

interface Project {
  name: string;
  description: string;
  categories: Category[];
  experienceLevel: ExperienceLevel;
  tools: Tool[];
  date: string;
  images?: string[];
  languages?: string[];
  links?: Link[];
  folder?: string;
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
    name: "Portal 2 Mapping",
    icon: "fa-solid fa-map",
    id: "portal-2-mapping",
  },
  {
    name: "Garry's Mod Mapping",
    icon: "fa-solid fa-map",
    id: "gmod-mapping",
  },
  {
    name: "Garry's Mod Addon",
    icon: "fa-solid fa-cogs",
    id: "gmod-addon",
  },
  {
    name: "3D Model",
    icon: "fa-solid fa-cube",
    id: "3d-model",
  },
  {
    name: "3D Printing",
    icon: "fa-solid fa-puzzle-piece",
    id: "3d-printing",
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
      "MongoDB",
      "Prisma",
      "Sequelize",
      "SolidJS",
      "D3",
    ),
    date: "2023 - Current",
    languages: ["fr", "en", "tr", "en", "es", "de", "ru", "pl", "it"],
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
    images: ["/projects/img_default.jpg"],
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
    name: "SAE 5.09 - Doctolib Clone",
    description: `
                In project SAÉ 5.01, I developed a RISC-V emulator using GO, focusing on instruction and memory management.
                The project required advanced knowledge of RISC-V architecture and GO programming.
                My strengths in GO programming and system architecture were crucial for successful emulator development.
                The main challenge was implementing memory management, requiring extensive research.
                This project deepened my understanding of system architecture and RISC-V, preparing me for future projects involving system emulation.
            `,
    images: ["/projects/img_default.jpg"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/linventif/sae-spring",
        type: LinkType.GitHub,
      },
    ],
    experienceLevel: ExperienceLevel.SchoolProject,
    tools: getToolsByNames(
      "Spring",
      "React",
      "H2",
      "Lombok",
      "Maven",
      "React",
      "Bruno",
    ),
    date: "2024/S2",
    languages: ["fr"],
    categories: getCategoriesFromID("other"),
  },
  {
    name: "SAE 5.01 - Risk-V Emulator",
    description: `
                In project SAÉ 5.01, I developed a RISC-V emulator using GO, focusing on instruction and memory management.
                The project required advanced knowledge of RISC-V architecture and GO programming.
                My strengths in GO programming and system architecture were crucial for successful emulator development.
                The main challenge was implementing memory management, requiring extensive research.
                This project deepened my understanding of system architecture and RISC-V, preparing me for future projects involving system emulation.
            `,
    images: ["/projects/img_default.jpg"],
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
    images: ["/projects/img_default.jpg"],
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
    images: ["/projects/img_default.jpg"],
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
  {
    name: "Arduino Nano support and relay",
    links: [
      {
        name: "Cults3D",
        url: "https://cults3d.com/en/3d-model/tool/support-arduino-nano-et-relais",
        type: LinkType.Cults3D,
      },
    ],
    description: ``,
    date: "2019-07-09",
    images: [
      "/projects/support-arduino-nano-et-relais/P1120477.JPG",
      "/projects/support-arduino-nano-et-relais/P1120479.JPG",
      "/projects/support-arduino-nano-et-relais/P1120486.JPG",
    ],
    tools: getToolsByNames("Fusion 360"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("3d-printing"),
  },
  {
    name: "Support for Arduino Relay",
    links: [
      {
        name: "Cults3D",
        url: "https://cults3d.com/en/3d-model/tool/support-pour-relais-arduino",
        type: LinkType.Cults3D,
      },
    ],
    description: ``,
    date: "2019-07-28",
    images: [
      "/projects/support-pour-relais-arduino/P1140118.png",
      "/projects/support-pour-relais-arduino/P1140123.png",
      "/projects/support-pour-relais-arduino/P1140138.png",
      "/projects/support-pour-relais-arduino/P1140139.png",
    ],
    tools: getToolsByNames("Fusion 360"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("3d-printing"),
  },
  {
    name: "Arduino Sound Sensor Bracket",
    links: [
      {
        name: "Cults3D",
        url: "https://cults3d.com/en/3d-model/tool/support-pour-capteur-son-arduino",
        type: LinkType.Cults3D,
      },
    ],
    description: ``,
    date: "2019-09-02",
    images: [
      "/projects/support-pour-capteur-son-arduino/P1120673.JPG",
      "/projects/support-pour-capteur-son-arduino/P1120674.JPG",
      "/projects/support-pour-capteur-son-arduino/P1140355.JPG",
      "/projects/support-pour-capteur-son-arduino/P1140356.JPG",
    ],
    tools: getToolsByNames("Fusion 360"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("3d-printing"),
  },
  {
    name: "Arduino Humidity Sensor Holder",
    links: [
      {
        name: "Cults3D",
        url: "https://cults3d.com/en/3d-model/tool/support-pour-capteur-humidite-arduino",
        type: LinkType.Cults3D,
      },
    ],
    description: ``,
    date: "2019-09-03",
    images: [
      "/projects/support-pour-capteur-humidite-arduino/P1120678.JPG",
      "/projects/support-pour-capteur-humidite-arduino/P1120679.JPG",
      "/projects/support-pour-capteur-humidite-arduino/P1120680.JPG",
      "/projects/support-pour-capteur-humidite-arduino/P1120681.JPG",
      "/projects/support-pour-capteur-humidite-arduino/P1120682.JPG",
    ],
    tools: getToolsByNames("Fusion 360"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("3d-printing"),
  },
  {
    name: "Support for Arduino Obstacle Sensor",
    links: [
      {
        name: "Cults3D",
        url: "https://cults3d.com/en/3d-model/tool/support-pour-capteur-d-obstacle-arduino",
        type: LinkType.Cults3D,
      },
    ],
    description: ``,
    date: "2019-09-04",
    images: [
      "/projects/support-pour-capteur-d-obstacle-arduino/P1120661.JPG",
      "/projects/support-pour-capteur-d-obstacle-arduino/P1120662.JPG",
      "/projects/support-pour-capteur-d-obstacle-arduino/P1120663.JPG",
      "/projects/support-pour-capteur-d-obstacle-arduino/P1120664.JPG",
      "/projects/support-pour-capteur-d-obstacle-arduino/P1120665.JPG",
    ],
    tools: getToolsByNames("Fusion 360"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("3d-printing"),
  },
  {
    name: "bubble safety",
    links: [
      {
        name: "Cults3D",
        url: "https://cults3d.com/en/3d-model/tool/securite-buller",
        type: LinkType.Cults3D,
      },
    ],
    description: ``,
    date: "2019-10-14",
    images: [
      "/projects/securite-buller/P1130375.JPG",
      "/projects/securite-buller/P1130377.JPG",
      "/projects/securite-buller/P1130379.JPG",
      "/projects/securite-buller/P1130384.JPG",
      "/projects/securite-buller/P1130387.JPG",
      "/projects/securite-buller/P1130403.JPG",
    ],
    tools: getToolsByNames("Fusion 360"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("3d-printing"),
  },
  {
    name: "Bicycle Hanger",
    links: [
      {
        name: "Cults3D",
        url: "https://cults3d.com/en/3d-model/tool/accroche-velo",
        type: LinkType.Cults3D,
      },
    ],
    description: ``,
    date: "2019-10-14",
    images: [
      "/projects/accroche-velo/P1130409.JPG",
      "/projects/accroche-velo/P1130417.JPG",
      "/projects/accroche-velo/P1130423.JPG",
      "/projects/accroche-velo/P1130437.JPG",
    ],
    tools: getToolsByNames("Fusion 360"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("3d-printing"),
  },
  {
    name: "Support for Arduino Potentiometer",
    links: [
      {
        name: "Cults3D",
        url: "https://cults3d.com/en/3d-model/tool/support-pour-potentielle-arduino",
        type: LinkType.Cults3D,
      },
    ],
    description: ``,
    date: "2019-12-18",
    images: [
      "/projects/support-pour-potentielle-arduino/P1130500.JPG",
      "/projects/support-pour-potentielle-arduino/P1130501.JPG",
      "/projects/support-pour-potentielle-arduino/P1130506.JPG",
    ],
    tools: getToolsByNames("Fusion 360"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("3d-printing"),
  },
  {
    name: "Box A Usb Adapter Type C",
    links: [
      {
        name: "Cults3D",
        url: "https://cults3d.com/en/3d-model/various/boite-a-adaptateur-usb-type-c",
        type: LinkType.Cults3D,
      },
    ],
    description: ``,
    date: "2019-12-19",
    images: [
      "/projects/boite-a-adaptateur-usb-type-c/P1130545.JPG",
      "/projects/boite-a-adaptateur-usb-type-c/P1130553.JPG",
      "/projects/boite-a-adaptateur-usb-type-c/P1130575.JPG",
      "/projects/boite-a-adaptateur-usb-type-c/P1130588.JPG",
    ],
    tools: getToolsByNames("Fusion 360"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("3d-printing"),
  },
  {
    name: "USB Protector Male",
    links: [
      {
        name: "Cults3D",
        url: "https://cults3d.com/en/3d-model/tool/protege-usb-male",
        type: LinkType.Cults3D,
      },
    ],
    description: ``,
    date: "2019-12-20",
    images: [
      "/projects/protege-usb-male/P1130599.JPG",
      "/projects/protege-usb-male/P1130609.JPG",
      "/projects/protege-usb-male/P1130625.JPG",
      "/projects/protege-usb-male/P1130664.JPG",
    ],
    tools: getToolsByNames("Fusion 360"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("3d-printing"),
  },
  {
    name: "Arduino Relay Current Safety Box",
    links: [
      {
        name: "Cults3D",
        url: "https://cults3d.com/en/3d-model/tool/boitier-securiser-courant-relais-arduino",
        type: LinkType.Cults3D,
      },
    ],
    description: ``,
    date: "2020-01-29",
    images: [
      "/projects/boitier-securiser-courant-relais-arduino/20200129_141853.jpg",
      "/projects/boitier-securiser-courant-relais-arduino/20200129_134758.jpg",
      "/projects/boitier-securiser-courant-relais-arduino/20200129_150513.jpg",
      "/projects/boitier-securiser-courant-relais-arduino/20200129_150519.jpg",
      "/projects/boitier-securiser-courant-relais-arduino/20200129_150528.jpg",
      "/projects/boitier-securiser-courant-relais-arduino/20200129_150925.jpg",
    ],
    tools: getToolsByNames("Fusion 360"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("3d-printing"),
  },
  {
    name: "Housing for an insulating arduino relay",
    links: [
      {
        name: "Cults3D",
        url: "https://cults3d.com/en/3d-model/tool/support-pour-relais-arduino",
        type: LinkType.Cults3D,
      },
    ],
    description: ``,
    date: "2020-02-02",
    images: [
      "/projects/boitier-pour-relai-arduino-isolant/P1140113.JPG",
      "/projects/boitier-pour-relai-arduino-isolant/P1140144.JPG",
      "/projects/boitier-pour-relai-arduino-isolant/P1140167.JPG",
      "/projects/boitier-pour-relai-arduino-isolant/P1140168.JPG",
    ],
    tools: getToolsByNames("Fusion 360"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("3d-printing"),
  },
  {
    name: "Realistic 3D model mini breadboard",
    links: [
      {
        name: "Cults3D",
        url: "https://cults3d.com/en/3d-model/tool/mini-breadboard",
        type: LinkType.Cults3D,
      },
    ],
    description: ``,
    date: "2020-04-23",
    images: ["/projects/mini-breadboard/Breadboard_mini_white.jpg"],
    tools: getToolsByNames("Fusion 360"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("3d-model"),
  },
  {
    name: "9, 11 and 14mm male triangle wrench",
    links: [
      {
        name: "Cults3D",
        url: "https://cults3d.com/en/3d-model/tool/support-pour-relais-arduino",
        type: LinkType.Cults3D,
      },
    ],
    description: ``,
    date: "2020-04-23",
    images: [
      "/projects/cle-triangle/good.gif",
      "/projects/cle-triangle/89.png",
      "/projects/cle-triangle/98.png",
      "/projects/cle-triangle/P1140358.JPG",
      "/projects/cle-triangle/P1140360.JPG",
    ],
    tools: getToolsByNames("Fusion 360"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("3d-printing"),
  },
  {
    name: "realistic model of a diode ± 0,01mm",
    links: [
      {
        name: "Cults3D",
        url: "https://cults3d.com/en/3d-model/tool/model-realiste-d-une-diode-0-01mm",
        type: LinkType.Cults3D,
      },
    ],
    description: ``,
    date: "2020-05-07",
    images: [
      "/projects/model-realiste-d-une-diode-0-01mm/2.png",
      "/projects/model-realiste-d-une-diode-0-01mm/1.png",
    ],
    tools: getToolsByNames("Fusion 360"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("3d-model"),
  },
  {
    name: "mini box for screwdriver of presision is stored in the tip holder",
    links: [
      {
        name: "Cults3D",
        url: "https://cults3d.com/en/3d-model/tool/mini-tournevis-est-range-embout",
        type: LinkType.Cults3D,
      },
    ],
    description: ``,
    date: "2020-05-22",
    images: [
      "/projects/mini-tournevis-est-range-embout/20200522_233751.jpg",
      "/projects/mini-tournevis-est-range-embout/20200522_234523.jpg",
      "/projects/mini-tournevis-est-range-embout/20200522_235250.jpg",
      "/projects/mini-tournevis-est-range-embout/20200522_235430.jpg",
    ],
    tools: getToolsByNames("Fusion 360"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("3d-printing"),
  },
  {
    name: "22LR",
    links: [
      {
        name: "Cults3D",
        url: "https://cults3d.com/en/3d-model/tool/22lr-linventif",
        type: LinkType.Cults3D,
      },
    ],
    description: ``,
    date: "2022-05-22",
    images: ["/projects/22lr-linventif/22lr.png"],
    tools: getToolsByNames("Fusion 360"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("3d-model"),
  },
  {
    name: "il faut etre malin",
    links: [
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=841239285",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2017-01-13",
    images: ["/projects/841239285/icon.jpeg"],
    tools: getToolsByNames("Source Engine"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("portal-2-mapping"),
  },
  {
    name: "LE PROBLEME DE LAZERR",
    links: [
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=846839477",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2017-03-19",
    images: ["/projects/846839477/icon.jpeg"],
    tools: getToolsByNames("Source Engine"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("portal-2-mapping"),
  },
  {
    name: "petit joueur 0.1.5 Mise a jour",
    links: [
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=934104479",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2017-09-17",
    images: ["/projects/934104479/icon.jpeg"],
    tools: getToolsByNames("Source Engine"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("portal-2-mapping"),
  },
  {
    name: "1erreur est set fini*",
    links: [
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=867777503",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2017-02-17",
    images: ["/projects/867777503/icon.jpeg"],
    tools: getToolsByNames("Source Engine"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("portal-2-mapping"),
  },
  {
    name: "PROBLEME DE CUBE",
    links: [
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=949518834",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2017-05-18",
    images: ["/projects/949518834/icon.jpeg"],
    tools: getToolsByNames("Source Engine"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("portal-2-mapping"),
  },
  {
    name: "30s pou apuille sur l'aure bouton",
    links: [
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=952044245",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2017-06-21",
    images: ["/projects/952044245/icon.jpeg"],
    tools: getToolsByNames("Source Engine"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("portal-2-mapping"),
  },
  {
    name: "CODE",
    links: [
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1131230490",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2017-09-09",
    images: ["/projects/1131230490/icon.jpeg"],
    tools: getToolsByNames("Source Engine"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("portal-2-mapping"),
  },
  {
    name: "Casse Tete niveau 4/5",
    links: [
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1322084030",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2018-01-13",
    images: ["/projects/1322084030/icon.jpeg"],
    tools: getToolsByNames("Source Engine"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("portal-2-mapping"),
  },
  {
    name: "Linventif - - Garage",
    links: [
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2722305330",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2022-01-17",
    images: [
      "/projects/2722305330/icon.jpeg",
      "/projects/2722305330/1.jpeg",
      "/projects/2722305330/2.jpeg",
    ],
    tools: getToolsByNames("Source Engine"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-mapping"),
  },
  {
    name: "Linventif - - The Mine",
    links: [
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2667174146",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2021-11-28",
    images: [
      "/projects/2667174146/icon.jpeg",
      "/projects/2667174146/1.jpeg",
      "/projects/2667174146/2.jpeg",
      "/projects/2667174146/3.jpeg",
      "/projects/2667174146/4.jpeg",
    ],
    tools: getToolsByNames("Source Engine"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-mapping"),
  },
  {
    name: "Linventif - - Spawn",
    links: [
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2680100614",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2021-12-12",
    images: [
      "/projects/2680100614/icon.jpeg",
      "/projects/2680100614/1.jpeg",
      "/projects/2680100614/2.jpeg",
      "/projects/2680100614/3.jpeg",
    ],
    tools: getToolsByNames("Source Engine"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-mapping"),
  },
  {
    name: "Kaiiolla - - Squid Game - - 1.5",
    links: [
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2652893269",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2021-10-31",
    images: [
      "/projects/2652893269/1.jpeg",
      "/projects/2652893269/2.jpeg",
      "/projects/2652893269/3.jpeg",
      "/projects/2652893269/4.jpeg",
      "/projects/2652893269/5.jpeg",
      "/projects/2652893269/6.jpeg",
      "/projects/2652893269/7.jpeg",
      "/projects/2652893269/8.jpeg",
      "/projects/2652893269/9.jpeg",
    ],
    tools: getToolsByNames("Source Engine"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-mapping"),
  },
  {
    name: "Linventif - - Simple Admin Room",
    links: [
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2736757811",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2022-01-30",
    images: [
      "/projects/2736757811/icon.jpeg",
      "/projects/2736757811/1.jpeg",
      "/projects/2736757811/2.jpeg",
      "/projects/2736757811/3.jpeg",
      "/projects/2736757811/4.jpeg",
    ],
    tools: getToolsByNames("Source Engine"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-mapping"),
  },
  {
    name: "Linventif - - Admin Rooms",
    links: [
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2756650599",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2022-02-28",
    images: [
      "/projects/2756650599/icon.jpeg",
      "/projects/2756650599/1.jpeg",
      "/projects/2756650599/2.jpeg",
      "/projects/2756650599/3.jpeg",
      "/projects/2756650599/4.jpeg",
    ],
    tools: getToolsByNames("Source Engine"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-mapping"),
  },
  {
    name: "Linventif - - Garage v2",
    links: [
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2771207183",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2022-03-03",
    images: [
      "/projects/2771207183/icon.jpeg",
      "/projects/2771207183/1.jpeg",
      "/projects/2771207183/2.jpeg",
      "/projects/2771207183/3.jpeg",
      "/projects/2771207183/4.jpeg",
      "/projects/2771207183/5.jpeg",
      "/projects/2771207183/6.jpeg",
    ],
    tools: getToolsByNames("Source Engine"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-mapping"),
  },
  {
    name: "Linventif - - Mine v2",
    links: [
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2777052567",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2022-03-11",
    images: [
      "/projects/2777052567/icon.jpeg",
      "/projects/2777052567/4.jpeg",
      "/projects/2777052567/6.jpeg",
      "/projects/2777052567/11.jpeg",
      "/projects/2777052567/8.jpeg",
      "/projects/2777052567/10.jpeg",
      "/projects/2777052567/9.jpeg",
      "/projects/2777052567/3.jpeg",
    ],
    tools: getToolsByNames("Source Engine"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-mapping"),
  },
  {
    name: "Linford In Dev",
    links: [
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2812916056",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2022-05-22",
    images: [
      "/projects/2812916056/icon.jpeg",
      "/projects/2812916056/1.jpeg",
      "/projects/2812916056/2.jpeg",
      "/projects/2812916056/4.jpeg",
      "/projects/2812916056/5.jpeg",
      "/projects/2812916056/6.jpeg",
      "/projects/2812916056/7.jpeg",
      "/projects/2812916056/9.jpeg",
    ],
    tools: getToolsByNames("Source Engine"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-mapping"),
  },
  {
    name: "Parkour Rage 1",
    links: [
      {
        name: "Scratch",
        url: "https://scratch.mit.edu/projects/228722122/",
        type: LinkType.Website,
      },
    ],
    description: ``,
    date: "2018-12-17",
    images: [
      "/projects/parkour-rage/0.png",
      "/projects/parkour-rage/2.png",
      "/projects/parkour-rage/3.png",
      "/projects/parkour-rage/4.png",
      "/projects/parkour-rage/5.png",
      "/projects/parkour-rage/6.png",
    ],
    tools: getToolsByNames("Scratch"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("game"),
  },
  {
    name: "Parkour Rage 2",
    links: [
      {
        name: "Scratch",
        url: "https://scratch.mit.edu/projects/270980103/",
        type: LinkType.Website,
      },
    ],
    description: ``,
    date: "2019-01-08",
    images: [
      "/projects/parkour-rage-2/1.png",
      "/projects/parkour-rage-2/2.png",
      "/projects/parkour-rage-2/3.png",
      "/projects/parkour-rage-2/4.png",
      "/projects/parkour-rage-2/5.png",
      "/projects/parkour-rage-2/6.png",
      "/projects/parkour-rage-2/7.png",
      "/projects/parkour-rage-2/8.png",
      "/projects/parkour-rage-2/9.png",
    ],
    tools: getToolsByNames("Scratch"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("game"),
  },
  {
    name: "Say my Weapon",
    links: [
      {
        name: "Aide Serveur",
        url: "https://aide-serveur.fr/ressources/unsupported-say-my-weapon.3418/",
        type: LinkType.Website,
      },
      {
        name: "GitHub",
        url: "https://github.com/linventif/addons",
        type: LinkType.GitHub,
      },
    ],
    description: ``,
    date: "2022-06-21",
    images: ["/projects/say-my-weapon/1.png"],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Gmod Py Fast DL",
    links: [
      {
        name: "Aide Serveur",
        url: "https://aide-serveur.fr/ressources/unsupported-gmod-py-fast-dl.3245/",
        type: LinkType.Website,
      },
      {
        name: "GitHub",
        url: "https://github.com/linventif/Gmod-Py-Fast-DL",
        type: LinkType.GitHub,
      },
    ],
    description: ``,
    date: "2021-12-18",
    images: ["/projects/img_default.jpg"],
    languages: ["en", "fr"],
    tools: getToolsByNames("Python"),
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "ULX Food",
    links: [
      {
        name: "Aide Serveur",
        url: "https://aide-serveur.fr/ressources/unsupported-ulx-food.3423/",
        type: LinkType.Website,
      },
      {
        name: "GitHub",
        url: "https://github.com/linventif/gmod-addons",
        type: LinkType.GitHub,
      },
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2825467376",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2022-06-25",
    images: ["/projects/ulx-food/icon.jpg", "/projects/ulx-food/1.jpeg"],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Ember Boost Module",
    links: [
      {
        name: "Aide Serveur",
        url: "https://aide-serveur.fr/ressources/unsupported-ember-boost-module.3424/",
        type: LinkType.Website,
      },
      {
        name: "GitHub",
        url: "https://github.com/linventif/ember",
        type: LinkType.GitHub,
      },
    ],
    description: ``,
    date: "2022-06-25",
    images: ["/projects/img_default.jpg"],
    tools: getToolsByNames("PHP"),
    languages: ["en"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Cosmo Boost Module",
    links: [
      {
        name: "Aide Serveur",
        url: "https://aide-serveur.fr/ressources/unsupported-cosmo-boost-module.3425/",
        type: LinkType.Website,
      },
      {
        name: "GitHub",
        url: "https://github.com/linventif/cosmo",
        type: LinkType.GitHub,
      },
    ],
    description: ``,
    date: "2022-06-25",
    images: ["/projects/img_default.jpg"],
    tools: getToolsByNames("Lua"),
    languages: ["en"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "ULX Reset Armor Health Food",
    links: [
      {
        name: "Aide Serveur",
        url: "https://aide-serveur.fr/ressources/unsupported-ulx-reset-armor-health-food.3429/",
        type: LinkType.Website,
      },
      {
        name: "GitHub",
        url: "https://github.com/linventif/gmod-addons",
        type: LinkType.GitHub,
      },
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2826424733",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2022-06-26",
    images: ["/projects/ulx-rahf/icon.jpg", "/projects/ulx-rahf/1.jpeg"],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Command Menu Gratuits",
    links: [
      {
        name: "Aide Serveur",
        url: "https://aide-serveur.fr/ressources/unsupported-command-menu.3444/",
        type: LinkType.Website,
      },
    ],
    description: ``,
    date: "2022-07-19",
    images: ["/projects/command-menu/1.png", "/projects/command-menu/2.png"],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Weapons Restrict",
    links: [
      {
        name: "Aide Serveur",
        url: "https://aide-serveur.fr/ressources/unsupported-weapons-restrict.3516/",
        type: LinkType.Website,
      },
      {
        name: "GitHub",
        url: "https://github.com/linventif/gmod-addons",
        type: LinkType.GitHub,
      },
    ],
    description: ``,
    date: "2022-10-11",
    images: [
      "/projects/weapon-restrict/1.png",
      "/projects/weapon-restrict/2.png",
    ],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Props Limit",
    links: [
      {
        name: "Aide Serveur",
        url: "https://aide-serveur.fr/ressources/unsupported-props-limit.3548/",
        type: LinkType.Website,
      },
      {
        name: "GitHub",
        url: "https://github.com/linventif/gmod-addons",
        type: LinkType.GitHub,
      },
    ],
    description: ``,
    date: "2022-11-12",
    images: ["/projects/props-limit/1.png"],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Color Mode",
    links: [
      {
        name: "Aide Serveur",
        url: "https://aide-serveur.fr/ressources/unsupported-props-limit.3548/",
        type: LinkType.Website,
      },
      {
        name: "GitHub",
        url: "https://github.com/linventif/gmod-addons",
        type: LinkType.GitHub,
      },
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2848390457",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2022-08-13",
    images: [
      "/projects/color-mode/icon.jpeg",
      "/projects/color-mode/1.jpg",
      "/projects/color-mode/2.jpg",
      "/projects/color-mode/3.jpg",
      "/projects/color-mode/1.png",
      "/projects/color-mode/2.png",
    ],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr", "ru"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Divisé l'Argent à la Mort",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/linventif/gmod-addons",
        type: LinkType.GitHub,
      },
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2833433648",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2022-07-10",
    images: ["/projects/div-mort/icon.jpeg", "/projects/div-mort/1.jpeg"],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "One Hud",
    links: [
      {
        name: "Aide Serveur",
        url: "https://aide-serveur.fr/ressources/unsupported-one-hud.3549/",
        type: LinkType.Website,
      },
      {
        name: "GitHub",
        url: "https://github.com/linventif/one-hud",
        type: LinkType.GitHub,
      },
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2887943544",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2022-11-13",
    images: [
      "/projects/one-hud/1.png",
      "/projects/one-hud/2.png",
      "/projects/one-hud/3.png",
    ],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Linventif DarkRP NPC",
    links: [
      {
        name: "Aide Serveur",
        url: "https://aide-serveur.fr/ressources/unsupported-linventif-darkrp-npc.3627/",
        type: LinkType.Website,
      },
    ],
    description: ``,
    date: "2023-02-09",
    images: [
      "/projects/npc/1.png",
      "/projects/npc/2.png",
      "/projects/npc/3.png",
      "/projects/npc/4.png",
      "/projects/npc/5.png",
    ],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Linventif Start Menu",
    links: [
      {
        name: "Aide Serveur",
        url: "https://aide-serveur.fr/ressources/unsupported-linventif-start-menu.3626/",
        type: LinkType.Website,
      },
    ],
    description: ``,
    date: "2023-02-05",
    images: [
      "/projects/start-menu/1.png",
      "/projects/start-menu/2.png",
      "/projects/start-menu/3.png",
    ],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Linventif Context Menu",
    links: [
      {
        name: "Aide Serveur",
        url: "https://aide-serveur.fr/ressources/unsupported-linventif-context-menu.3619/",
        type: LinkType.Website,
      },
    ],
    description: ``,
    date: "2023-02-03",
    images: [
      "/projects/context-menu/1.png",
      "/projects/context-menu/2.png",
      "/projects/context-menu/3.png",
      "/projects/context-menu/4.png",
      "/projects/context-menu/5.png",
    ],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Linventif Shop",
    links: [
      {
        name: "Aide Serveur",
        url: "https://aide-serveur.fr/ressources/unsupported-linventif-shop.3720/",
        type: LinkType.Website,
      },
    ],
    description: ``,
    date: "2023-04-13",
    images: [
      "/projects/shop/1.png",
      "/projects/shop/2.png",
      "/projects/shop/3.png",
      "/projects/shop/4.png",
      "/projects/shop/5.png",
      "/projects/shop/6.png",
    ],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Linventif Map",
    links: [
      {
        name: "Aide Serveur",
        url: "https://aide-serveur.fr/ressources/unsupported-linventif-map.3722/",
        type: LinkType.Website,
      },
      {
        name: "GitHub",
        url: "https://github.com/linventif/map",
        type: LinkType.GitHub,
      },
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2961933443",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2023-05-13",
    images: [
      "/projects/maps/icon.jpeg",
      "/projects/maps/1.jpg",
      "/projects/maps/2.jpg",
    ],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Vote System",
    links: [
      {
        name: "Aide Serveur",
        url: "https://aide-serveur.fr/ressources/unsupported-vote-system.3572/",
        type: LinkType.Website,
      },
      {
        name: "GitHub",
        url: "https://github.com/linventif/vote",
        type: LinkType.GitHub,
      },
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2951386517",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2022-12-02",
    images: [
      "/projects/vote/1.png",
      "/projects/vote/2.png",
      "/projects/vote/3.png",
    ],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr", "ru"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Linventif's Stuff",
    links: [
      {
        name: "Aide Serveur",
        url: "https://aide-serveur.fr/ressources/unsupported-linventifs-stuff.3620/",
        type: LinkType.Website,
      },
      {
        name: "GitHub",
        url: "https://github.com/linventif/__linventif_stuff",
        type: LinkType.GitHub,
      },
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2882747990",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2023-03-03",
    images: [
      "/projects/library/icon.jpeg",
      "/projects/library/1.jpeg",
      "/projects/library/2.jpeg",
      "/projects/library/3.jpeg",
      "/projects/library/4.jpeg",
    ],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr", "es", "de", "ru", "it"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Ultimate Unstuck",
    links: [
      {
        name: "Aide Serveur",
        url: "https://aide-serveur.fr/ressources/unsupported-ultimate-unstuck.3872/",
        type: LinkType.Website,
      },
      {
        name: "GitHub",
        url: "https://github.com/linventif/unstuck",
        type: LinkType.GitHub,
      },
      {
        name: "Steam Workshop",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3021408599",
        type: LinkType.Steam,
      },
    ],
    description: ``,
    date: "2023-09-17",
    images: [
      "/projects/unstuck/icon.jpeg",
      "/projects/unstuck/1.jpeg",
      "/projects/unstuck/2.jpeg",
      "/projects/unstuck/3.jpeg",
      "/projects/unstuck/4.png",
      "/projects/unstuck/5.png",
    ],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr", "es", "de", "ru", "it"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Player Data Saver",
    links: [
      {
        name: "Aide Serveur",
        url: "https://aide-serveur.fr/ressources/unsupported-player-data-saver.3921/",
        type: LinkType.Website,
      },
      {
        name: "GitHub",
        url: "https://github.com/linventif/ply_data_saver",
        type: LinkType.GitHub,
      },
    ],
    description: ``,
    date: "2023-10-01",
    images: ["/projects/ply-saver/1.png"],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr", "es", "de", "ru", "it"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Family System",
    links: [
      {
        name: "YouTube",
        url: "https://www.youtube.com/watch?v=FeYpYG0bpXY",
        type: LinkType.YouTube,
      },
    ],
    description: ``,
    date: "2023-03-13",
    images: [
      "/projects/familly/1.png",
      "/projects/familly/2.png",
      "/projects/familly/3.png",
      "/projects/familly/4.png",
    ],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Friends System",
    links: [],
    description: ``,
    date: "2023-04-02",
    images: [
      "/projects/friends/1.png",
      "/projects/friends/2.png",
      "/projects/friends/3.png",
    ],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Permanent Weapon",
    links: [],
    description: ``,
    date: "2023-04-02",
    images: ["/projects/perma-wep/1.png"],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Booster",
    links: [
      {
        name: "YouTube",
        url: "https://youtu.be/uOTQGFpmKqk",
        type: LinkType.YouTube,
      },
    ],
    description: ``,
    date: "2022-12-24",
    images: [
      "/projects/booster/1.png",
      "/projects/booster/2.png",
      "/projects/booster/3.png",
    ],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Aura",
    links: [],
    description: ``,
    date: "2023-02-06",
    images: [
      "/projects/aura/1.png",
      "/projects/aura/3.png",
      "/projects/aura/2.png",
    ],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
  {
    name: "Manga System",
    links: [
      {
        name: "YouTube",
        url: "https://www.youtube.com/watch?v=Wimn3J__BIY",
        type: LinkType.YouTube,
      },
    ],
    description: ``,
    date: "2023-01-01",
    images: [
      "/projects/manga/1.png",
      "/projects/manga/2.png",
      "/projects/manga/3.png",
      "/projects/manga/4.png",
    ],
    tools: getToolsByNames("Lua"),
    languages: ["en", "fr"],
    experienceLevel: ExperienceLevel.HobbyProject,
    categories: getCategoriesFromID("gmod-addon"),
  },
];

console.log(projectsList.length);

// sort by date
projectsList.sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

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
  pl: "🇵🇱",
  it: "🇮🇹",
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
          <div class="flex flex-grow" />
          <div class="flex gap-2 w-full justify-end flex-wrap">
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
        <div class="carousel w-full relative overflow-hidden rounded-lg">
          <div
            class={`flex flex-grow transition-transform duration-500 ease-in-out ${
              isSliding() ? "transform" : ""
            }`}
            style={{
              transform: `translateX(-${currentImage() * 100}%)`,
            }}
          >
            <For each={props.project.images}>
              {(image, index) => (
                <div class="carousel-item w-full flex-shrink-0 relative">
                  <div
                    class="absolute inset-0 w-full bg-cover bg-center blur-2xl brightness-75"
                    style={{ "background-image": `url(${image})` }}
                  />
                  <img
                    src={image}
                    class="w-full h-[15.5em] object-contain rounded-lg relative z-10"
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
                class="text-xs"
                classList={{
                  "text-zinc-600": currentImage() !== index(),
                  "text-zinc-200": currentImage() === index(),
                }}
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
              <A
                href={tool.url}
                class="max-h-6 max-w-6 flex items-center justify-center w-6 h-6 md-tooltip"
                data-tip={tool.description}
              >
                <img src={tool.image} alt={tool.name} class="max-h-6 max-w-6" />
              </A>
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
              <div class="py-4">
                <h2 class="text-2xl font-bold  text-blue">{level}</h2>
                <p class="text-zinc-300 text-justify">
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
