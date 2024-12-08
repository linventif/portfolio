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
    name: "APIs",
    icon: "fa-solid fa-network-wired",
    description: "APIs are used to connect different software applications.",
    id: "apis",
  },
  {
    name: "IDE",
    icon: "fa-solid fa-laptop-code",
    description: "IDEs are used to write and debug code.",
    id: "ide",
  },
  {
    name: "3D",
    icon: "fa-solid fa-gamepad",
    description:
      "3D Software and Engines are used to create 3D models and games.",
    id: "3d",
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
  description: string;
}

const toolsList: Tool[] = [
  // Languages
  {
    name: "TypeScript",
    image: "/tools/typescript.png",
    url: "https://typescriptlang.org",
    experienceLevel: ExperienceLevel.Professional,
    categories: getCategoriesFromID("languages"),
    description:
      "TypeScript is a superset of JavaScript that adds static typing to the language.",
  },
  {
    name: "Maven",
    image: "/tools/maven.png",
    url: "https://maven.apache.org/",
    experienceLevel: ExperienceLevel.SchoolProject,
    categories: getCategoriesFromID("frameworks"),
    description:
      "Maven is a build automation tool used primarily for Java projects.",
  },
  {
    name: "Prisma",
    image: "/tools/prisma.png",
    url: "https://prisma.io/",
    experienceLevel: ExperienceLevel.Professional,
    categories: getCategoriesFromID("frameworks"),
    description:
      "Prisma is a modern database toolkit that makes working with databases easy.",
  },
  {
    name: "Sequelize",
    image: "/tools/sequelize.png",
    url: "https://sequelize.org/",
    experienceLevel: ExperienceLevel.Professional,
    categories: getCategoriesFromID("frameworks"),
    description:
      "Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.",
  },
  {
    name: "React",
    image: "/tools/react.png",
    url: "https://reactjs.org",
    experienceLevel: ExperienceLevel.SchoolProject,
    categories: getCategoriesFromID("frameworks"),
    description: "React is a JavaScript library for building user interfaces.",
  },
  {
    name: "Go",
    image: "/tools/go.png",
    url: "https://golang.org",
    experienceLevel: ExperienceLevel.SchoolProject,
    categories: getCategoriesFromID("languages"),
    description:
      "Go is a statically typed, compiled programming language designed at Google.",
  },
  {
    name: "Sentry",
    image: "/tools/sentry.png",
    url: "https://sentry.io",
    experienceLevel: ExperienceLevel.Professional,
    categories: getCategoriesFromID("apis"),
    description:
      "Sentry is an open-source error tracking system that helps developers monitor and fix crashes in real-time.",
  },
  // Frameworks
  {
    name: "SolidJS",
    image: "/tools/solidjs.png",
    url: "https://solidjs.com",
    experienceLevel: ExperienceLevel.Professional,
    categories: getCategoriesFromID("frameworks"),
    description:
      "SolidJS is a declarative JavaScript library for building user interfaces.",
  },
  // Database
  {
    name: "Visual Studio Code",
    image: "/tools/vscode.png",
    categories: getCategoriesFromID("ide"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://code.visualstudio.com/",
    description:
      "Visual Studio Code is a free source-code editor made by Microsoft for Windows, Linux, and macOS.",
  },
  {
    name: "DataGrip",
    image: "/tools/datagrip.png",
    categories: getCategoriesFromID("ide"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.jetbrains.com/datagrip/",
    description:
      "DataGrip is a database IDE that is tailored to suit the specific needs of professional SQL" +
      " developers and Database administrators.",
  },
  {
    name: "IntelliJ IDEA",
    image: "/tools/intellij.png",
    categories: getCategoriesFromID("ide"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.jetbrains.com/idea/",
    description:
      "IntelliJ IDEA is a Java integrated development environment for developing computer software.",
  },
  {
    name: "WebStorm",
    image: "/tools/webstorm.png",
    categories: getCategoriesFromID("ide"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.jetbrains.com/webstorm/",
    description:
      "WebStorm is a JavaScript IDE that is built on JetBrains' IntelliJ IDEA platform.",
  },
  {
    name: "CLion",
    image: "/tools/clion.png",
    categories: getCategoriesFromID("ide"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.jetbrains.com/clion/",
    description: "CLion is a cross-platform IDE for C and C++ development.",
  },
  {
    name: "Java",
    image: "/tools/java.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.java.com/",
    description:
      "Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
  },
  {
    name: "HTML",
    image: "/tools/html.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    description:
      "HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    name: "CSS",
    image: "/tools/css.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    description:
      "CSS is a style sheet language used for describing the presentation of a document written in HTML.",
  },
  {
    name: "JavaScript",
    image: "/tools/js.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    description:
      "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.",
  },
  {
    name: "Matrix",
    image: "/tools/matrix.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://matrix.org/",
    description:
      "Matrix is an open standard and lightweight protocol for real-time communication.",
  },
  {
    name: "Bootstrap",
    image: "/tools/bootstrap.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://getbootstrap.com/",
    description:
      "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
  },
  {
    name: "H2",
    image: "/tools/h2.png",
    categories: getCategoriesFromID("databases"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.h2database.com/",
    description:
      "H2 is a relational database management system written in Java.",
  },
  {
    name: "MongoDB",
    image: "/tools/mongodb.png",
    categories: getCategoriesFromID("databases"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.mongodb.com/",
    description:
      "MongoDB is a source-available cross-platform document-oriented database program.",
  },
  {
    name: "Lombok",
    image: "/tools/lombok.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://projectlombok.org/",
    description:
      "Lombok is a Java library that automatically plugs into your editor and build tools, spicing up your java.",
  },
  {
    name: "Spring",
    image: "/tools/spring.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://spring.io/",
    description:
      "Spring is a lightweight framework that provides comprehensive infrastructure support for developing Java applications.",
  },
  {
    name: "Daisy UI",
    image: "/tools/daisy.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://daisyui.com/",
    description:
      "Daisy UI is a CSS framework that is designed to be simple and lightweight.",
  },
  {
    name: "C",
    image: "/tools/c.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://en.wikipedia.org/wiki/C_(programming_language)",
    description:
      "C is a general-purpose, procedural computer programming language supporting structured programming.",
  },
  {
    name: "C++",
    image: "/tools/c++.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.HobbyProject,
    url: "https://www.cplusplus.com/",
    description:
      "C++ is a general-purpose programming language created as an extension of the C programming language.",
  },
  {
    name: "Lua",
    image: "/tools/lua.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.lua.org/",
    description:
      "Lua is a lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications.",
  },
  {
    name: "Python",
    image: "/tools/python.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.python.org/",
    description:
      "Python is an interpreted, high-level, general-purpose programming language.",
  },
  {
    name: "NodeJS",
    image: "/tools/nodejs.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://nodejs.org/",
    description:
      "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
  },
  {
    name: "PM2",
    image: "/tools/pm2.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://pm2.keymetrics.io/",
    description:
      "PM2 is a production process manager for Node.js applications with a built-in load balancer.",
  },
  {
    name: "DiscordJS",
    image: "/tools/djs.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://discord.js.org/",
    description:
      "Discord.js is a powerful JavaScript library for interacting with the Discord API.",
  },
  {
    name: "Express",
    image: "/tools/express.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://expressjs.com/",
    description:
      "Express.js is a web application framework for Node.js, designed for building web applications and APIs.",
  },
  {
    name: "EJS",
    image: "/tools/ejs.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.HobbyProject,
    url: "https://ejs.co/",
    description:
      "EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.",
  },
  {
    name: "Windows",
    image: "/tools/windows.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.microsoft.com/en-us/windows",
    description:
      "Windows is a series of operating systems developed by Microsoft.",
  },
  {
    name: "Ubuntu",
    image: "/tools/ubuntu.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://ubuntu.com/",
    description:
      "Ubuntu is a Linux distribution based on Debian and composed mostly of free and open-source software.",
  },
  {
    name: "Debian",
    image: "/tools/debian.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.debian.org/",
    description:
      "Debian is a Unix-like operating system consisting entirely of free software.",
  },
  {
    name: "Nginx",
    image: "/tools/nginx.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.nginx.com/",
    description:
      "Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy, and HTTP cache.",
  },
  {
    name: "Apache",
    image: "/tools/apache.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://httpd.apache.org/",
    description:
      "Apache HTTP Server is a free and open-source cross-platform web server software.",
  },
  {
    name: "Tomcat",
    image: "/tools/tomcat.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "http://tomcat.apache.org/",
    description:
      "Apache Tomcat is an open-source implementation of the Java Servlet, JavaServer Pages, Java Expression Language, and WebSocket technologies.",
  },
  {
    name: "MySQL",
    image: "/tools/mysql.png",
    categories: getCategoriesFromID("databases"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.mysql.com/",
    description:
      "MySQL is an open-source relational database management system.",
  },
  {
    name: "MariaDB",
    image: "/tools/mariadb.png",
    categories: getCategoriesFromID("databases"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://mariadb.org/",
    description:
      "MariaDB is a community-developed, commercially supported fork of the MySQL relational database management system.",
  },
  {
    name: "Redis",
    image: "/tools/redis.png",
    categories: getCategoriesFromID("databases"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://redis.io/",
    description:
      "Redis is an open-source, in-memory data structure store, used as a database, cache, and message broker.",
  },
  {
    name: "PostgresSQL",
    image: "/tools/postgres-sql.png",
    categories: getCategoriesFromID("databases"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.postgresql.org/",
    description:
      "PostgreSQL is a powerful, open-source object-relational database system.",
  },
  {
    name: "Unreal Engine",
    image: "/tools/unreal.png",
    categories: getCategoriesFromID("3d"),
    experienceLevel: ExperienceLevel.HobbyProject,
    url: "https://www.unrealengine.com/",
    description: "Unreal Engine is a game engine developed by Epic Games.",
  },
  {
    name: "Tailwind CSS",
    image: "/tools/tailwind.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://tailwindcss.com/",
    description:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
  },
  {
    name: "Source Engine",
    image: "/tools/source.png",
    categories: getCategoriesFromID("3d"),
    experienceLevel: ExperienceLevel.HobbyProject,
    url: "https://partner.steamgames.com/doc/sdk",
    description: "Source is a 3D game engine developed by Valve Corporation.",
  },
  {
    name: "Blender",
    image: "/tools/blender.png",
    categories: getCategoriesFromID("3d"),
    experienceLevel: ExperienceLevel.HobbyProject,
    url: "https://www.blender.org/",
    description: "Blender is a free and open-source 3D creation suite.",
  },
  {
    name: "D3",
    image: "/tools/d3.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://d3js.org/",
    description:
      "D3.js is a JavaScript library for producing dynamic, interactive data visualizations in web browsers.",
  },
  {
    name: "Scratch",
    image: "/tools/scratch.png",
    categories: getCategoriesFromID("3d"),
    experienceLevel: ExperienceLevel.HobbyProject,
    url: "https://scratch.mit.edu/",
    description:
      "Scratch is a block-based visual programming language and online community.",
  },
  {
    name: "Fusion 360",
    image: "/tools/fusion.png",
    categories: getCategoriesFromID("3d"),
    experienceLevel: ExperienceLevel.HobbyProject,
    url: "https://www.autodesk.com/products/fusion-360/",
    description:
      "Fusion 360 is a cloud-based 3D CAD, CAM, and CAE platform for product development.",
  },
  {
    name: "Sketchup",
    image: "/tools/sketchup.png",
    categories: getCategoriesFromID("3d"),
    experienceLevel: ExperienceLevel.HobbyProject,
    url: "https://www.sketchup.com/",
    description:
      "SketchUp is a 3D modeling computer program for a wide range of drawing applications such as architectural, interior design, landscape architecture, civil and mechanical engineering, film and video game design.",
  },
  {
    name: "Midjourney",
    image: "/tools/midjourney.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.HobbyProject,
    url: "https://www.midjourney.com/",
    description:
      "Midjourney is a platform that helps you to create and share your journey.",
  },
  {
    name: "Copilot",
    image: "/tools/copilot.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://copilot.github.com/",
    description:
      "GitHub Copilot is an AI pair programmer that helps you write code faster.",
  },
  {
    name: "Chat GPT",
    image: "/tools/chatgpt.png",
    categories: getCategoriesFromID("miscellaneous", "apis"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://openai.com/chatgpt",
    description:
      "ChatGPT is a large language model trained to generate human-like responses to given prompts.",
  },
  {
    name: "Git",
    image: "/tools/git.png",
    categories: getCategoriesFromID("devops"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://git-scm.com/",
    description:
      "Git is a distributed version control system for tracking changes in source code during software development.",
  },
  {
    name: "GitHub",
    image: "/tools/github.png",
    categories: getCategoriesFromID("devops"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://github.com/",
    description:
      "GitHub is a web-based platform for version control using Git.",
  },
  {
    name: "GitLab",
    image: "/tools/gitlab.png",
    categories: getCategoriesFromID("devops"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://gitlab.com/",
    description:
      "GitLab is a web-based DevOps lifecycle tool that provides a Git repository manager providing wiki, issue-tracking, and CI/CD pipeline features.",
  },
  {
    name: "Cloudflare",
    image: "/tools/cloudflare.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.cloudflare.com/",
    description:
      "Cloudflare is a web-infrastructure and website-security company, providing content-delivery-network services, DDoS mitigation, Internet security, and distributed domain-name-server services.",
  },
  {
    name: "SQL",
    image: "/tools/sql.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://en.wikipedia.org/wiki/SQL",
    description:
      "SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system.",
  },
  {
    name: "WireShark",
    image: "/tools/wireshark.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.wireshark.org/",
    description: "Wireshark is a free and open-source packet analyzer.",
  },
  {
    name: "VirtualBox",
    image: "/tools/virtualbox.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.virtualbox.org/",
    description:
      "VirtualBox is a free and open-source hosted hypervisor for x86 virtualization.",
  },
  {
    name: "Jupyter Notebook",
    image: "/tools/jupyter.png",
    categories: getCategoriesFromID("ide"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://jupyter.org/",
    description:
      "Jupyter Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations, and narrative text.",
  },
  {
    name: "Proxmox",
    image: "/tools/proxmox.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.proxmox.com/",
    description:
      "Proxmox Virtual Environment is an open-source server virtualization management platform.",
  },
  {
    name: "IJava",
    image: "/tools/ijava.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://github.com/SpencerPark/IJava",
    description:
      "IJava is a custom language created to introduce Java to Computer Science students.",
  },
  {
    name: "WordPress",
    image: "/tools/wordpress.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://wordpress.org/",
    description:
      "WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database.",
  },
  {
    name: "Java EE",
    image: "/tools/java.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.oracle.com/java/technologies/java-ee-glance.html",
    description:
      "Java Platform, Enterprise Edition (Java EE) is a collection of Java APIs owned by Oracle that software developers can use to write server-side applications.",
  },
  {
    name: "Java FX",
    image: "/tools/javafx.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://openjfx.io/",
    description:
      "JavaFX is a software platform for creating and delivering desktop applications, as well as rich internet applications that can run across a wide variety of devices.",
  },
  {
    name: "JQuery",
    image: "/tools/jquery.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://jquery.com/",
    description:
      "jQuery is a fast, small, and feature-rich JavaScript library.",
  },
  {
    name: "SQLite",
    image: "/tools/sqlite.png",
    categories: getCategoriesFromID("databases"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.sqlite.org/",
    description:
      "SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.",
  },
  {
    name: "Android Studio",
    image: "/tools/android-studio.png",
    categories: getCategoriesFromID("ide"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://developer.android.com/studio",
    description:
      "Android Studio is the official integrated development environment for Google's Android operating system.",
  },
  {
    name: "GNS3",
    image: "/tools/gns3.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.gns3.com/",
    description:
      "GNS3 is a graphical network simulator that allows simulation of complex networks.",
  },
  {
    name: "SolidWorks",
    image: "/tools/solidworks.png",
    categories: getCategoriesFromID("3d"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.solidworks.com/",
    description:
      "SolidWorks is a solid modeling computer-aided design and computer-aided engineering computer program.",
  },
  {
    name: "Scrum",
    image: "/tools/scrum.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.scrum.org/",
    description:
      "Scrum is a framework within which people can address complex adaptive problems, while productively and creatively delivering high-value products.",
  },
  {
    name: "Kanban",
    image: "/tools/kanban.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.atlassian.com/agile/kanban",
    description:
      "Kanban is a method for managing knowledge work with an emphasis on just-in-time delivery while not overloading the team members.",
  },
  {
    name: "TDD",
    image: "/tools/tdd.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://en.wikipedia.org/wiki/Test-driven_development",
    description:
      "Test-driven development is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved to pass the new tests.",
  },
  {
    name: "JUnit",
    image: "/tools/junit.png",
    categories: getCategoriesFromID("devops"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://junit.org/junit5/",
    description:
      "JUnit is a unit testing framework for the Java programming language.",
  },
  {
    name: "Gherkin",
    image: "/tools/gherkin.png",
    categories: getCategoriesFromID("devops"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://cucumber.io/docs/gherkin/",
    description:
      "Gherkin is a domain-specific language for describing formalized executable test cases.",
  },

  {
    name: "PayPal",
    image: "/tools/paypal.png",
    categories: getCategoriesFromID("apis"),
    experienceLevel: ExperienceLevel.HobbyProject,
    url: "https://www.paypal.com/",
    description:
      "PayPal is an American company operating an online payments system in the majority of countries that support online money transfers.",
  },
  {
    name: "Stripe",
    image: "/tools/stripe.png",
    categories: getCategoriesFromID("apis"),
    experienceLevel: ExperienceLevel.HobbyProject,
    url: "https://stripe.com/",
    description:
      "Stripe is an American financial services and software as a service company.",
  },
  {
    name: "Docker",
    image: "/tools/docker.png",
    categories: getCategoriesFromID("devops"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.docker.com/",
    description:
      "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
  },
  {
    name: "Postman",
    image: "/tools/postman.png",
    categories: getCategoriesFromID("apis"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.postman.com/",
    description: "Postman is a collaboration platform for API development.",
  },
  {
    name: "Bruno",
    image: "/tools/bruno.png",
    categories: getCategoriesFromID("apis"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.bruno.com/",
    description: "Bruno is file based API for developers.",
  },
  {
    name: "Kubernetes",
    image: "/tools/kubernetes.png",
    categories: getCategoriesFromID("devops"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://kubernetes.io/",
    description:
      "Kubernetes is an open-source container-orchestration system for automating computer application deployment, scaling, and management.",
  },
  {
    name: "GitKraken",
    image: "/tools/gitkraken.png",
    categories: getCategoriesFromID("devops"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.gitkraken.com/",
    description: "GitKraken is a Git client that helps make sense of Git.",
  },
  {
    name: "Figma",
    image: "/tools/figma.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.figma.com/",
    description:
      "Figma is a cloud-based design tool that is similar to Sketch in functionality and features, but with big differences that make Figma better for team collaboration.",
  },
  {
    name: "Discord",
    image: "/tools/discord.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://discord.com/",
    description:
      "Discord is a proprietary freeware VoIP application and digital distribution platform designed for creating communities ranging from gamers to education and businesses.",
  },
  {
    name: "Trello",
    image: "/tools/trello.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://trello.com/",
    description:
      "Trello is a web-based list-making application for task management.",
  },
  {
    name: "Genially",
    image: "/tools/genially.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.SchoolProject,
    url: "https://www.genial.ly/",
    description:
      "Genially is a web-based tool that allows you to create interactive and animated content.",
  },
];

// sort by categories position ex(first programming languages, then frameworks, etc)
// then by experience level in the same category
toolsList.sort((a, b) => {
  if (a.categories[0].id === b.categories[0].id) {
    return (
      Object.values(ExperienceLevel).indexOf(a.experienceLevel) -
      Object.values(ExperienceLevel).indexOf(b.experienceLevel)
    );
  }
  return (
    toolsCategories.findIndex((cat) => cat.id === a.categories[0].id) -
    toolsCategories.findIndex((cat) => cat.id === b.categories[0].id)
  );
});

export function getToolsByNames(...names: string[]): Tool[] {
  return toolsList.filter((tool) => names.includes(tool.name));
}

const levelArray = Object.values(ExperienceLevel);
const [activeTools, setActiveTools] = createSignal(toolsList as Tool[]);

export const Tools: Component = () => {
  return (
    <>
      <div class="flex flex-wrap gap-4 py-4">
        <button
          class="btn btn-primary btn-outline"
          onClick={() => {
            setActiveTools(toolsList);
            setActiveToolsCategory([]);
          }}
        >
          <i class="fa-solid fa-sync mr-2 text-blue"></i>
          <span class="text-zinc-300 hover:text-white">Reset Filters</span>
        </button>
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
              <div class="p-4">
                {/*  title: level */}
                <h2 class="text-2xl font-bold text-blue">{level}</h2>
                {/*  descripton: ExperienceLevelDescription[level].tools*/}
                <p class="text-zinc-300">
                  {ExperienceLevelDescription[level].tools}
                </p>
              </div>

              <div class="flex flex-wrap gap-2">
                <For
                  each={activeTools().filter(
                    (tool) => tool.experienceLevel === level,
                  )}
                >
                  {(tool) => (
                    <A
                      href={tool.url}
                      class="flex flex-col items-center gap-4 w-32 h-32 justify-center p-4 tooltip"
                      data-tip={tool.description}
                    >
                      <div class="max-h-12 max-w-12 flex items-center justify-center w-12 h-12">
                        <img
                          src={tool.image}
                          alt={tool.name}
                          class="max-h-12 max-w-12"
                        />
                      </div>
                      <span class="text-zinc-300 text-nowrap">{tool.name}</span>
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
