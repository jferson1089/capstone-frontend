import React, { useState } from 'react'
import Section from './section'
import Footer from './footer'


function Main() {



    return (
        <main>
            <br />

            <Section />







            {/* <Button id="Popover1" type="button">
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
            </Button> */}
            <Footer />

        </main>

    )
}

export default Main