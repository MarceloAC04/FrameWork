import axios from "axios";

export const eventResource = '/Evento';

export const nextEventResource = '/Evento/ListarProximos'

export const eventsTypeResource = '/TiposEvento'

export const loginResource = '/Login'

export const myEventsResource = '/PresencaEvento/ListarMinhas'

export const presenceEventResource = '/PresencaEvento'

export const commentaryEventResource = '/ComentariosEvento'

export const commentaryEventUserIdResource = '/ComentariosEvento/BuscarPorIdUsuario'

const apiPort = '7118'
const localApiUrl = `https://localhost:${apiPort}/api`
const externaApiUrl = null;

const api = axios.create({
    baseURL: localApiUrl
})

export default api;