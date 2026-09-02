require("dotenv").config();
const axios = require("axios");

async function enviarCorreo(destinatario, asunto, cuerpo) {
  const response = await axios.post(
    process.env.GOOGLE_SCRIPT_URL,
    {
      destinatario,
      asunto,
      cuerpo
    }
  );

  return response.data;
}

enviarCorreo(
  "correo@ejemplo.com",
  "Prueba",
  "Hola, este es un correo de prueba"
);
