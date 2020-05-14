import React, { useState } from 'react'
import Section from './section'
import Footer from './footer'
import { Route } from 'react-router-dom'
import Service from './service'


function Main() {



    return (
        <main>
            <br />

            <Route exact path="/" component={Section} />
            <Route exact path='/service' component={Service} />






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