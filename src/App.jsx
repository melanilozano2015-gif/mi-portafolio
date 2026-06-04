import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import useLocalStorage from './hooks/useLocalStorage';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [tema, setTema] = useLocalStorage('tema', 'light');

  const toggleTema = () => {
    setTema((prevTema) => (prevTema === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`container ${tema === 'dark' ? 'bg-dark text-light' : 'bg-light'}`}>
      <Navbar tema={tema} toggleTema={toggleTema} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;