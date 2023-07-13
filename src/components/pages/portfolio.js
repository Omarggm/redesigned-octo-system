import React from "react";

export default function Portfolio() {
  const projects = [
    {
      name: "Get Good Games",
      description: "A website to find good deals on video games.",
      image: "https://via.placeholder.com/150",
      deployedUrl: "https://frank-colorado.github.io/get-good-games/",
      githubUrl: "https://github.com/Frank-Colorado/get-good-games",
    },
    {
      name: "Project 2",
      description: "A webapp to order food from The Krusty Krab or The Chum Bucket.",
      image: "https://via.placeholder.com/150",
      deployedUrl: "https://bbbooking.herokuapp.com/",
      githubUrl: "https://github.com/Omarggm/BikiniBottomBooking",
    },
    {
      name: "Project 3",
      description: "This is the description for Project 3",
      image: "https://via.placeholder.com/150",
      deployedUrl: "https://www.google.com",
      githubUrl: "https://www.github.com",
    },
    {
      name: "Project 4",
      description: "This is the description for Project 4",
      image: "https://via.placeholder.com/150",
      deployedUrl: "https://www.google.com",
      githubUrl: "https://www.github.com",
    },
    {
      name: "Project 5",
      description: "This is the description for Project 5",
      image: "https://via.placeholder.com/150",
      deployedUrl: "https://www.google.com",
      githubUrl: "https://www.github.com",
    },
    {
      name: "Project 6",
      description: "This is the description for Project 6",
      image: "https://via.placeholder.com/150",
      deployedUrl: "https://www.google.com",
      githubUrl: "https://www.github.com",
    },
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.name}</h3>
            <img src={project.image} alt={project.name} />
            <p>{project.description}</p>
            <a
              href={project.deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed Application
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
