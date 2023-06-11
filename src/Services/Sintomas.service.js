import axios from 'axios';

const getSintomas = async () => {
  try {
    const response = await axios.get("https://api-microorganismo-service-api-fermindra.cloud.okteto.net/api/sintoma/");
    return response.data;
  } catch (error) {
    console.error('Error al obtener los Sintomas', error);
    return [];
  }
};

export default getSintomas;