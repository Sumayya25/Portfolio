import React from 'react';
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Me</h1>
      <div className="content-wrapper">
      
        <div className="text-section">
          <h2 className="text-xl font-bold">Hi, I am Sumayya</h2>
          <p>
           A Full Stack Developer who enjoys building web applications that are simple, useful, and user-friendly.

I have hands-on experience with the MERN stack (MongoDB, Express.js, React, Node.js), along with Java and SQL. I like working on both frontend and backend, and I enjoy understanding how everything connects behind the scenes.

My main interest is in creating full-stack applications that solve problems in a clean and practical way. Right now, I’m learning more about backend optimization and scalable systems.

I believe in writing clean code, learning something new every day, and growing step by step in the world of tech.

          </p>
        </div>
        
        
        <div className="image-section">
          <img 
            src="/photo.jpeg" 
            alt="Sumayya" 
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
