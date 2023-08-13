import axios from 'axios'

const REACT_APP_DATABASE_URL = 'http://localhost:5000'

function login(body) {
    const promise = axios.post(`${REACT_APP_DATABASE_URL}/login`, body)
    return promise
}

function cadastro(body) {
    const promise = axios.post(`${REACT_APP_DATABASE_URL}/cadastro`, body)
    return promise
}

const apiAuth ={ login, cadastro }
export default apiAuth