import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SkillBadge from '../components/SkillBadge';

const HomePage = () => {
  const [tema, setTema] = useState('light');

  const nombre = 'Melani Lozano';
  const titulo = 'Analista en Sistemas';
  const skills = ['JavaScript', 'React', 'CSS', 'Node.js'];

  const toggleTema = () => {
    setTema((prevTema) => (prevTema === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={tema === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}>
      <section className="text-center py-5">
        <h1>{nombre}</h1>
        <p className="lead">{titulo}</p>
        <p>
          Soy estudiante de Analista en Sistemas apasionada por la tecnología y el
          aprendizaje continuo. Me interesa el desarrollo de aplicaciones web, el
          análisis de información y la creación de soluciones que optimicen procesos.
          A lo largo de mi formación académica he trabajado en proyectos relacionados
          con análisis de sistemas, modelado de procesos y desarrollo de aplicaciones.
          Complemento mis conocimientos técnicos con experiencia en liderazgo,
          trabajo en equipo y gestión operativa, lo que me permite adaptarme a
          distintos entornos y enfrentar nuevos desafíos con una visión analítica
          y orientada a resultados.
        </p>
        <button className="btn btn-primary mt-3" onClick={toggleTema}>
          {tema === 'light' ? 'Cambiar a dark' : 'Cambiar a light'}
        </button>
      </section>

      <section className="mb-5">
        <h2>Habilidades principales</h2>
        <div className="d-flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h2>Contacto</h2>
        <Link to="/contact" className="btn btn-outline-primary">
          Ir a Contact
        </Link>
      </section>
    </div>
  );
};

export default HomePage;