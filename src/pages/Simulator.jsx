import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const Simulator = () => {
  return (
    <>
      {/* Banner principal */}
      <section className="hero">
        <h2>Simulador de Crédito</h2>
        <p>
          Explora y filtra las opciones de crédito que mejor se ajusten a tus necesidades.
        </p>
      </section>

      {/* Contenido principal */}
      <main className="container credits-section">
        <h3>Busca tu crédito ideal</h3>

        {/* Filtros de búsqueda */}
        <div className="credit-card">
          <div className="details">

            <div className="detail-item">
              <label>Buscar por nombre:</label>
              <input
                type="text"
                className="input_field"
                placeholder="Escribe el nombre del producto"
              />
            </div>

            <div className="detail-item">
              <label>Filtrar por rango de monto:</label>
              <select className="input_field">
                <option>Cualquier monto</option>
                <option>$1.000.000 - $10.000.000</option>
                <option>$10.000.001 - $30.000.000</option>
                <option>Más de $30.000.000</option>
              </select>
            </div>

            <button className="btn-primary">Buscar</button>
          </div>
        </div>

        {/* Resultados simulados */}
        <div className="credits-grid">

          <div className="credit-card">
            <div className="card-header">
              <span className="icon">💼</span>
              <h4>Crédito Libre Inversión</h4>
            </div>

            <p>
              Flexibilidad para uso personal o inversión. Plazos competitivos y desembolso rápido.
            </p>

            <div className="detail-item">
              <span className="label">Tasa anual:</span>
              <span className="value">15.5%</span>
            </div>

            <div className="detail-item">
              <span className="label">Monto:</span>
              <span className="value">$1.000.000 - $20.000.000</span>
            </div>

            <div className="detail-item">
              <span className="label">Plazo máximo:</span>
              <span className="value">60 meses</span>
            </div>

            <Link to="/solicitar">
              <button className="btn-primary">Solicitar</button>
            </Link>
          </div>

          <div className="credit-card">
            <div className="card-header">
              <span className="icon">🚗</span>
              <h4>Crédito Vehículo</h4>
            </div>

            <p>Financiación para compra de vehículos nuevos y usados.</p>

            <div className="detail-item">
              <span className="label">Tasa anual:</span>
              <span className="value">12.9%</span>
            </div>

            <div className="detail-item">
              <span className="label">Monto:</span>
              <span className="value">$3.000.000 - $40.000.000</span>
            </div>

            <div className="detail-item">
              <span className="label">Plazo máximo:</span>
              <span className="value">72 meses</span>
            </div>

            <Link to="/solicitar">
              <button className="btn-primary">Solicitar</button>
            </Link>
          </div>

        </div>
      </main>
    </>
  );
};
