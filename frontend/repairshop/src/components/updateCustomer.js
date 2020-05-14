import React, { useState } from 'react'
import { updateCustomer } from '../services/api-helper'
import { Button, Form, FormGroup, Label, Input, Col, FormText } from 'reactstrap';

function Update(props) {

    const [firstname, setFirstName] = useState()
    const [lastname, setLastName] = useState()
    const [phonenumber, setPhoneNumber] = useState()
    const [vin, setVin] = useState()
    const [description, setDescription] = useState()



    const handleFirstName = e => {
        setFirstName(e.target.value)
        console.log('update props', props.useId)
        console.log('handle firstname', e)
    }

    const handleLastName = e => {
        console.log('handle lastname', e)
        setLastName(e.target.value)
    }

    const handlePhone = e => {
        console.log('handle phone', e)
        setPhoneNumber(e.target.value)
    }

    const handleVin = e => {
        console.log('handle vin', e)
        setVin(e.target.value)

    }

    const handleDescription = e => {
        console.log('handle description', e)

        setDescription(e.target.value)
    }

    const newUpdate = {
        first_name: firstname,
        last_name: lastname,
        phone_number: phonenumber,
        vin_number: vin,
        reason: description,
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        const id = props.useId
        console.log('update id', id)
        console.log('returned json from click', newUpdate)
        // e.target.reset()
        const json = await updateCustomer(id, newUpdate)
        console.log('resposne', json)

    }

    return (
        <>
            <aside>

                <Col>
                    <Form onSubmit={handleUpdate}>
                        <FormGroup>
                            <Label for="exampleEmail">Edit Appointment</Label>
                            <br />
                            <Input type="text"
                                name="first_name"
                                id="exampleFirstName"
                                placeholder="First Name"
                                onChange={handleFirstName}
                                value={firstname}
                            />
                            <Input type="text"
                                name="last_name"
                                id="exampleLastName"
                                placeholder="Last Name"
                                onChange={handleLastName}
                                value={lastname}

                            />
                            <Input type="text"
                                name="phone_number"
                                id="examplePhone"
                                placeholder="Phone Number"
                                onChange={handlePhone}
                                value={phonenumber}
                            />
                            <Input type="text"
                                name="vin_number"
                                id="exampleVin"
                                placeholder="Vin Number"
                                onChange={handleVin}
                                value={vin}

                            />
                            <Input type="textarea"
                                name="description"
                                id="exampleDescription"
                                placeholder="Enter your vehicle issues here..."
                                onChange={handleDescription}
                                value={description}
                            />

                        </FormGroup>
                        <Button color="warning">Create New Appointment</Button>{' '}
                    </Form>
                </Col>

            </aside>
        </>
    )
}
export default Update