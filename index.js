require('dotenv').config();
const axios = require('axios');

async function enviarCorreo(destinatario, asunto, cuerpo) {
  const response = await axios.post(
    process.env.GOOGLE_SCRIPT_URL,
    {
      destinatario,
      asunto,
      cuerpo
    }
  );

  console.log(response.data);
}
