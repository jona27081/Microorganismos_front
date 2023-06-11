import axios from 'axios';
export const postMic = async (data) => {
  try {
    const response = await axios.post("https://api-microorganismo-service-api-fermindra.cloud.okteto.net/api/microorganismo", data);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error al guardar personal: ', error);
    throw error;
  }
};

const getMicroorganismos = async () => {
  try {
    const response = await axios.get("https://api-microorganismo-service-api-fermindra.cloud.okteto.net/api/microorganismo/");
    return response.data;
  } catch (error) {
    console.error('Error al obtener los Sintomas', error);
    return [];
  }
};

export default getMicroorganismos;