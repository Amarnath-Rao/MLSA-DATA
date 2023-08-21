/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/mark2.jpg";

const imageAltText = "profession";
/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Aspiring guy with a strong academic background in computer science and a passion for systems software and algorithms.Currently pursuing a degree program and am eager to gain practical experience through internships. Possess a solid understanding of Unix/Linux and Windows environments and APIs, working on projects related to Artificial Intelligence and WEB3, and knowledge of network programming. Proficient in programming languages such as C++, Java, and Python, with a focus on excellent implementation skills. Committed to learning and contributing to innovative projects in a dynamic and collaborative work environment. For further please do check out my LinkedIn and GitHub for projects and my updates";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Machine Learning",
  "Full Stack Developer",
  "Devops",
  "Data Science",
  "Software Devoloper",
  "Programming&Problem Solving",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am deeply passionate about leveraging machine learning to tackle complex problems and drive innovation. My experience in this field has equipped me with the tools to develop intelligent solutions that optimize processes and enhance user experiences.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
