import { Component, For, Show } from "solid-js";

interface TimelineItem {
  date: string;
  title: string;
  establishment: string;
  description: string;
}

const timeline = [
  {
    date: "2021 - 2025",
    title: "Computer Science Bachelor's Degree",
    establishment: "Marwadi University",
    description:
      "",
  },
  {
    date: "2020 - 2021",
    title: "H.S.C", 
    establishment: "Modi School",
    description:
      "",
  },
  {
    date: "2019",
    title: "S.S.C",
    establishment: "Modi School",
    description:
      "",
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
