import React, { useState } from 'react';
import { Container, Image, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import Logo from '../images/logo.svg';
import './header.css';

export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className='py-2 fixed-top bg-white'>
            <Navbar className='bg-white' expand='lg'>
                <Container>
                    <Navbar.Brand href='/home' className='p-0 d-flex'>
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
                                defaultActiveKey='/home'
                                className=' text-uppercase justify-content-between align-items-center'>
                                <Nav.Item>
                                    <Nav.Link
                                        href='/home'
                                        className='py-1 px-3'>
                                        Home
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey='/about'
                                        className='py-1 px-3'>
                                        About
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey='/projects'
                                        className='py-1 px-3'>
                                        Projects
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey='/contact'
                                        className='py-1 px-3'>
                                        Contact
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    );
}
