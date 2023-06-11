import axios from 'axios';

const login = async (data) => {
  try {
    const response = await axios.post("https://api-microorganismo-service-api-fermindra.cloud.okteto.net/api/usuario", data);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error al iniciar sesion', error);
    throw error;
  }
};

export default login;