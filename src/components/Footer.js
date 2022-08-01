import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import Logo from '../images/logo.svg';
import { FaLinkedin, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';
import './footer.css';

export default function Footer() {
    return (
        <footer className='text-white py-4'>
            <Container className='d-flex flex-sm-row flex-column justify-content-between align-items-center'>
                <div>
                    <Navbar.Brand href='/'>
                        <Image
                            src={Logo}
                            className='footer-logo'
                            alt='RedSense Logo'
                        />
                    </Navbar.Brand>

                    <p className='copyright my-4 d-sm-block d-none'>
                        © RedSense | All rights reserved.
                    </p>
                </div>

                <div>
                    <div className='social-links d-flex py-sm-0 pt-4 justify-content-sm-end justify-content-center align-items-end'>
                        <a
                            href='https://www.linkedin.com/company/redsense/'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <FaLinkedin className='social-icon me-sm-3 mx-3' />{' '}
                        </a>

                        <a
                            href='http://'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <FaTwitterSquare className='social-icon me-sm-3 mx-3' />{' '}
                        </a>

                        <a
                            href='http://'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <FaFacebookSquare className='social-icon me-sm-3 mx-3' />{' '}
                        </a>
                    </div>

                    <Nav id='footer-nav' className='my-4'>
                        <Nav.Item>
                            <Nav.Link href='/contact' className='py-0 px-3'>
                                Contact
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href='/about' className='py-0 px-3'>
                                About
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href='/faq' className='py-0 px-3'>
                                FAQ's
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href='/terms' className='py-0 px-3'>
                                Terms of Use
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <p className='copyright my-4 d-sm-none d-block text-center'>
                        © RedSense | All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
