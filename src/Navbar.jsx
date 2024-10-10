import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          <Utensils size={24} color="#0056b3" />
          <span className="logo-text">ReservaFácil</span>
        </div>
        <nav>
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Inicio</Link></li>
            <li><Link to="/como-funciona" className="nav-link">Cómo funciona</Link></li>
            <li><Link to="/restaurantes" className="nav-link">Restaurantes</Link></li>
            <li><Link to="/contacto" className="nav-link">Contacto</Link></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="/login" className="button button-outline">Iniciar sesión</Link>
          <Link to="/registro" className="button button-primary">Registrarse</Link>
        </div>
      </div>
    </header>
  );
}