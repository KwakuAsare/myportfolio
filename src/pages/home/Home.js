import React from "react";
import './sass/style.scss';

function Home() {
  return (
    <div className="react-main" id="home">
        <div className="hero">
            <div className="wrapper">
                <h1>Hello.</h1>
                <p>"Sometimes it pays to stay in bed on Monday rather than spending the rest of the week debugging Monday's code."</p>
            </div>
        </div>
        <div className="skills">
            <div className="wrapper">
                <h2 className="mb-4 pb-4">Programming Languages and Tools</h2>
                <div className="skills-wrapper">
                    <div className="skill">
                        <i className="fab fa-html5"></i>
                    </div>
                    <div className="skill">
                        <i className="fab fa-css3-alt"></i>
                    </div>
                    <div className="skill">
                        <i className="fab fa-js-square"></i>
                    </div>
                    <div className="skill">
                        <i className="fab fa-node"></i>
                    </div>
                    <div className="skill">
                        <i className="fab fa-sass"></i>
                    </div>
                    <div className="skill">
                        <i className="fab fa-wordpress"></i>
                    </div>
                    <div className="skill">
                        <i className="fab fa-npm"></i>
                    </div>
                    <div className="skill">
                        <i className="fab fa-git"></i>
                    </div>
                </div>
            </div>
        </div>

        <main className="main">
            <div className="contact-me" id="contactMe">
                <h2 className="card-title main-title mb-4 pb-4 w-100">Contact Me</h2>
                <div className="bio-content">
                    <div className="img-links">
                        <img src={process.env.PUBLIC_URL + "/assets/images/port-pic.jpeg"} alt="port-pic" className="card-img"/>
                        <div className="about-links">
                            <a href="https://www.linkedin.com/in/kwaku-asare-owusu-0a49781b8/" target="_blank" className="linkedIn">LinkedIn</a>
                            <a href="https://github.com/KwakuAsare" target="_blank"  className="GitHub">GitHub</a>
                            <a href="assets/images/myresume.pdf" download target="_blank"  className="resume">Resume<i className="fas fa-file-download"></i></a>
                        </div>
                        <div className="contact-links">
                            <a href="mailto:kwaku.asareowusu@gmail.com"><i className="fas fa-envelope mr-2"></i>kwaku.asareowusu@gmail.com</a>
                            <p><i className="fas fa-phone mr-2"></i>860.796.2389</p>
                        </div>
                    </div>
                    <div className="bio">
                        <p className="card-p">I am a <strong>Full Stack Web Developer</strong>. My best suited programming languages are HTML5, CSS3, JavaScript, Node.js.  <strong> First solve the problem, then write the code.</strong></p>
                        <p className="card-p">Former Biological Sciences student turned Full Stack Software Developer with an inquisitive mind always looking to learn new skills. Adept at using creative skills and collaborating with resourceful individuals to create and develop relevant and easy-to-use applications</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
  );
}

export default Home;