import axios from 'axios'

const api = axios.create({
    baseURL: 'https://jaimeautoshop3.herokuapp.com/'
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

export const updateCustomer = async (id, customer) => {
    const resp = await api.put(`/api/customer/${id}`, customer)
    return resp.data
}