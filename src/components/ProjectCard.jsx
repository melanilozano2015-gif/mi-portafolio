import React from 'react';

const ProjectCard = ({ proyecto }) => {
  const { nombre, descripcion, tecnologias, imagen, enlace } = proyecto;

  return (
    <div className="card h-100">
      {imagen && <img src={imagen} className="card-img-top" alt={nombre} />}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>

        {tecnologias?.length > 0 && (
          <div className="mt-3">
            <div className="small text-muted mb-2">Tecnologías:</div>
            <div className="d-flex flex-wrap gap-1">
              {tecnologias.map((tech) => (
                <span key={tech} className="badge bg-secondary">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {enlace && (
        <div className="card-footer bg-transparent border-top-0">
          <a href={enlace} target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm w-100">
            Ver proyecto
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;