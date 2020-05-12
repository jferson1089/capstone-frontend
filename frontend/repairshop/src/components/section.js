import React, { useEffect, useState } from 'react'
import { getAllCustomers, deleteCustomer } from '../services/api-helper'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

function Section() {

    const [customers, setCustomers] = useState([])
    const [deleted, setDeleted] = useState(false)


    useEffect(() => {
        const makeAPICall = async () => {
            const resp = await getAllCustomers()
            console.log(resp)
            setCustomers(resp)
        }
        makeAPICall()
    }, [])

    const handleDelete = async (id) => {
        console.log(' clicked delete', customers.id)
        const json = await deleteCustomer(id)
        if (json.status === 'success') {
            const custArr = customers.filter(customer => customer.id !== id)
            console.log(custArr)
            alert("Customer Appointment Removed")
        }


    }

    const renderCustomers = customers.map((customer, index) => {
        return (
            <div key={index}>
                <Toast>
                    <ToastHeader icon="primary">
                    </ToastHeader>
                    <ToastBody>
                        <h6>{customer.first_name} {customer.last_name}</h6>
                        <p>Phone :{customer.phone_number}</p>
                        <p>Vin: {customer.vin_number}</p>

                        <button onClick={() => handleDelete(customer.id)}> Remove Customer</button>
                    </ToastBody>
                </Toast>
            </div>


        )
    })




    return (
        <section>
            {renderCustomers}
        </section>
    )
}

export default Section