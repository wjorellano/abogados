"use client";

import React from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";

const Empresario = () => {
  const [formData, setFormData] = React.useState({
    nombre: "",
    telefono: "",
    correo: "",
    empresa: "",
    cargo: "",
    ciudad: "",
    trabajadores: "",
    servicios: "",
  });

  const [errors, setErrors] = React.useState({});
  const [message, setMessage] = React.useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.nombre = formData.nombre ? "" : "Este campo es requerido.";
    tempErrors.telefono =
      formData.telefono.length === 10
        ? ""
        : "El teléfono debe tener 10 números.";
    tempErrors.correo = /\S+@\S+\.\S+/.test(formData.correo)
      ? ""
      : "Correo inválido.";
    tempErrors.empresa = formData.empresa ? "" : "Este campo es requerido.";
    tempErrors.cargo = formData.cargo ? "" : "Este campo es requerido.";
    tempErrors.ciudad = formData.ciudad ? "" : "Este campo es requerido.";
    tempErrors.trabajadores = formData.trabajadores
      ? ""
      : "Este campo es requerido.";
    tempErrors.servicios = formData.servicios ? "" : "Este campo es requerido.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const serviceID = "service_gz9iidr"; // Reemplaza con tu Service ID de EmailJS
      const templateID = "template_z0u2kkd"; // Reemplaza con tu Template ID de EmailJS
      const userID = "l_R0nu_kAXuE0IYdS"; // Reemplaza con tu User ID de EmailJS

      // Agrega el campo tipoFormulario al objeto formData
      formData.tipoFormulario = "empresario";

      emailjs.send(serviceID, templateID, formData, userID).then(
        (result) => {
          console.log(result.text);
          setMessage("Correo enviado exitosamente!");
          setFormData({
            nombre: "",
            telefono: "",
            correo: "",
            empresa: "",
            cargo: "",
            ciudad: "",
            trabajadores: "",
            servicios: "",
          });
        },
        (error) => {
          console.log(error.text);
          setMessage("Hubo un error al enviar el correo. Intenta de nuevo.");
        }
      );
    } else {
      setMessage("Por favor completa todos los campos requeridos.");
    }
  };

  return (
    <div className="container m-auto">
      <h1 className="mt-5">SOY EMPRESARIO</h1>
      <h2>TENGO UN CASO LABORAL</h2>
      <p>Si seleccionamos tu caso la consulta es gratis</p>
      <p>Tiempo de respuesta 1 – 3 días hábiles</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="form-label">Tu nombre completo</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          {errors.nombre && <p className="text-danger">{errors.nombre}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Tu teléfono</label>
          <input
            type="text"
            className="form-control"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
          {errors.telefono && <p className="text-danger">{errors.telefono}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Tu correo electrónico</label>
          <input
            type="email"
            className="form-control"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
          {errors.correo && <p className="text-danger">{errors.correo}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Nombre de la empresa o negocio</label>
          <input
            type="text"
            className="form-control"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
          />
          {errors.empresa && <p className="text-danger">{errors.empresa}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Qué cargo tienes</label>
          <input
            type="text"
            className="form-control"
            name="cargo"
            value={formData.cargo}
            onChange={handleChange}
          />
          {errors.cargo && <p className="text-danger">{errors.cargo}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">
            Ciudad de la sede principal de la empresa
          </label>
          <input
            type="text"
            className="form-control"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
          />
          {errors.ciudad && <p className="text-danger">{errors.ciudad}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">
            Cuantos trabajadores tiene la empresa
          </label>
          <select
            className="form-select"
            name="trabajadores"
            value={formData.trabajadores}
            onChange={handleChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="menos de 10">Menos de 10</option>
            <option value="entre 10 y 30">Entre 10 y 30</option>
            <option value="entre 30 y 100">Entre 30 y 100</option>
            <option value="más de 100">Más de 100</option>
          </select>
          {errors.trabajadores && (
            <p className="text-danger">{errors.trabajadores}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Qué tipo de servicios necesitas</label>
          <select
            className="form-select"
            name="servicios"
            value={formData.servicios}
            onChange={handleChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="demanda laboral">
              Contestar una demanda laboral
            </option>
            <option value="derecho de petición">
              Te presentaron un derecho de petición y/o tutela
            </option>
            <option value="contratos de trabajo">
              Asesoría en contratos de trabajo
            </option>
            <option value="asesoría laboral general">
              Asesoría laboral general
            </option>
            <option value="min trabajo">Proceso ante Min Trabajo</option>
            <option value="SST">Sistema de Gestión de SST</option>
            <option value="otra">Otra</option>
          </select>
          {errors.servicios && (
            <p className="text-danger">{errors.servicios}</p>
          )}
        </div>

        {message && <p className="mt-3 alert alert-info">{message}</p>}
        <button type="submit" className="btn btn-primary w-100 mb-5">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Empresario;
