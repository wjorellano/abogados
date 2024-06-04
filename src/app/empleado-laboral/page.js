"use client"; // Agrega esta línea para indicar que este es un componente del lado del cliente
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";

const EmpleadoLaboral = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    empresa: "",
    trabajando: "",
    ciudad: "",
    cargo: "",
    salario: "",
    contrato: "",
    ingreso: "",
    retiro: "",
    trabajadores: "",
    primas: "",
    deuda: "",
    pruebas: "",
    contratista: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

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
    tempErrors.trabajando = formData.trabajando
      ? ""
      : "Este campo es requerido.";
    tempErrors.ciudad = formData.ciudad ? "" : "Este campo es requerido.";
    tempErrors.cargo = formData.cargo ? "" : "Este campo es requerido.";
    tempErrors.salario = formData.salario ? "" : "Este campo es requerido.";
    tempErrors.contrato = formData.contrato ? "" : "Este campo es requerido.";
    tempErrors.ingreso = formData.ingreso ? "" : "Este campo es requerido.";
    tempErrors.trabajadores = formData.trabajadores
      ? ""
      : "Este campo es requerido.";
    tempErrors.primas = formData.primas ? "" : "Este campo es requerido.";
    tempErrors.deuda = formData.deuda ? "" : "Este campo es requerido.";
    tempErrors.pruebas = formData.pruebas ? "" : "Este campo es requerido.";
    tempErrors.contratista = formData.contratista
      ? ""
      : "Este campo es requerido.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const serviceID = "service_gz9iidr"; // Reemplaza con tu Service ID de EmailJS
      const templateID = "template_u8o3quj"; // Reemplaza con tu Template ID de EmailJS
      const userID = "l_R0nu_kAXuE0IYdS"; // Reemplaza con tu User ID de EmailJS

      // Agrega el campo tipoFormulario al objeto formData
      formData.tipoFormulario = "empleado";

      emailjs.send(serviceID, templateID, formData, userID).then(
        (result) => {
          console.log(result.text);
          setMessage("Correo enviado exitosamente!");
          setFormData({
            nombre: "",
            telefono: "",
            correo: "",
            empresa: "",
            siguesTrabajando: "",
            ciudadLaboraste: "",
            cargo: "",
            ultimoSalario: "",
            tipoContrato: "",
            cantidadTrabajadores: "",
            esContratista: "",
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
    <div className="container mt-5">
      <h1>SOY EMPLEADO</h1>
      <h2>TENGO UN CASO LABORAL</h2>
      <p>Si seleccionamos tu caso la consulta es gratis</p>
      <p>Tiempo de respuesta 1 – 3 días hábiles</p>

      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="mb-3">
          <label className="form-label">Tu nombre completo</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          {errors.nombre && <div className="text-danger">{errors.nombre}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Tu teléfono</label>
          <input
            type="text"
            className="form-control"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
          {errors.telefono && (
            <div className="text-danger">{errors.telefono}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Tu correo electrónico</label>
          <input
            type="email"
            className="form-control"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
          {errors.correo && <div className="text-danger">{errors.correo}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">
            Nombre de la empresa o negocio a quien quieres demandar tus derechos
          </label>
          <input
            type="text"
            className="form-control"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            required
          />
          {errors.empresa && (
            <div className="text-danger">{errors.empresa}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">
            ¿Sigues trabajando en la empresa?
          </label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="trabajando"
                value="Si"
                onChange={handleChange}
              />
              <label className="form-check-label">Si</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="trabajando"
                value="No"
                onChange={handleChange}
              />
              <label className="form-check-label">No</label>
            </div>
          </div>
          {errors.trabajando && (
            <div className="text-danger">{errors.trabajando}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">En qué ciudad laboraste</label>
          <input
            type="text"
            className="form-control"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            required
          />
          {errors.ciudad && <div className="text-danger">{errors.ciudad}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Último cargo en la empresa</label>
          <input
            type="text"
            className="form-control"
            name="cargo"
            value={formData.cargo}
            onChange={handleChange}
            required
          />
          {errors.cargo && <div className="text-danger">{errors.cargo}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Último salario</label>
          <select
            className="form-select"
            name="salario"
            value={formData.salario}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="Entre 1 y 2 millones">Entre 1 y 2 millones</option>
            <option value="Entre 2 y 4 millones">Entre 2 y 4 millones</option>
            <option value="Entre 4 y 10 millones">Entre 4 y 10 millones</option>
            <option value="Más de 10 millones">Más de 10 millones</option>
          </select>
          {errors.salario && (
            <div className="text-danger">{errors.salario}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Tipo de contrato con la empresa</label>
          <select
            className="form-select"
            name="contrato"
            value={formData.contrato}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="Contrato de trabajo indefinido">
              Contrato de trabajo indefinido
            </option>
            <option value="Contrato de trabajo a término fijo">
              Contrato de trabajo a término fijo
            </option>
            <option value="Contrato de trabajo por obra/labor">
              Contrato de trabajo por obra/labor
            </option>
            <option value="Contrato por prestación de servicios">
              Contrato por prestación de servicios
            </option>
            <option value="No tenía contrato firmado, fue verbal">
              No tenía contrato firmado, fue verbal
            </option>
          </select>
          {errors.contrato && (
            <div className="text-danger">{errors.contrato}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Fecha de ingreso a la empresa</label>
          <input
            type="date"
            className="form-control"
            name="ingreso"
            value={formData.ingreso}
            onChange={handleChange}
            required
          />
          {errors.ingreso && (
            <div className="text-danger">{errors.ingreso}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">
            Fecha de retiro de la empresa. Si sigues activo no diligenciar
          </label>
          <input
            type="date"
            className="form-control"
            name="retiro"
            value={formData.retiro}
            onChange={handleChange}
          />
          {errors.retiro && <div className="text-danger">{errors.retiro}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">
            ¿Cuántos trabajadores tiene la empresa?
          </label>
          <select
            className="form-select"
            name="trabajadores"
            value={formData.trabajadores}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="Menos de 10">Menos de 10</option>
            <option value="Entre 10 y 30">Entre 10 y 30</option>
            <option value="Entre 30 y 100">Entre 30 y 100</option>
            <option value="Más de 100">Más de 100</option>
          </select>
          {errors.trabajadores && (
            <div className="text-danger">{errors.trabajadores}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">
            ¿Te pagaban primas, cesantías, vacaciones?
          </label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="primas"
                value="Si"
                onChange={handleChange}
              />
              <label className="form-check-label">Si</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="primas"
                value="No"
                onChange={handleChange}
              />
              <label className="form-check-label">No</label>
            </div>
          </div>
          {errors.primas && <div className="text-danger">{errors.primas}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">¿Te quedaron debiendo?</label>
          <select
            className="form-select"
            name="deuda"
            value={formData.deuda}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="Primas">Primas</option>
            <option value="Cesantías">Cesantías</option>
            <option value="Vacaciones">Vacaciones</option>
            <option value="Liquidación">Liquidación</option>
            <option value="Horas extras">Horas extras</option>
            <option value="Varias o todas las anteriores">
              Varias o todas las anteriores
            </option>
          </select>
          {errors.deuda && <div className="text-danger">{errors.deuda}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">
            ¿Tienes alguno de los siguientes documentos como pruebas?
          </label>
          <select
            className="form-select"
            name="pruebas"
            value={formData.pruebas}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="Contrato de trabajo">Contrato de trabajo</option>
            <option value="Certificado laboral">Certificado laboral</option>
            <option value="Testigos">Testigos</option>
            <option value="Volantes de pago">Volantes de pago</option>
            <option value="No tengo pruebas">No tengo pruebas</option>
          </select>
          {errors.pruebas && (
            <div className="text-danger">{errors.pruebas}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">
            ¿La empresa es contratista de una empresa más grande?
          </label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="contratista"
                value="Si"
                onChange={handleChange}
              />
              <label className="form-check-label">Si</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="contratista"
                value="No"
                onChange={handleChange}
              />
              <label className="form-check-label">No</label>
            </div>
          </div>
          {errors.contratista && (
            <div className="text-danger">{errors.contratista}</div>
          )}
        </div>
        {message && <div className="mt-3 alert alert-info">{message}</div>}

        <button type="submit" className="btn btn-primary mb-5 w-100">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default EmpleadoLaboral;
