import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './home.css';
import MVX from '../images/home-img/mvx.webp';
import Payhippo from '../images/home-img/PayhippoLogo 1.webp';
import Hugo from '../images/home-img/hugo.webp';
// import ICRC from '../images/home-img/icrc.webp';
import Lifehealth from '../images/home-img/Lifestores_Healthcare_Logo 1.webp';
import Search from '../images/home-img/Search 1.webp';
import Schedule from '../images/home-img/Schedule 1.webp';
import Message from '../images/home-img/Message 1.webp';
import Payment from '../images/home-img/Payment 1.webp';

export default function Home() {
    return (
        <main id='home-main' className=''>
            <section id='home-hero' className='text-center text-white'>
                <Container>
                    <h1>First In Fire Safety Engineering</h1>
                    <p className='mt-3 mb-2'>
                        RedSense is the nation's foremost Fire Protection
                        Engineering firm. We work with our clients to provide
                        safety solutions that are uniquely suited to their asset
                        requirements.
                    </p>
                    <a
                        href='about'
                        className='text-uppercase text-white d-inline-block mt-3 px-5 py-2'>
                        learn more
                    </a>
                </Container>
            </section>

            <section id='home-client' className=' py-4'>
                <Container className='d-flex flex-md-nowrap flex-wrap justify-content-between align-items-center'>
                    <div className='d-flex justify-content-center logo-div'>
                        <Image
                            src={MVX}
                            alt='MVX logo'
                            className='client-img'
                        />
                    </div>

                    <div className='d-flex justify-content-center logo-div'>
                        <Image
                            src={Payhippo}
                            alt='Payhippo Logo'
                            className='client-img'
                        />
                    </div>

                    <div className='d-flex justify-content-center logo-div py-md-0 pt-4'>
                        <Image
                            src={Hugo}
                            alt='Hugo Logo'
                            className='client-img'
                        />
                    </div>

                    {/* <div className='text-center  logo-div'>
                        <Image
                            src={ICRC}
                            alt='ICRC Logo'
                            className='client-img mx-2'
                        />
                    </div> */}

                    <div className='d-flex justify-content-center  logo-div py-md-0 pt-4'>
                        <Image
                            src={Lifehealth}
                            alt='Lifehealth Logo'
                            className='client-img'
                        />
                    </div>
                </Container>
            </section>

            <section id='home-services' className='text-white'>
                <Container>
                    <h2>Our Services</h2>

                    <div className='flex-box flex-wrap d-flex flex-lg-row flex-column justify-content-between align-items-lg-center align-items-stretch'>
                        <div className='red-box text-center mb-5 d-flex flex-column justify-content-center align-items-center py-5 px-3'>
                            <h3>Design, Supply & Installation</h3>
                            <p className='mb-4 px-xl-0 px-2'>
                                We deploy fire protection systems with qualified
                                professionals. The parts, wiring, and fittings
                                for your fire systems will be of the highest
                                calibre if you choose us as your safety partner.
                            </p>
                            <div className='white-bar align-self-end my-0 mx-auto'></div>
                        </div>

                        <div className='red-box text-center mb-5 d-flex flex-column justify-content-center align-items-center py-5 px-3'>
                            <h3>Fire Training</h3>
                            <p className='mb-4 px-xl-0 px-2 '>
                                Our fire safety training programs provide
                                in-depth, certified instruction to people,
                                managers, and organizations and extensive
                                training in a variety of topics.
                            </p>
                            <div className='white-bar my-0 align-self-end mx-auto'></div>
                        </div>

                        <div className='red-box text-center d-flex flex-column justify-content-center align-items-center py-5 px-3'>
                            <h3>Servicing & Maintenance</h3>
                            <p className='mb-4 px-xl-0 px-2'>
                                Your fire safety equipment can be maintained by
                                a RedSense engineer or technician so that it
                                continues to perform at its peak level without
                                requiring maintenance.
                            </p>
                            <div className='white-bar align-self-end my-0 mx-auto'></div>
                        </div>

                        <div className='red-box text-center d-flex flex-column justify-content-center align-items-center py-5 px-3'>
                            <h3>Safety Advisory</h3>
                            <p className='mb-4 px-xl-0 px-2'>
                                The ideal counsel, planning, and execution
                                inside and outside the building are necessary
                                for effective fire prevention. We will be
                                pleased to handle every step for you.
                            </p>
                            <div className='white-bar align-self-end my-0 mx-auto'></div>
                        </div>
                    </div>
                </Container>
            </section>

            <section id='home-work'>
                <Container>
                    <h2>How We Work</h2>
                    <p className=''>
                        We put together a unique combination of expertise,
                        tools, and resources for each organisation. Our clever
                        techniques help our clients' safety difficulties become
                        simpler, which increases organisational health and
                        safety over the long run.
                    </p>

                    <ul className='processes d-flex flex-lg-row flex-column justify-content-between align-items-lg-stretch align-items-center'>
                        <li className='process-card text-center'>
                            <h3>1</h3>
                            <p>
                                On all of our projects, we evaluate the site
                                first. Next, we identify the safety issues that
                                need to be fixed after the client site has been
                                assessed.
                            </p>
                            <img src={Search} alt='illustration' />
                        </li>

                        <li className='process-card text-center'>
                            <h3>2</h3>
                            <p>
                                The best solutions for the client safety issues
                                are then investigated. Prior to installing a
                                fire system, a fire design is carried out.
                            </p>
                            <img src={Schedule} alt='illustration' />
                        </li>

                        <li className='process-card text-center'>
                            <h3>3</h3>
                            <p>
                                RedSense starts with project supply and
                                installation. The project is commissioned, and
                                two internal safety personnel are trained to
                                guarantee the system's smooth operation.
                            </p>
                            <img src={Payment} alt='illustration' />
                        </li>

                        <li className='process-card text-center'>
                            <h3>4</h3>
                            <p>
                                To enhance the safety of the entire
                                organisation, RedSense will design & implement
                                safety skill-building programmes; ongoing repair
                                and maintenance will be offered.
                            </p>
                            <img src={Message} alt='illustration' />
                        </li>
                    </ul>
                </Container>
            </section>
        </main>
    );
}
