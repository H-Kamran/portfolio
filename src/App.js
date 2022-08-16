// import logo from './logo.svg';
import './App.css';
// import { Route, Routes, useLocation } from "react-router-dom";

// import Home from './pages/Home/Home.js';
import Header from './components/Header/Header.js';
import About from './components/About/About.js'
import Skills from './components/Skills/Skills.js'
import Contact from './components/Contact/Contact.js'
import Home from './components/Home/Home.js';

import { AnimatePresence } from 'framer-motion'

function App() {
  // const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
        <Header />
        <main>
          <Home />
          <Skills />
          <About />
          <Contact />
        </main>
      </AnimatePresence>
      {/* <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
        </Routes>
      </main> */}
    </div>
  );
}

export default App;
