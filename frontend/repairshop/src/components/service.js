import React, { useState, useEffect } from 'react'
import { getAllServices } from '../services/api-helper'
import { FaWrench } from 'react-icons/fa'

function Service() {

    const [services, setServices] = useState([])


    useEffect(() => {
        const makeAPICall = async () => {
            const resp = await getAllServices()
            console.log('services', resp)
            setServices(resp)
        }
        makeAPICall()
    }, [])

    const renderServices = services.map((service, index) => {
        console.log('servicesmap', service)
        return (
            <div key={index} className="serviceItem">
                <FaWrench size={32} />
                <h5>{service.name} : {service.price} </h5>
            </div>
        )




    })








    return (
        <section>
            {renderServices}
        </section>
    )
}
export default Service