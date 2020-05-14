import React, { useEffect, useState } from 'react'
import { getAllCustomers, deleteCustomer } from '../services/api-helper'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { FaTrash, FaCar, FaPen, FaPrint } from 'react-icons/fa'
import jsPDF from 'jspdf';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import Update from './updateCustomer'

function Section() {

    const [customers, setCustomers] = useState([])
    const [useId, setId] = useState('')


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

    const handleId = (id) => {
        console.log('update ', id)
        setId(id)
    }


    const handlePDF = (customer) => {
        const info = customer
        console.log("Handle pdf was clicked", info)
        var doc = new jsPDF()
        doc.text('Auto Repair Shop', 10, 10)
        doc.text('Repair Shop # 999-999-9999', 10, 15)
        doc.text(`${info.first_name} ${info.last_name}`, 20, 20)
        doc.text(`Phone Number :${info.phone_number}`, 80, 20)
        doc.text(`Appointment : ${info.date_requested}`, 80, 30)
        doc.text(`Vin Number : ${info.vin_number}`, 20, 40)
        doc.text(`Description :${info.reason}`, 5, 60)
        doc.text('Signature :____________________', 100, 250)
        doc.save('repairorder.pdf')
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
                            <Button id="Popover3" type="button">
                                <FaPen size={20} onClick={() => handleId(customer.id)} />
                                <i className="fas fa-play">
                                    <UncontrolledPopover
                                        trigger="legacy"
                                        placement="top"
                                        // isOpen={popoverOpen}
                                        target="Popover3"
                                    // toggle={toggle}
                                    >
                                        <PopoverBody>
                                            <Update useId={useId} />
                                        </PopoverBody>
                                    </UncontrolledPopover>
                                </i>
                            </Button>
                            <FaPrint size={20} onClick={() => handlePDF(customer)} />
                            <FaTrash size={20} onClick={() => handleDelete(customer.id)} />
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