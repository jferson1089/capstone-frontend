import React, { useState } from 'react'
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import Customer from './customer'
import Calender from './calendar'
import { FaCalendarPlus, FaCalendar, FaCarCrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Footer() {

    // const [popoverOpen, setPopoverOpen] = useState(false);

    // const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <div className="footer">

            <Button id="Popover1" type="button">
                <FaCalendarPlus size={32} />
                <i className="fas fa-play">
                    <UncontrolledPopover
                        trigger="legacy"
                        placement="top"
                        // isOpen={popoverOpen}
                        target="Popover1"
                    // toggle={toggle}
                    >
                        <PopoverBody>
                            <Customer />
                        </PopoverBody>
                    </UncontrolledPopover>
                </i>
            </Button>

            <Button id="Popover2" type="button">
                <FaCalendar size={32} />
                <i className="fas fa-play">
                    <UncontrolledPopover
                        trigger="legacy"
                        placement="top"
                        // isOpen={popoverOpen}
                        target="Popover2"
                    // toggle={toggle}
                    >
                        <PopoverBody>
                            <Calender />
                        </PopoverBody>
                    </UncontrolledPopover>
                </i>
            </Button>



            <Link to='/service'>
                <FaCarCrash size={32} />
            </Link>
        </div>
    )
}

export default Footer