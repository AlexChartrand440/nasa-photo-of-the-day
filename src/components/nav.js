import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand,
    Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

const Navigation = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Neytorokx</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/Neytoro">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>NASA Photo Of The Day</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );

};

export default Navigation;