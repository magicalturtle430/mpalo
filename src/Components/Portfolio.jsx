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
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Learn TV - Run cognitive services on IoT edge - 19th October 2020",
    description:
      "On the 19th October at 1PM PDT, 9PM BST, Marko Paloski, a Microsoft Learn Student Ambassador from Ss. Cyril and Methodius University in Skopje, North Macedonia, and Jim Bennett, a Cloud Advocate from Microsoft will livestream an in-depth walkthrough of how to run cognitive services on IoT Edge on Learn TV.",
    url: "https://techcommunity.microsoft.com/t5/educator-developer-blog/learn-tv-run-cognitive-services-on-iot-edge-19th-october-2020/ba-p/1732799?WT.mc_id=learntv-social-jabenn",
  },
  {
    title: "July IOT",
    description:
      "July is the month for #IoT, if you want to start learning IoT now is the right time!",
    url: "https://lnkd.in/eHCVQCN",
  },
  {
    title: "Microsoft #ImagineCupJunior 2021/22/23/24",
    description:
      "I've been part of the ImagineCup Junior as Judge for 4 years in a row.",
    url: "https://lnkd.in/e_gpGcy",
  },
  {
    title: "The Final Report of the ELSA International Legal Research Group on Internet Censorship",
    description:
      " I took part in this project at the beginning of the year as one of the National Researchers for Macedonia, it was new and interesting experience to research and work on the legal things as technical person.",
    url: "https://lnkd.in/e6Cncxa",
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
