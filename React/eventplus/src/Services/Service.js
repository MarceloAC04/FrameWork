import axios from "axios";

export const eventResource = '/Evento';

export const nextEventResource = '/Evento/ListarProximos'

export const eventsTypeResource = '/TiposEventos'

const apiPort = '7118'
const localApiUrl = `https://localhost:${apiPort}/api`
const externaApiUrl = null;

const api = axios.create({
    baseURL: localApiUrl
})

export default api;