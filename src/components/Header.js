import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Image, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import Logo from '../images/logo.svg';
import './header.css';

export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [active, setActive] = useState('/');
    const handleActive = (e) => setActive(e);

    return (
        <header className='py-1 fixed-top bg-white'>
            <Navbar className='bg-white' expand='lg'>
                <Container>
                    <Navbar.Brand href='/' className='p-0 d-flex'>
                        <Image
                            src={Logo}
                            className='header-logo'
                            alt='RedSense Logo'
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle
                        aria-controls='responsive-navbar-nav'
                        onClick={handleShow}
                    />
                    <Navbar.Offcanvas
                        show={show}
                        onHide={handleClose}
                        placement='end'
                        className='flex-lg-grow-0'>
                        <Offcanvas.Header className='py-4' closeButton />

                        <Offcanvas.Body>
                            <Nav
                                id='header-nav'
                                variant='pills'
                                activeKey={active}
                                defaultActiveKey={active}
                                onSelect={(e) => {
                                    handleActive(e);
                                }}
                                className=' text-uppercase justify-content-between align-items-center'>
                                <Nav.Item>
                                    <NavLink
                                        onClick={handleClose}
                                        to='/'
                                        className='py-1 px-3'>
                                        Home
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink
                                        onClick={handleClose}
                                        to='/about'
                                        className='py-1 px-3'>
                                        About
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink
                                        onClick={handleClose}
                                        to='/projects'
                                        className='py-1 px-3'>
                                        Projects
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink
                                        onClick={handleClose}
                                        to='/contact'
                                        className='py-1 px-3'>
                                        Contact
                                    </NavLink>
                                </Nav.Item>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    );
}
