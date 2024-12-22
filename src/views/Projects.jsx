import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";
import img1 from "../Screenshot 2024-12-21 171412.png";
import img2 from "../image.png";
import img3 from "../img3.png";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const projectData = [
    {
      imgSrc: img1,
      title: "NFT Marketplace Web Application",
      description:
        "A blockchain-based marketplace for buying and selling NFTs. Created using Web 3 technologies.",
      visitLink: "https://fullnftmarketplace.netlify.app/",
    },
    {
      imgSrc: img3,
      title: "Decentralized Portfolio",
      description:
        "A Web 3.0 decentralized portfolio app to showcase my achievements securely on blockchain integrate metamask crypto wallet for eth transfer.",
      visitLink: "https://decentralizedportfolio.netlify.app/",
    },
    {
      imgSrc: img2,
      title: "Get Advice",
      description:
        "A React-based web application with aesthetic design and user-friendly functionality that gives usefull or funny quotes.",
      visitLink: "https://getadvicee.netlify.app/",
    },
  ];

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          My personal projects
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {projectData.map((project, index) => (
            <Card
              key={index}
              imgSrc={project.imgSrc}
              title={project.title}
              description={project.description}
              visitLink={project.visitLink}
            />
          ))}
        </div>
        <a
          href="/"
          className="w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
        >
          Show More
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;
