import './Home.css';
import image from '../../img/photo.png';
import { motion } from 'framer-motion';
import cv from '../../files/CV.pdf';

const Home = () => {
    return (
        <section id="home" className='home'>
            <div className='home-content'>
                <p>Hi, I'm <span>Kamran Hasanov</span></p>
                <p>And I'm a <span>Frontend developer</span></p>
                <a href={cv} target="_blank" rel="noreferrer">
                    <motion.button whileHover={{ scale: 1.1 }} className="cv-button">
                        Download CV
                    </motion.button>
                </a>
            </div>
            <img src={image} alt="Man"></img>
        </section>
    );
}

export default Home;