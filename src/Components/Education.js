import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <div className="education-wrapper">
      <h1 className="main-heading">Education</h1> 
      <div className="education-container">
        
        <div className="education-box left-box">
          <h2 className="heading">B.Tech in Information Technology</h2>
          <p className="subtext">2021 - 2025</p>
          <p className="details">
            Currently pursuing a Bachelor's degree in Information Technology with a focus on 
            software development, data structures, and web technologies.
          </p>
        </div>

        
        <div className="education-box right-box">
          <div className="section">
            <h2 className="heading">Senior Secondary</h2>
            <p className="subtext">2020 - 2021</p>
            <p className="details">
              Completed 12th grade with a specialization in Science (PCM). Focused on Mathematics, 
              Physics, and Chemistry, with additional interest in Computer Science.
            </p>
          </div>
          <div className="section">
            <h2 className="heading">Secondary</h2>
            <p className="subtext">2018 - 2019</p>
            <p className="details">
              Completed 10th grade with a strong foundation in Mathematics, Science, and 
              English. Developed an early interest in coding and technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education