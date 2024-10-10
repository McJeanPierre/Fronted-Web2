import React from 'react';
import { Search, Calendar, Clock } from 'lucide-react';
import Navbar from './Navbar';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page">

      <main>
        <section className="hero">
          <h1 className="hero-title">Reserva tu mesa favorita en segundos</h1>
          <p className="hero-subtitle">Encuentra y reserva en los mejores restaurantes de tu ciudad</p>
          <div className="search-container">
            <input type="text" placeholder="Buscar restaurante o cocina" className="search-input" />
            <button className="button button-primary search-button">
              <Search size={20} />
              Buscar
            </button>
          </div>
        </section>

        <section className="how-it-works">
          <div className="container">
            <h2 className="section-title">¿Cómo funciona?</h2>
            <div className="steps-container">
              <div className="step">
                <div className="icon-container">
                  <Search size={48} color="#0056b3" />
                </div>
                <h3 className="step-title">Busca</h3>
                <p className="step-description">Encuentra el restaurante perfecto para cualquier ocasión</p>
              </div>
              <div className="step">
                <div className="icon-container">
                  <Calendar size={48} color="#0056b3" />
                </div>
                <h3 className="step-title">Elige</h3>
                <p className="step-description">Selecciona la fecha y hora que prefieras</p>
              </div>
              <div className="step">
                <div className="icon-container">
                  <Clock size={48} color="#0056b3" />
                </div>
                <h3 className="step-title">Reserva</h3>
                <p className="step-description">Confirma tu reserva en segundos</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-section">
            <h4 className="footer-title">ReservaFácil</h4>
            <p className="footer-description">Hacemos que reservar sea fácil y rápido.</p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Explora</h4>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Restaurantes</a></li>
              <li><a href="#" className="footer-link">Ciudades</a></li>
              <li><a href="#" className="footer-link">Tipos de cocina</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Compañía</h4>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Sobre nosotros</a></li>
              <li><a href="#" className="footer-link">Carreras</a></li>
              <li><a href="#" className="footer-link">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Términos de servicio</a></li>
              <li><a href="#" className="footer-link">Política de privacidad</a></li>
              <li><a href="#" className="footer-link">Cookies</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}