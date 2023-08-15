import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/pr11.jpeg";
import IMG2 from "../../assets/pr2.png";
import IMG3 from "../../assets/pr33333.jpg";
import IMG4 from "../../assets/pr4.jpeg";
import IMG5 from "../../assets/pr5.png";
// import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "FOOD GO - Grocery Site",
    github: "https://github.com/anshikagupta0016/grocery-site.git",
    // demo: "https://anshika-grocery-site.netlify.app/",
  },
  {
    id: 2,
    image: IMG5,
    title: "MY TO-DO LIST",
    github: "https://github.com/anshikagupta0016/My-To-do-List.git",
    // demo: "https://github.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "WHATSAPP CLONE",
    github: "https://github.com",
    // demo: "https://github.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "WEATHER APP",
    github: "https://github.com/anshikagupta0016/weather-app.git",
    // demo: "https://github.com",
  },
  {
    id: 5,
    image: IMG2,
    title: "IGNITION - FITNESS WEBSITE",
    github: "https://github.com/anshikagupta0016/Ignition-Fitness-Website.git",
    // demo: "https://github.com",
  },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Project 6",
  //   github: "https://github.com",
  //   // demo: "https://github.com",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Projects </h5> <h2> Portfolio </h2>
      <div className="container portfolio__container">
        {/* {data.map(({ id, image, title, github, demo }) => { */}
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title} </h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                {/* <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  
                  Live Demo
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
