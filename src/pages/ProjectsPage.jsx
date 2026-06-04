import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import proyectosData from '../data/proyectos.json';

const ProjectsPage = () => {
  const [proyectos, setProyectos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setProyectos(proyectosData);
    } catch (err) {
      setError('No fue posible cargar los proyectos.');
    } finally {
      setCargando(false);
    }
  }, []);

  if (cargando) return <div className="text-center py-5">Cargando proyectos...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Mis Proyectos</h2>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {proyectos.map((proyecto) => (
          <div className="col" key={proyecto.id}>
            <ProjectCard proyecto={proyecto} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;