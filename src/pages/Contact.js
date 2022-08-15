import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Hard from '../images/contact-img/maintenance.webp';
export default function Contact() {
    return (
        <main>
            <section id='contact-map'>
                <div className='mapouter'>
                    <div className='gmap_canvas'>
                        <iframe
                            title='BlueSense Google Map'
                            width='100%'
                            height='408'
                            id='gmap_canvas'
                            src='https://maps.google.com/maps?q=6%20Chief%20Nwuke%20Street,%20Trans%20Amadi%20Industrial%20Layout.%20&t=&z=13&ie=UTF8&iwloc=&output=embed'
                            frameBorder='0'
                            scrolling='no'
                            marginHeight='0'
                            marginWidth='0'></iframe>
                    </div>
                </div>
            </section>

            <section id='contact-main' className='py-5'>
                <Container>
                    <h1>CONTACT US</h1>

                    <div className='contact-form pb-3 d-flex flex-lg-row flex-column justify-content-between mt-4'>
                        <div className='contact-info'>
                            <img
                                src={Hard}
                                alt='A worker with a hard hat'
                                className='contact-img'
                            />

                            <div className='contact-details p-5'>
                                <div className='d-flex justify-content-start pb-1'>
                                    <FaMapMarkerAlt className='contact-icon me-3' />
                                    <p className='contact-text'>
                                        6 Chief Nwuke Street,
                                        <br />
                                        Trans Amadi Industrial Layout.
                                        <br />
                                        Port Harcourt, Rivers State.
                                        <br />
                                        Nigeria
                                    </p>
                                </div>

                                <div className='d-flex justify-content-start pb-1'>
                                    <FaPhoneAlt className='contact-icon me-3' />
                                    <p className='contact-text'>
                                        <a href='tel:+234 806 578 4615'>
                                            +234 806 578 4615
                                        </a>
                                    </p>
                                </div>

                                <div className='d-flex justify-content-start pb-1'>
                                    <FaEnvelope className='contact-icon me-3' />
                                    <p className='contact-text'>
                                        <a href='mailto:info@redsense.co'>
                                            info@redsensefire.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Form className='px-5 py-5'>
                            <Form.Group className='mb-3'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    className='py-2'
                                    required
                                />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Email</Form.Label>

                                <Form.Control
                                    type='email'
                                    className='py-2'
                                    required
                                />
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>Phone Number</Form.Label>

                                <Form.Control
                                    type='tel'
                                    className='py-2'
                                    required
                                />
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as='textarea' rows={5} required />
                            </Form.Group>

                            <Button
                                className='px-5 py-2 text-uppercase mt-2'
                                type='submit'>
                                SEND
                            </Button>
                        </Form>
                    </div>
                </Container>
            </section>
        </main>
    );
}
