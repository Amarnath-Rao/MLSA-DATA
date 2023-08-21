/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/mark3.jpg";

const imageAltText = "universe";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Voucherize",
    description:
      "Decentrailized application that allows users to create, manage, and redeem vouchers. Built with React, Solidity, and Hardhat.",
    url: "https://github.com/Amarnath-Rao/Voucherize",
  },
  {
    title: "Social Media App Prototype",
    description:
      " Prototype for social media using MERN stack and GraphQL. Includes authentication, CRUD operations, and real-time updates.",
    url: "https://github.com/Amarnath-Rao/Social-Media-App-Prototype",
  },
  {
    title: "NutriCheck",
    description:
      "NutriCheck is a comprehensive health platform that integrates with popular health apps. It offers three key features: KCalc for food tracking and Google Fit integration, WeatherBite for personalized food recommendations based on location and health conditions, and VitalScan for storing and visualizing health reports.",
    url: "https://github.com/Amarnath-Rao/NutriCheck",
  },
  {
    title: "Face Detection & Age, Gender using Python, ML and Opencv",
    description:
      "This is a simple implementation of Face Detection and Age using Python, ML and OpenCV. ",
    url: "https://github.com/Amarnath-Rao/FaceDetection-Age-Gender_PythonML",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
