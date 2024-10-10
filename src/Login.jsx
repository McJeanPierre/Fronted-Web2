import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import './Login.css';

export default function Login() {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    const nuevosErrores = {};

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

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      console.log('Formulario enviado', { correo, contrasena });
      // Aquí iría la lógica para enviar los datos al servidor
    }
  };

  return (
    <div className="contenedor-login">
      <form className="formulario-login" onSubmit={manejarEnvio}>
        <h2 className="titulo-login">Iniciar Sesión</h2>
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
        <button type="submit" className="boton-enviar">Iniciar Sesión</button>
      </form>
    </div>
  );
}