import React, { useEffect, useState } from 'react'
import { getAllCustomers } from '../services/api-helper'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

function Section() {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        const makeAPICall = async () => {
            const resp = await getAllCustomers()
            console.log(resp)
            setCustomers(resp)
        }
        makeAPICall()
    }, [])

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