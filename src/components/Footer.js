import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import Logo from '../images/logo.svg';
import { FaLinkedin, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';
import './footer.css';
import TC from '../files/RedSense - Technical Capabilities II.pdf';
import Profile from '../files/v2_RedSense Profile - 2022.pdf';

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

                    <p className='details mt-4 mb-1'>
                        <a href={TC} target='_blank' rel='noreferrer'>
                            View Company's Technical Capabilities
                        </a>
                    </p>

                    <p className='details my-1'>
                        <a href={Profile} target='_blank' rel='noreferrer'>
                            View Company Profile
                        </a>
                    </p>

                    <p className='copyright my-1 d-sm-block d-none'>
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
                            href='https://twitter.com/redsensehq'
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

                    <Nav
                        id='footer-nav'
                        className='flex-wrap justify-content-md-end justify-content-center my-4'>
                        <Nav.Item>
                            <NavLink to='/contact' className='py-0 px-3'>
                                Contact
                            </NavLink>
                        </Nav.Item>

                        <Nav.Item>
                            <NavLink to='/about' className='py-0 px-3'>
                                About
                            </NavLink>
                        </Nav.Item>

                        <Nav.Item>
                            <NavLink to='/terms' className='py-0 px-3'>
                                Terms of Use
                            </NavLink>
                        </Nav.Item>

                        <Nav.Item>
                            <NavLink to='/privacy-policy' className='py-0 px-3'>
                                Privacy Policy
                            </NavLink>
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
