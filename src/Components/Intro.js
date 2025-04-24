import React from 'react';
import "./Intro.css";

function Intro() {
    return (
        <section id="intro">
            <div className="content-wrapper1">
                
                <div className="intro-image">
                    <img src="/image.png" alt="Sumayya" />
                </div>

                
                <div className="intro-content">
                    <span className='hello'>Hello, </span>
                    <span className='intro-text'>
                        I'm <span className='introName'>Sumayya</span><br />Full Stack Developer
                    </span>
                    <p className="introPara">
                        I'm passionate about creating interactive, user-friendly websites and applications using the latest frontend and technologies. I love turning ideas into beautiful and functional digital experiences.
                    </p>
                    <a href="/Resume1.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
                        Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Intro;
