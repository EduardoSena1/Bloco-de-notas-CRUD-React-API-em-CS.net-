import axios from 'axios';
// configura a rota da api
const api = axios.create({
  baseURL: 'https://localhost:7060/api/Notas'
});
//aqui são as configurações para as rotas com as requisições
export const buscarNotas = async () => {
  const response = await api.get('/');
  return response.data;
};

export const addNota = async (note) => {
  const response = await api.post('/', note);
  return response.data;
};

export const atualizarNota = async (id, note) => {
  const response = await api.put(`/${id}`, note);
  return response.data;
};

export const deletaNota = async (id) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};

export const favoritarNota = async (id) => {
  const response = await api.patch(`/${id}/favoritar`);
  return response.data;
};
