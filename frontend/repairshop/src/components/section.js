import React, { useEffect, useState } from 'react'
import { getAllCustomers, deleteCustomer } from '../services/api-helper'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { FaTrash, FaCar, FaPen, FaPrint } from 'react-icons/fa'
import { Route, Link } from "react-router-dom";
import Print from './print'


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

    const handleNewPage = () => {
        console.log('this was clicked for new page!')
        return (
            <>
                <Link to="/print" target="_blank" component={Print}>
                </Link>
            </>
        )
    }

    const renderCustomers = customers.map((customer, index) => {
        return (

            <div key={index}>
                <Toast>
                    <ToastBody>

                        <FaCar size={32} />
                        <h6>{customer.first_name} {customer.last_name}</h6>

                        <h6>Scheduled for : {customer.date_requested}</h6>
                        <p>Phone :{customer.phone_number}</p>
                        <p>Vin: {customer.vin_number}</p>
                        <p>{customer.reason}</p>
                        <div className="split">
                            <FaPen />

                            <FaPrint onClick={handleNewPage} />


                            <FaTrash onClick={() => handleDelete(customer.id)} />
                        </div>
                    </ToastBody>
                </Toast>
                <hr />

            </div >


        )
    })




    return (
        <section>
            {renderCustomers}

        </section>
    )
}

export default Section