import axios from 'axios'

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
})

export const getAllCustomers = async () => {
    const resp = await api.get('/api/customer/')
    return resp.data
}

export const createCustomer = async (customer) => {
    const resp = await api.post('/api/customer/', customer)
    return resp.data
}

export const deleteCustomer = async (id) => {
    const resp = await api.delete(`/api/customer/${id}`)
    return resp.data
}