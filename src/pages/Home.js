import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './home.css';
import { NavLink } from 'react-router-dom';
import MVX from '../images/home-img/mvx.webp';
import Payhippo from '../images/home-img/PayhippoLogo 1.webp';
import Hugo from '../images/home-img/hugo.webp';
// import ICRC from '../images/home-img/icrc.webp';
import Lifehealth from '../images/home-img/Lifestores_Healthcare_Logo 1.webp';
import design from '../images/home-img/design.svg';
import consult from '../images/home-img/consult.svg';
import install from '../images/home-img/install.svg';
import supply from '../images/home-img/supply.svg';

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
                    <NavLink
                        to='/contact'
                        className='text-uppercase text-white d-inline-block mt-3 px-5 py-2'>
                        learn more
                    </NavLink>
                </Container>
            </section>

            {/* <section id='home-client' className=' py-4'>
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

                    <div className='text-center  logo-div'>
                        <Image
                            src={ICRC}
                            alt='ICRC Logo'
                            className='client-img mx-2'
                        />
                    </div>

                    <div className='d-flex justify-content-center  logo-div py-md-0 pt-4'>
                        <Image
                            src={Lifehealth}
                            alt='Lifehealth Logo'
                            className='client-img'
                        />
                    </div>
                </Container>
            </section> */}

            <section id='home-services' className='text-white'>
                <Container>
                    <h2>Our Services</h2>

                    <div className='flex-box flex-wrap d-flex flex-lg-row flex-column justify-content-between align-items-lg-center align-items-stretch'>
                        <div className='red-box text-center mb-5 d-flex flex-column justify-content-center align-items-center py-5 px-3'>
                            <h3>Design, Supply & Installation</h3>
                            <p className='mb-4 px-xl-0 px-2'>
                                Fire Extinguishers, Fire Trucks, Fire Hose
                                Reels, Fire Foam & Powders, Equipment Sprinkler
                                Systems, CO2, Breathing Air (BA) Systems, Tank
                                Protection Systems, and Total Flooding Systems
                                are just a few examples of the fire fighting
                                equipment we design, provide, install,
                                commission, and service.
                            </p>
                            <div className='white-bar align-self-end my-0 mx-auto'></div>
                        </div>

                        <div className='red-box text-center mb-5 d-flex flex-column justify-content-center align-items-center py-5 px-3'>
                            <h3>Fire Safety Training</h3>
                            <p className='mb-4 px-xl-0 px-2 '>
                                To help your team members learn how to put out
                                small flames, know when to evacuate, and
                                securely preserve assets, RedSense can provide
                                fire safety training courses. Additionally, it
                                is a legal necessity that some employees receive
                                training in workplace fire safety measures.
                            </p>
                            <div className='white-bar my-0 align-self-end mx-auto'></div>
                        </div>

                        <div className='red-box text-center d-flex flex-column justify-content-center align-items-center py-5 px-3'>
                            <h3>Servicing & Maintenance</h3>
                            <p className='mb-4 px-xl-0 px-2'>
                                As our engineers are skilled and provide routine
                                fire equipment maintenance, the chance of
                                malfunctioning equipment is significantly
                                decreased, should it be required. Additionally,
                                servicing gives you the confidence to continue
                                with your regular business operations.
                            </p>
                            <div className='white-bar align-self-end my-0 mx-auto'></div>
                        </div>

                        <div className='red-box text-center d-flex flex-column justify-content-center align-items-center py-5 px-3'>
                            <h3>Safety Advisory</h3>
                            <p className='mb-4 px-xl-0 px-2'>
                                In order to provide a hassle-free installation,
                                we have always been honest with our information,
                                including the good and the bad, as part of our
                                commitment to providing fire safety and security
                                services to our clients. We are aware of the
                                challenges that our clients encounter in various
                                settings, such as manufacturing, high-security
                                facilities, or other unusual locations. As a
                                result, we provide our engineers' and team's
                                expertise, which is well-versed in technical
                                matters.
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
                                Our consulting services conduct fire protection
                                risk assessments, develop individualized fire
                                safety action plans, and offer on-site
                                assistance to safeguard you and your employees
                                from fire and explosions at work. We also
                                provide solutions to all of your fire-related
                                inquiries.
                            </p>
                            <img src={consult} alt='illustration' />
                        </li>

                        <li className='process-card text-center'>
                            <h3>2</h3>
                            <p>
                                Every project starts with the design of a fire
                                prevention strategy tailored to the demands of
                                the customer. In order for fire prevention
                                systems to perform efficiently and put out a
                                fire, they must also adhere to a stringent set
                                of laws, statutes, and regulations.
                            </p>
                            <img src={design} alt='illustration' />
                        </li>

                        <li className='process-card text-center'>
                            <h3>3</h3>
                            <p>
                                We supply the highest-quality fire system
                                components, wiring, and fittings available. In
                                order for you to make the greatest decision for
                                your safety, we will also provide you with the
                                chance to select between the market leader and
                                alternative secure options. 
                            </p>
                            <img src={supply} alt='illustration' />
                        </li>

                        <li className='process-card text-center'>
                            <h3>4</h3>
                            <p>
                                For fire system installation, we hire qualified
                                experts. We can therefore manage your project
                                with the utmost urgency and efficiency.
                                Following installation, we thoroughly evaluate
                                your system to make sure it is operating as it
                                should.
                            </p>
                            <img src={install} alt='illustration' />
                        </li>
                    </ul>
                </Container>
            </section>
        </main>
    );
}
