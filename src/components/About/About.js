import "./About.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-head">
                <p>About me</p>
            </div>
            <div className="about-content">
                <div className="social-network">
                    <div className="network-content">
                        <FaLinkedin className="about-logo" />
                        <a className="network-link" target="_blank" href="https://www.linkedin.com/in/kamran-h%C9%99s%C9%99nov-27aa501b2/">Linkedin</a>
                    </div>
                    <div className="network-content">
                        <FaGithub className="about-logo" />
                        <a className="network-link" target="_blank" href="https://github.com/H-Kamran">Github</a>
                    </div>
                </div>
                <div className="about-me">
                    <p>In 2022, I graduated from Information technologies speciality of ASOIU.</p>
                </div>
            </div>
        </section>
    );
}

export default About;