import React from 'react';
import SkillBadge from '../components/SkillBadge';

const AboutPage = () => {
  const experiencia = [
    'Gerente de Turno - McDonald\'s (2019-2024)',
  ];

  const educacion = [
    'Analista en Sistemas - Instituto Cervantes',
    'Secundario completo (2022)',
  ];

  const habilidades = [
    'Liderazgo',
    'Excel',
    'Análisis de datos',
    'JavaScript',
    'React',
  ];

  const mostrarEducacion = true;

  return (
    <div className="container mt-4">
      <h1>Sobre mí</h1>

      <p>
        Soy Melani Lozano, estudiante de Analista en Sistemas.
        Me interesa el desarrollo de software y cuento con experiencia
        en liderazgo de equipos, gestión de procesos y análisis de datos.
      </p>

      <h2>Experiencia</h2>
      <ul>
        {experiencia.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {mostrarEducacion && (
        <>
          <h2>Educación</h2>
          <ul>
            {educacion.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}

      <h2>Habilidades</h2>
      <div className="d-flex flex-wrap gap-2">
        {habilidades.map((habilidad) => (
          <SkillBadge key={habilidad} skill={habilidad} />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;