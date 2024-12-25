import { Component, For } from "solid-js";
import { A } from "@solidjs/router";

const socialLinks = [
  {
    title: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=varumihir@gmail.com",
    fontAwesomeIcon: "fas fa-envelope",
  },
  {
    title: "GitHub",
    href: "https://github.com/MihirVaru7",
    fontAwesomeIcon: "fab fa-github",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/mihir-varu-2a4a4a263/",
    fontAwesomeIcon: "fab fa-linkedin",
  },
  {
    title: "phone",
    href: "tel:+917778826655",
    fontAwesomeIcon: "fas fa-phone",
  }
];

export const Social: Component = () => {
  return (
    <>
      <div class="flex flex-wrap items-center justify-center gap-6 w-full p-4">
        <For each={socialLinks}>
          {({ title, fontAwesomeIcon, href }) => (
            <a href={href} class="btn btn-primary btn-outline">
              <i class={fontAwesomeIcon + " text-blue mr-2 text-lg"} />
              <span class="text-zinc-300 hover:text-white">{title}</span>
            </a>
          )}
        </For>
      </div>
    </>
  );
};
