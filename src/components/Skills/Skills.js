import "./Skills.css";

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="skills-div">
                <div className="skills-head-div">
                    <p>Technical skills</p>
                </div>
                <ul className="skills-list">
                    <li>HTML, CSS</li>
                    <li>Bootstrap</li>
                    <li>Javascript</li>
                    <li>React, Hooks</li>
                    <li>Redux</li>
                </ul>
            </div>
            <div className="skills-div">
                <div className="skills-head-div">
                    <p>Soft skills</p>
                </div>
                <ul className="skills-list">
                    <li>Analytical thinking</li>
                    <li>Research</li>
                    <li>Problem solving</li>
                    <li>Comprehending</li>
                    <li>Correct analysing</li>
                </ul>
            </div>
        </section>
    );
}

export default Skills;