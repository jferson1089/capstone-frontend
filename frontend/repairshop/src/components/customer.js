import React, { useState } from 'react'
import { createCustomer } from '../services/api-helper'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

function Customer() {

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [phonenumber, setPhoneNumber] = useState("")
    const [vin, setVin] = useState("")

    const handleFirstName = e => {
        setFirstName(e.target.value)
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


    // const handleChirp = e => {
    //     setChirp(e.target.value)
    //     console.log('handle chirp', e)
    // }

    const handleCreate = (e) => {
        e.preventDefault()
        console.log('returned json from click', firstname + lastname)
        e.target.reset()
        const json = createCustomer([{
            first_name: firstname,
            last_name: lastname,
            phone_number: phonenumber,
            vin_number: vin

        }])

    }


    return (
        <aside>
            <br />
            <br />
            <Col>
                <Form onSubmit={handleCreate}>
                    <FormGroup>
                        <Label for="exampleEmail">Create New Appointment</Label>
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
                    </FormGroup>
                    <Button color="warning">Create New Appointment</Button>{' '}
                </Form>
            </Col>

        </aside>
    )
}

export default Customer