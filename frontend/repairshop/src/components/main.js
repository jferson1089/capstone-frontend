import React from 'react'
import Section from './section'
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import Customer from './customer'

function Main() {

    return (
        <main>
            <br />

            <Section />
            <aside>
                <Button id="PopoverLegacy" type="button">
                    Add a Customer
      </Button>


                <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy">
                    <PopoverHeader>Legacy Trigger</PopoverHeader>
                    <PopoverBody>
                        <Customer />

                    </PopoverBody>
                </UncontrolledPopover>
            </aside>
        </main>
    )
}

export default Main