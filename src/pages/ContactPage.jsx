import React, { useReducer, useState } from 'react';

const initialState = {
  nombre: '',
  email: '',
  mensaje: '',
};

const initialErrores = {
  nombre: '',
  email: '',
  mensaje: '',
};

const contactFormReducer = (state, action) => {
  switch (action.type) {
    case 'ACTUALIZAR_CAMPO':
      return { ...state, [action.campo]: action.valor };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const ContactPage = () => {
  const [formulario, dispatch] = useReducer(contactFormReducer, initialState);
  const [errores, setErrores] = useState(initialErrores);
  const [enviado, setEnviado] = useState(false);

  const validar = (campo = null) => {
    const nuevosErrores = { ...errores };

    if (campo === null || campo === 'nombre') {
      nuevosErrores.nombre = formulario.nombre.trim()
        ? ''
        : 'El nombre es obligatorio';
    }

    if (campo === null || campo === 'email') {
      nuevosErrores.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.email)
        ? ''
        : 'Email inválido';
    }

    if (campo === null || campo === 'mensaje') {
      nuevosErrores.mensaje = formulario.mensaje.trim().length >= 10
        ? ''
        : 'Mínimo 10 caracteres';
    }

    setErrores(nuevosErrores);

    if (campo) {
      return nuevosErrores[campo] === '';
    }

    return Object.values(nuevosErrores).every((error) => error === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      setEnviado(true);
      dispatch({ type: 'RESET' });
      setErrores(initialErrores);
      setTimeout(() => setEnviado(false), 3000);
    }
  };

  const handleChange = (e) => {
    dispatch({
      type: 'ACTUALIZAR_CAMPO',
      campo: e.target.name,
      valor: e.target.value,
    });
  };

  const handleBlur = (e) => {
    validar(e.target.name);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2 className="mb-4">Contacto</h2>

        {enviado && (
          <div className="alert alert-success">¡Mensaje enviado!</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="nombre">Nombre</label>
            <input
              type="text"
              className={`form-control ${errores.nombre ? 'is-invalid' : formulario.nombre ? 'is-valid' : ''}`}
              id="nombre"
              name="nombre"
              value={formulario.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.nombre && (
              <div className="invalid-feedback">{errores.nombre}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              type="email"
              className={`form-control ${errores.email ? 'is-invalid' : formulario.email ? 'is-valid' : ''}`}
              id="email"
              name="email"
              value={formulario.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.email && (
              <div className="invalid-feedback">{errores.email}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="mensaje">Mensaje</label>
            <textarea
              className={`form-control ${errores.mensaje ? 'is-invalid' : formulario.mensaje ? 'is-valid' : ''}`}
              id="mensaje"
              name="mensaje"
              rows="4"
              value={formulario.mensaje}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.mensaje && (
              <div className="invalid-feedback">{errores.mensaje}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary me-2">
            Enviar
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              dispatch({ type: 'RESET' });
              setErrores(initialErrores);
            }}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;