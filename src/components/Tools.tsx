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
    experienceLevel: ExperienceLevel.Professional,
    categories: getCategoriesFromID("frameworks"),
    description:
      "Maven is a build automation tool used primarily for Java projects.",
  },
  

  {
    name: "React",
    image: "/tools/react.png",
    url: "https://reactjs.org",
    experienceLevel: ExperienceLevel.Professional,
    categories: getCategoriesFromID("frameworks"),
    description: "React is a JavaScript library for building user interfaces.",
  },
  

  // Frameworks
 
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
    name: "IntelliJ IDEA",
    image: "/tools/intellij.png",
    categories: getCategoriesFromID("ide"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.jetbrains.com/idea/",
    description:
      "IntelliJ IDEA is a Java integrated development environment for developing computer software.",
  },
  
  {
    name: "Java",
    image: "/tools/java.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.Professional,
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
    name: "Bootstrap",
    image: "/tools/bootstrap.png",
    categories: getCategoriesFromID("frameworks"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://getbootstrap.com/",
    description:
      "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
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
    name: "C",
    image: "/tools/c.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://en.wikipedia.org/wiki/C_(programming_language)",
    description:
      "C is a general-purpose, procedural computer programming language supporting structured programming.",
  },
  {
    name: "C++",
    image: "/tools/c++.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.cplusplus.com/",
    description:
      "C++ is a general-purpose programming language created as an extension of the C programming language.",
  },

  {
    name: "Python",
    image: "/tools/python.png",
    categories: getCategoriesFromID("languages"),
    experienceLevel: ExperienceLevel.Professional,
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
    name: "MySQL",
    image: "/tools/mysql.png",
    categories: getCategoriesFromID("databases"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.mysql.com/",
    description:
      "MySQL is an open-source relational database management system.",
  },



 
  
 
 
  
 
  {
    name: "Midjourney",
    image: "/tools/midjourney.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.Professional,
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
    name: "WireShark",
    image: "/tools/wireshark.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.wireshark.org/",
    description: "Wireshark is a free and open-source packet analyzer.",
  },
  {
    name: "VirtualBox",
    image: "/tools/virtualbox.png",
    categories: getCategoriesFromID("miscellaneous"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.virtualbox.org/",
    description:
      "VirtualBox is a free and open-source hosted hypervisor for x86 virtualization.",
  },
  {
    name: "Jupyter Notebook",
    image: "/tools/jupyter.png",
    categories: getCategoriesFromID("ide"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://jupyter.org/",
    description:
      "Jupyter Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations, and narrative text.",
  },
  {
    name: "Android Studio",
    image: "/tools/android-studio.png",
    categories: getCategoriesFromID("ide"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://developer.android.com/studio",
    description:
      "Android Studio is the official integrated development environment for Google's Android operating system.",
  },

  
  {
    name: "PayPal",
    image: "/tools/paypal.png",
    categories: getCategoriesFromID("apis"),
    experienceLevel: ExperienceLevel.Professional,
    url: "https://www.paypal.com/",
    description:
      "PayPal is an American company operating an online payments system in the majority of countries that support online money transfers.",
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
