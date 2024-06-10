"use client"; // Directiva para usar en el cliente (React)

// Importación de librerías necesarias
import React from "react";
import emailjs from "emailjs-com"; // Biblioteca para enviar correos con EmailJS
import "bootstrap/dist/css/bootstrap.min.css"; // Biblioteca CSS para estilos de Bootstrap
import "../globals.css"; // Importa el archivo CSS

// Definición del componente funcional FormularioTrabajador
const FormularioTrabajador = () => {

  // Definición del estado inicial del formulario
  const [formData, setFormData] = React.useState({
    nombre: "", // Campo para el nombre del usuario
    telefono: "", // Campo para el teléfono del usuario
    correo: "" // Campo para el correo del usuario
  });

  // Definición del estado para los errores del formulario
  const [errors, setErrors] = React.useState({});
  
  // Definición del estado para los mensajes de éxito o error al enviar el formulario
  const [message, setMessage] = React.useState("");

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función para validar los campos del formulario
  const validate = () => {
    let tempErrors = {};
    tempErrors.nombre = formData.nombre ? "" : "Este campo es requerido."; // Validación del nombre
    tempErrors.telefono =
      formData.telefono.length === 10 ? "" : "El número de teléfono debe tener 10 dígitos."; // Validación del teléfono
    tempErrors.correo = /\S+@\S+\.\S+/.test(formData.correo) ? "" : "Correo electrónico no válido."; // Validación del correo
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === ""); // Verifica si todos los campos son válidos
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    if (validate()) { // Si la validación es exitosa
      const serviceID = "service_xmxobd8"; // Reemplaza con tu Service ID de EmailJS
      const templateID = "template_8gjeyfp"; // Reemplaza con tu Template ID de EmailJS
      const userID = "vq45iLGeVb9jmy3qM"; // Reemplaza con tu User ID de EmailJS

      // Agrega el campo empleadoPrioridad al objeto formData
      const data = { ...formData, empleadoPrioridad: true };

      // Envío del correo con EmailJS
      emailjs.send(serviceID, templateID, data, userID).then(
        (result) => {
          console.log(result.text);
          setMessage("Correo enviado exitosamente!"); // Mensaje de éxito
          // Reinicia los campos del formulario
          setFormData({
            nombre: "",
            telefono: "",
            correo: ""
          });
        },
        (error) => {
          console.log(error.text);
          setMessage("Hubo un error al enviar el correo. Intenta de nuevo."); // Mensaje de error
        }
      );
    } else {
      setMessage("Por favor completa todos los campos requeridos."); // Mensaje de validación fallida
    }
  };

  return (
    <div id="card-container" class="mt-5"> {/* Contenedor de la tarjeta */}
      <div id="card-background"></div> {/* Fondo de la tarjeta */}
      <h2>Formulario Persona</h2> {/* Título del formulario */}
      <form onSubmit={handleSubmit}> {/* Manejador de envío del formulario */}
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          {errors.nombre && <div className="text-danger">{errors.nombre}</div>} {/* Muestra el error si existe */}
        </div>
        <div className="mb-3">
          <label className="form-label">Celular</label>
          <input
            type="tel"
            className="form-control"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
          {errors.telefono && <div className="text-danger">{errors.telefono}</div>} {/* Muestra el error si existe */}
        </div>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
          {errors.correo && <div className="text-danger">{errors.correo}</div>} {/* Muestra el error si existe */}
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button> {/* Botón de envío */}
      </form>
      {message && <div className="mt-3 alert alert-info">{message}</div>} {/* Muestra el mensaje de éxito o error */}
    </div>
  );
};

export default FormularioTrabajador; // Exporta el componente para su uso en otros lugares
