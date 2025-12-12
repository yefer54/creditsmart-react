import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export const Apply = () => {
  return (
    <>
      {/* Banner principal */}
      <section className="hero">
        <h2>Solicitud de Crédito</h2>
        <p>
          Completa el siguiente formulario para iniciar tu solicitud de crédito fácilmente.
        </p>
      </section>

      {/* Contenido principal */}
      <main className="container credits-section">
        <h3>Formulario de Solicitud</h3>

        <div className="credit-card">
          <form>
            {/* Datos personales */}
            <div className="details">
              <h4 style={{ color: "#1e3a8a", marginBottom: "1rem" }}>
                Datos personales
              </h4>

              <div className="detail-item">
                <label className="label">Nombre completo:</label>
                <input
                  type="text"
                  className="input_field"
                  placeholder="Escribe tu nombre completo"
                  required
                />
              </div>

              <div className="detail-item">
                <label className="label">Cédula:</label>
                <input
                  type="number"
                  className="input_field"
                  placeholder="Tu número de identificación"
                  required
                />
              </div>

              <div className="detail-item">
                <label className="label">Correo electrónico:</label>
                <input
                  type="email"
                  className="input_field"
                  placeholder="ejemplo@correo.com"
                  required
                />
              </div>

              <div className="detail-item">
                <label className="label">Teléfono:</label>
                <input
                  type="tel"
                  className="input_field"
                  placeholder="Número de contacto"
                  required
                />
              </div>
            </div>

            {/* Datos del crédito */}
            <div className="details">
              <h4 style={{ color: "#1e3a8a", marginBottom: "1rem" }}>
                Detalles del crédito
              </h4>

              <div className="detail-item">
                <label className="label">Tipo de crédito:</label>
                <select className="input_field" required>
                  <option value="">Selecciona una opción</option>
                  <option value="libre_inversion">Libre inversión</option>
                  <option value="vehiculo">Vehículo</option>
                  <option value="vivienda">Vivienda</option>
                  <option value="educacion">Educación</option>
                </select>
              </div>

              <div className="detail-item">
                <label className="label">Monto solicitado:</label>
                <input
                  type="number"
                  className="input_field"
                  placeholder="Ejemplo: 5000000"
                  required
                />
              </div>

              <div className="detail-item">
                <label className="label">Plazo (meses):</label>
                <input
                  type="number"
                  className="input_field"
                  placeholder="Ejemplo: 24"
                  required
                />
              </div>
            </div>

            {/* Botón enviar */}
            <button type="submit" className="btn-primary">
              Enviar solicitud
            </button>
          </form>
        </div>
      </main>
    </>
  );
};
