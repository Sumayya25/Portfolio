import React from "react";
import "./Work.css";

const projects = [
  {
    title: "2048 Game",
    description: "Classic 2048 puzzle game with intuitive controls.",
    link: "https://fascinating-donut-ff22ce.netlify.app/",
    source: "https://github.com/Sumayya25/2048Game", 
    image: "/2048.png" 
  },
  {
    title: "Todo App",
    description: "Manage daily tasks with reminders and prioritization.",
    link: "https://to-do-app-nine-rouge.vercel.app/",
    source: "https://github.com/Sumayya25/ToDoApp",
    image: "/todo.png"
  },
  {
    title: "Image Generator",
    description: "Generates images based on user input in real-time.",
    link: "https://symphonious-sprite-05635c.netlify.app/",
    source: "https://github.com/Sumayya25/ImageGenerator",
    image: "/imggen.png"
  }
];

const Work = () => {
  return (
    <div className="work-container" id="work">
      <h2 className="work-title">Works</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} className="project-image" />
            <p>{project.description}</p>
            <div className="button-group">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">Demo</a>
              <a href={project.source} target="_blank" rel="noopener noreferrer" className="btn">Source</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
