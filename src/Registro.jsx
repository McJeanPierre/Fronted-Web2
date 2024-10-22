import React, { useState } from 'react';
import { User, Mail, Lock } from 'lucide-react';
import './Registro.css';

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!nombre) {
      nuevosErrores.nombre = 'El nombre es requerido';
    }

    if (!correo) {
      nuevosErrores.correo = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
      nuevosErrores.correo = 'El correo no es válido';
    }

    if (!contrasena) {
      nuevosErrores.contrasena = 'La contraseña es requerida';
    } else if (contrasena.length < 6) {
      nuevosErrores.contrasena = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (contrasena !== confirmarContrasena) {
      nuevosErrores.confirmarContrasena = 'Las contraseñas no coinciden';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      const datos = {
        nombre,
        correo,
        contrasena,
      };

      // Guardar los datos en localStorage
      localStorage.setItem('usuarioRegistrado', JSON.stringify(datos));
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
    }
  };

  return (
    <div className="contenedor-registro">
      <form className="formulario-registro" onSubmit={manejarEnvio}>
        <h2 className="titulo-registro">Crear Cuenta</h2>
        <div className="campo-formulario">
          <label htmlFor="nombre" className="etiqueta-campo">
            <User size={20} />
            Nombre Completo
          </label>
          <input
            type="text"
            id="nombre"
            className="entrada-campo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {errores.nombre && <span className="mensaje-error">{errores.nombre}</span>}
        </div>
        <div className="campo-formulario">
          <label htmlFor="correo" className="etiqueta-campo">
            <Mail size={20} />
            Correo Electrónico
          </label>
          <input
            type="email"
            id="correo"
            className="entrada-campo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          {errores.correo && <span className="mensaje-error">{errores.correo}</span>}
        </div>
        <div className="campo-formulario">
          <label htmlFor="contrasena" className="etiqueta-campo">
            <Lock size={20} />
            Contraseña
          </label>
          <input
            type="password"
            id="contrasena"
            className="entrada-campo"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          {errores.contrasena && <span className="mensaje-error">{errores.contrasena}</span>}
        </div>
        <div className="campo-formulario">
          <label htmlFor="confirmarContrasena" className="etiqueta-campo">
            <Lock size={20} />
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmarContrasena"
            className="entrada-campo"
            value={confirmarContrasena}
            onChange={(e) => setConfirmarContrasena(e.target.value)}
          />
          {errores.confirmarContrasena && <span className="mensaje-error">{errores.confirmarContrasena}</span>}
        </div>
        <button type="submit" className="boton-enviar">Registrarse</button>
      </form>
    </div>
  );
}
