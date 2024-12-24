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
    name:"javascript",
    icon:"fa-brands fa-js",
    id:"javascript",
  },
  {
    name:"fullstack",
    icon:"fa-solid fa-server",
    id:"fullstack",
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
    name: "Ecommerce Website",
    description: `
                An e-commerce website built with React, Node.js, and MongoDB provides a seamless platform for online shopping. The frontend, developed using React, offers a dynamic and responsive user interface, ensuring a smooth browsing experience for customers across devices. The backend, powered by Node.js and Express, handles robust server-side logic, API integration, and secure user authentication. MongoDB serves as the database, efficiently managing user accounts, product details, inventory, and order information. This full-stack application supports essential e-commerce functionalities like product listings, search, filtering, user registration, login, cart management, and secure checkout. Its scalable design makes it ideal for expanding features such as user activity tracking, admin dashboards, and personalized recommendations.
            `,
    links: [
      {
        name: "GitHub",
        url: "https://github.com/MihirVaru7/ecommerce.git",
        type: LinkType.GitHub,
      },
    ],
    images: [
      "/projects/ecom/1 (1).png",
      "/projects/ecom/1 (2).png",
      "/projects/ecom/1 (3).png",
      "/projects/ecom/1 (4).png",
      "/projects/ecom/1 (5).png",
      "/projects/ecom/1 (6).png",
      "/projects/ecom/1 (7).png",

    ],
    experienceLevel: ExperienceLevel.Professional,
    tools: getToolsByNames(
      "HTML",
      "CSS",
      "NodeJS",
      "Express",
      "MongoDB",
      "Git",
      "GitHub",
      "React"
    ),
    date: "",
    languages: [ ""],
    categories: getCategoriesFromID("web", "fullstack"),
  },
  {
    name: "AllInOne Store",
    description: `
                An All-in-One Store website, developed using React, Node.js, and MongoDB, serves as a comprehensive platform for customers to shop for a wide range of products, including electronics, furniture, accessories, and more. The frontend, built with React, delivers a dynamic and user-friendly interface with features like advanced search, filtering, and personalized product recommendations. The Node.js and Express backend ensures efficient server-side operations, including user authentication, order processing, and API integrations. MongoDB provides a scalable database to manage diverse product categories, inventory, and customer data. This full-stack solution supports core e-commerce functionalities such as multi-category browsing, user registration, cart and wishlist management, secure payments, and order tracking, making it a versatile and scalable platform for a seamless shopping experience across all product categories.
            `,
    links: [
      {
        name: "GitHub",
        url: "https://github.com/MihirVaru7/allinone-store.git",
        type: LinkType.GitHub,
      },
    ],
    images: ["/projects/multi/1 (2).png",
    "/projects/multi/1 (3).png",
    "/projects/multi/1 (4).png",
    "/projects/multi/1 (5).png",
    "/projects/multi/1 (6).png",
    "/projects/multi/1 (7).png",
    "/projects/multi/1 (8).png",
    "/projects/multi/1 (9).png",
    "/projects/multi/1 (10).png",
    "/projects/multi/1 (11).png",
    "/projects/multi/1 (12).png",
    "/projects/multi/1 (13).png",

    ],
    experienceLevel: ExperienceLevel.Professional,
    tools: getToolsByNames(
      "HTML",
      "CSS",
      "NodeJS",
      "Express",
      "MongoDB",
      "Git",
      "GitHub",
      "React"
    ),
    date: "",
    languages: [""],
    categories: getCategoriesFromID("fullstack", "web"),
  },
  {
    name: "javascript game",
    description: `
                A JavaScript-based game built using HTML, CSS, Bootstrap, and cookies combines engaging gameplay with a visually appealing interface and persistent user data. The game leverages HTML for structure, CSS for styling, and Bootstrap for responsive design, ensuring a seamless experience across various devices. JavaScript powers the core game logic, interactivity, and animations, bringing the game to life. Cookies are utilized to store player data, such as high scores, progress, and preferences, enabling players to resume their game or track achievements even after closing the browser. This combination of technologies results in a fun, user-friendly, and lightweight game that showcases creativity and technical skills while offering players an engaging and personalized experience.
    `,
    links: [
      {
        name: "GitHub",
        url: "https://github.com/MihirVaru7/word-quest.git",
        type: LinkType.GitHub,
      },
    ],
    images: [
      "/projects/game/1 (2).png",
      "/projects/game/1 (3).png",
      "/projects/game/1 (4).png",
      "/projects/game/1 (5).png",
      "/projects/game/1 (6).png",
      "/projects/game/1 (7).png",
      "/projects/game/1 (8).png",
      "/projects/game/1 (9).png",
      "/projects/game/1 (10).png",
      "/projects/game/1 (11).png",
      "/projects/game/1 (12).png",
      "/projects/game/1 (13).png",
      "/projects/game/1 (14).png",

    ],
    experienceLevel: ExperienceLevel.Professional,
    tools: getToolsByNames(
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Git", 
      "GitHub",
      "Cookies",
    ),
    date: "",
    languages: [ ""],
    categories: getCategoriesFromID("web", "javascript"),
  },
  {
    name: "youtube video downloader",
    description: `
                A YouTube video downloader application built using JavaScript provides users with a simple and efficient way to download videos directly to their devices. The frontend, crafted with HTML and CSS, offers a clean and intuitive user interface, while optional Bootstrap integration ensures responsiveness and a modern design. JavaScript handles user interactions, such as processing the input YouTube URL and triggering the download process.

The backend, powered by Node.js and Express, integrates third-party APIs or libraries like ytdl-core to fetch video data and enable downloading in various formats and resolutions. Cookies or local storage can be used to save user preferences, such as default video quality or frequently downloaded links. This application delivers a user-friendly and efficient solution for managing YouTube video downloads while emphasizing security and reliability in handling user requests.
    `,
    links: [
      {
        name: "GitHub",
        url: "https://github.com/MihirVaru7/yt-downloder.git",
        type: LinkType.GitHub,
      },
    ],
    images: [
      "/projects/yt-downlod/ytd (2).png",
      "/projects/yt-downlod/ytd (1).png",
    ],
    experienceLevel: ExperienceLevel.Professional,
    tools: getToolsByNames(
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "NodeJS",
      "Express",
      "ytdl-core",
      "Git", 
      "GitHub",
      "Cookies",
      "LocalStorage"
    ),
    date: "",
    languages: [ ""],
    categories: getCategoriesFromID("web", "javascript"),
  },
  {
    name: "youtube video info",
    description: `
                A YouTube Video Info Fetcher application provides users with detailed information about a YouTube video by utilizing the YouTube Data API. The frontend, built with HTML, CSS, and Bootstrap, presents a responsive and visually appealing interface where users can input a video URL or ID. JavaScript handles user interactions, such as parsing the input and making API requests. The backend, powered by Node.js and Express.js, securely communicates with the YouTube Data API to fetch video details like title, description, channel name, view count, like count, and publish date.

The application uses Git and GitHub for version control and collaboration. Cookies or local storage can be implemented to store user preferences, such as previously searched video IDs or preferred data display format. This project combines modern web technologies to create a feature-rich and user-friendly tool for retrieving YouTube video metadata.`,
    links: [
      {
        name: "GitHub",
        url: "https://github.com/MihirVaru7/yt-video-info.git",
        type: LinkType.GitHub,
      },
    ],
    images: [
      "/projects/yt-view/yti (1).png",
      "/projects/yt-view/yti (2).png",
    ],
    experienceLevel: ExperienceLevel.Professional,
    tools: getToolsByNames(
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "NodeJS",
      "Express",
      "YouTube Data API",
      "ytdl-core",
      "Git", 
      "GitHub",
      "Cookies",
      "LocalStorage"
    ),
    date: "",
    languages: [ ""],
    categories: getCategoriesFromID("web", "javascript"),
  },
  {
    name: "Instagram Clone",
    description: `
               An Instagram Clone built using HTML, CSS, Bootstrap, and JavaScript replicates the core design and interactive features of Instagram while showcasing modern web development skills. The application includes a responsive layout for user profiles, posts, and a feed interface designed with HTML for structure and CSS for custom styling. Bootstrap ensures the layout adapts seamlessly across devices, offering a professional and polished UI.

JavaScript powers interactive features such as a dynamic like button, comments section, modal pop-ups for image previews, and a basic search bar for exploring profiles or posts. The clone focuses on frontend development, providing a visually appealing and functional interface while highlighting how these core technologies can be used to mimic real-world social media platforms.`,
    links: [
      {
        name: "GitHub",
        url: "https://github.com/MihirVaru7/ig-clone.git",
        type: LinkType.GitHub,
      },
    ],
    images: [
      "/projects/ig/ig (1).png",
      "/projects/ig/ig (2).png",
    ],
    experienceLevel: ExperienceLevel.Professional,
    tools: getToolsByNames(
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript"
    ),
    date: "",
    languages: [ ""],
    categories: getCategoriesFromID("web"),
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
