import axios from 'axios'

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
})

export const getAllCustomers = async () => {
    const resp = await api.get('/api/customer/')
    return resp.data
}

export const createCustomer = async () => {
    const resp = await api.post('/api/customer/')
    return resp.data
}