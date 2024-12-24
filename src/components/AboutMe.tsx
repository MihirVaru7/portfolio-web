import { Component } from "solid-js";
import { A } from "@solidjs/router";

export const AboutMe: Component = () => {
  return (
    <>
      <div class="flex flex-row gap-4">
        <div class="w-5/6 text-justify">
        <br />
          <p>
          Hey! I'm Mihir Varu. I'm a passionate developer with expertise in front-end and back-end technologies, including HTML, CSS, JavaScript, Bootstrap, React.js, and Node.js. I thrive on solving complex problems, creating innovative projects, and tackling new challenges. With years of experience in Discord and Minecraft server development, I bring creativity, technical skills, and dedication to every project I undertake.
          </p><br />

          <p>
            Currently, I'm studying at the{" "}
            <A
              class="link text-blue hover:text-blue-active"
              href="https://www.marwadiuniversity.ac.in/"
            >
              Marwadi University
            </A>{" "}
            in Rajkot to obtain a Bachelor's degree in Computer Science. My focus is on gaining practical experience and excelling in web development, server management, and innovative technologies.
          </p>
          <br />
          
          <p>
          As someone who is highly motivated and detail-oriented, I take pride in my problem-solving skills and ability to adapt to new challenges. I am currently in my 7th semester, preparing for an internship in my final semester, with aspirations to secure a full-time role in the tech industry. My goal is to contribute to innovative projects, continually learn, and grow as a professional developer.


          </p>
        </div>

        <div class="flex justify-center items-center w-2/4">
          <img
            alt="picture_of_me"
            src="/myphoto.png"
            class="w-3/6 rounded-[25%] shadow-lg"
          />
        </div>
      </div>
    </>
  );
};
