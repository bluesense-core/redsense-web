import React from 'react';
import './about.css';
import { FaUserAlt, FaFolder, FaStar } from 'react-icons/fa';
import { Container } from 'react-bootstrap';

export default function About() {
    return (
        <main>
            <section id='about-hero' className='text-white text-center'>
                <h1>About RedSense</h1>
            </section>

            <section id='about-text' className=''>
                <Container>
                    <div>
                        <h2 className='pb-1'>Our History</h2>
                        <p>
                            Our fire protection engineering company has been a
                            quiet reasoning partner alongside a number of
                            international oil companies, government
                            organisations + private companies, in a variety of
                            sectors. Working hand-in-hand with top tier
                            executives and safety units like yours, we guide
                            them through the rough patches of building robust
                            and fire protected organisations.
                        </p>
                    </div>

                    <div className='pt-3'>
                        <h2 className='pb-1'>Our Mission</h2>
                        <p>
                            Our mission is to help build the next generation of
                            some of the safest companies in the world
                        </p>
                    </div>

                    <div className='pt-3'>
                        <h2 className='pb-1'>Values</h2>
                        <p>
                            Our values are Safety. Innovation + Excellence.
                            <ul>
                                <li>
                                    <strong>Safety:</strong> we believe safety
                                    should come before profits. We have a robust
                                    history of creating safer companies for our
                                    clientele, we go the extra mile to ensure
                                    this.
                                </li>

                                <li>
                                    <strong>Innovation:</strong> we help
                                    companies find the most innovative ways to
                                    improve safety.
                                </li>

                                <li>
                                    <strong>Excellence:</strong> we work with
                                    exceptional clients whom we support to build
                                    excellence in safety engineering.
                                </li>
                            </ul>
                        </p>

                        <div className='pt-3'>
                            <h2 className='pb-1'>Vision</h2>
                            <p>
                                We want to be the most trusted, indigenious
                                go-to organisation for fire safety engineering
                                in country + continent.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <section id='about-banner' className='text-white'>
                <Container>
                    <div className='red-box'>
                        <div className='center-box'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <FaUserAlt className='about-icon  text-center' />
                                <FaFolder className='about-icon text-center' />
                                <FaStar className='about-icon text-center' />
                            </div>
                        </div>

                        <hr />

                        <div className='center-box'>
                            <div className='text-uppercase d-flex justify-content-between align-items-center'>
                                <div className='about-details text-center'>
                                    <h3>12</h3>
                                    <p>clients</p>
                                </div>

                                <div className='about-details text-center'>
                                    <h3>50</h3>
                                    <p>projects</p>
                                </div>

                                <div className='about-details text-center'>
                                    <h3>100</h3>
                                    <p>reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
