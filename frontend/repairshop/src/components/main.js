import React, { useState } from 'react'
import Section from './section'
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import Customer from './customer'

function Main() {

    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <main>
            <br />

            <Section />







            <Button id="Popover1" type="button">
                New Appointment
                <i className="fas fa-play">
                    <UncontrolledPopover
                        trigger="legacy"
                        placement="top"
                        isOpen={popoverOpen}
                        target="Popover1"
                        toggle={toggle}
                    >
                        <PopoverBody>
                            <Customer />
                        </PopoverBody>
                    </UncontrolledPopover>
                </i>
            </Button>

        </main>
    )
}

export default Main