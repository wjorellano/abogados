"use client";

import React from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";

const EmpleadoAccidente = () => {
  const [formData, setFormData] = React.useState({
    nombre: "",
    telefono: "",
    correo: "",
    familiar: "",
    empresa: "",
    tipoCaso: "",
    causoMuerte: "",
    sigueTrabajando: "",
    ciudad: "",
    cargo: "",
    salario: "",
    contrato: "",
    trabajadores: "",
    contratista: "",
    empresaContratista: "",
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
    tempErrors.familiar = formData.familiar ? "" : "Este campo es requerido.";
    tempErrors.empresa = formData.empresa ? "" : "Este campo es requerido.";
    tempErrors.tipoCaso = formData.tipoCaso ? "" : "Este campo es requerido.";
    tempErrors.causoMuerte = formData.causoMuerte
      ? ""
      : "Este campo es requerido.";
    tempErrors.sigueTrabajando = formData.sigueTrabajando
      ? ""
      : "Este campo es requerido.";
    tempErrors.ciudad = formData.ciudad ? "" : "Este campo es requerido.";
    tempErrors.cargo = formData.cargo ? "" : "Este campo es requerido.";
    tempErrors.salario = formData.salario ? "" : "Este campo es requerido.";
    tempErrors.contrato = formData.contrato ? "" : "Este campo es requerido.";
    tempErrors.trabajadores = formData.trabajadores
      ? ""
      : "Este campo es requerido.";
    tempErrors.contratista = formData.contratista
      ? ""
      : "Este campo es requerido.";
    if (formData.contratista === "Si") {
      tempErrors.empresaContratista = formData.empresaContratista
        ? ""
        : "Este campo es requerido.";
    }
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
      formData.tipoFormulario = "empleadoAccidente";

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
            empresaContratista: "",
            tipoAccidente: "",
            causaMuerte: "",
            documentosPruebas: "",
            pagosPendientes: "",
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
      <h2>ACCIDENTES DE TRABAJO – ENFERMEDADES LABORALES</h2>
      <p>Si tomamos tu caso la consulta es gratis</p>
      <p>Tiempo de respuesta 1 – 3 días hábiles</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tu nombre completo</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          {errors.nombre && <p className="text-danger">{errors.nombre}</p>}
        </div>

        <div className="form-group">
          <label>Tu teléfono</label>
          <input
            type="text"
            className="form-control"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
          {errors.telefono && <p className="text-danger">{errors.telefono}</p>}
        </div>

        <div className="form-group">
          <label>Tu correo electrónico</label>
          <input
            type="email"
            className="form-control"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
          {errors.correo && <p className="text-danger">{errors.correo}</p>}
        </div>

        <div className="form-group">
          <label>Eres un familiar de la persona lesionada</label>
          <select
            className="form-control"
            name="familiar"
            value={formData.familiar}
            onChange={handleChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="si">Si</option>
            <option value="no">No</option>
            <option value="empleado afectado">Soy el empleado afectado</option>
          </select>
          {errors.familiar && <p className="text-danger">{errors.familiar}</p>}
        </div>

        <div className="form-group">
          <label>
            Nombre de la empresa o negocio a quien quieres demandar tus derechos
          </label>
          <input
            type="text"
            className="form-control"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
          />
          {errors.empresa && <p className="text-danger">{errors.empresa}</p>}
        </div>

        <div className="form-group">
          <label>
            Tuviste un accidente de trabajo o una enfermedad laboral
          </label>
          <select
            className="form-control"
            name="tipoCaso"
            value={formData.tipoCaso}
            onChange={handleChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="accidente de trabajo">Accidente de trabajo</option>
            <option value="enfermedad laboral">Enfermedad laboral</option>
          </select>
          {errors.tipoCaso && <p className="text-danger">{errors.tipoCaso}</p>}
        </div>

        <div className="form-group">
          <label>El accidente/enfermedad causó la muerte del empleado</label>
          <select
            className="form-control"
            name="causoMuerte"
            value={formData.causoMuerte}
            onChange={handleChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          {errors.causoMuerte && (
            <p className="text-danger">{errors.causoMuerte}</p>
          )}
        </div>

        <div className="form-group">
          <label>Sigues trabajando en la empresa</label>
          <select
            className="form-control"
            name="sigueTrabajando"
            value={formData.sigueTrabajando}
            onChange={handleChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          {errors.sigueTrabajando && (
            <p className="text-danger">{errors.sigueTrabajando}</p>
          )}
        </div>

        <div className="form-group">
          <label>En qué ciudad laboraste</label>
          <input
            type="text"
            className="form-control"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
          />
          {errors.ciudad && <p className="text-danger">{errors.ciudad}</p>}
        </div>

        <div className="form-group">
          <label>Qué cargo tenías</label>
          <input
            type="text"
            className="form-control"
            name="cargo"
            value={formData.cargo}
            onChange={handleChange}
          />
          {errors.cargo && <p className="text-danger">{errors.cargo}</p>}
        </div>

        <div className="form-group">
          <label>Cual fue o es tu último salario</label>
          <select
            className="form-control"
            name="salario"
            value={formData.salario}
            onChange={handleChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="entre 1 y 2 millones">Entre 1 y 2 millones</option>
            <option value="entre 2 y 4 millones">Entre 2 y 4 millones</option>
            <option value="entre 4 y 10 millones">Entre 4 y 10 millones</option>
            <option value="mas de 10 millones">Más de 10 millones</option>
          </select>
          {errors.salario && <p className="text-danger">{errors.salario}</p>}
        </div>

        <div className="form-group">
          <label>Qué tipo de contrato tienes o tenías</label>
          <select
            className="form-control"
            name="contrato"
            value={formData.contrato}
            onChange={handleChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="contrato de trabajo indefinido">
              Contrato de trabajo indefinido
            </option>
            <option value="contrato de trabajo a termino fijo">
              Contrato de trabajo a término fijo
            </option>
            <option value="contrato de trabajo por obra/labor">
              Contrato de trabajo por obra/labor
            </option>
            <option value="contrato por prestacion de servicios">
              Contrato por prestación de servicios
            </option>
            <option value="no tenia contrato firmado, fue verbal">
              No tenía contrato firmado, fue verbal
            </option>
          </select>
          {errors.contrato && <p className="text-danger">{errors.contrato}</p>}
        </div>

        <div className="form-group">
          <label>Cuantos trabajadores tiene la empresa</label>
          <select
            className="form-control"
            name="trabajadores"
            value={formData.trabajadores}
            onChange={handleChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="menos de 10">Menos de 10</option>
            <option value="entre 10 y 30">Entre 10 y 30</option>
            <option value="entre 30 y 100">Entre 30 y 100</option>
            <option value="mas de 100">Más de 100</option>
          </select>
          {errors.trabajadores && (
            <p className="text-danger">{errors.trabajadores}</p>
          )}
        </div>

        <div className="form-group">
          <label>La empresa es contratista de una empresa más grande</label>
          <select
            className="form-control"
            name="contratista"
            value={formData.contratista}
            onChange={handleChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          {errors.contratista && (
            <p className="text-danger">{errors.contratista}</p>
          )}
        </div>

        {formData.contratista === "Si" && (
          <div className="mb-3">
            <label className="form-label">
              Nombre de la empresa contratista
            </label>
            <input
              type="text"
              className="form-control"
              name="empresaContratista"
              value={formData.empresaContratista}
              onChange={handleChange}
              required
            />
            {errors.empresaContratista && (
              <div className="text-danger">{errors.empresaContratista}</div>
            )}
          </div>
        )}

        <input type="hidden" name="tipoFormulario" value="empleadoAccidente" />
        {message && <p className="mt-3 alert alert-info">{message}</p>}
        <button type="submit" className="btn btn-primary mb-5 w-100">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default EmpleadoAccidente;
