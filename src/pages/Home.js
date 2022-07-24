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
                    <p className='mt-3 mb-0'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Consectetur ultrices lectus nibh elit turpis sagittis,
                        tellus eu. Fames diam felis phasellus vitae aenean non.
                        Est.
                    </p>
                    <a
                        href='/about'
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

                    <div className='flex-box d-flex flex-lg-row flex-column justify-content-between align-items-lg-center align-items-stretch'>
                        <div className='red-box text-center py-5 px-3'>
                            <h3>Fire Control</h3>
                            <p className='mb-4 px-xl-3 px-2'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Feugiat vitae lorem tincidunt
                                null.
                            </p>
                            <div className='white-bar my-0 mx-auto'></div>
                        </div>

                        <div className='red-box text-center py-5 px-3'>
                            <h3>Fire Control</h3>
                            <p className='mb-4 px-xl-3 px-2 '>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Feugiat vitae lorem tincidunt
                                null.
                            </p>
                            <div className='white-bar my-0 mx-auto'></div>
                        </div>

                        <div className='red-box text-center py-5 px-3'>
                            <h3>Fire Control</h3>
                            <p className='mb-4 px-xl-3 px-2'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Feugiat vitae lorem tincidunt
                                null.
                            </p>
                            <div className='white-bar my-0 mx-auto'></div>
                        </div>
                    </div>
                </Container>
            </section>

            <section id='home-work'>
                <Container>
                    <h2>How We Work</h2>
                    <p className=''>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit..
                    </p>

                    <ul className='processes d-flex flex-lg-row flex-column justify-content-between align-items-lg-stretch align-items-center'>
                        <li className='process-card text-center'>
                            <h3>1</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Dui feugiat facilisis orci.
                            </p>
                            <img src={Search} alt='illustration' />
                        </li>

                        <li className='process-card text-center'>
                            <h3>2</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Dui feugiat facilisis orci.
                            </p>
                            <img src={Schedule} alt='illustration' />
                        </li>

                        <li className='process-card text-center'>
                            <h3>3</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Dui feugiat facilisis orci.
                            </p>
                            <img src={Payment} alt='illustration' />
                        </li>

                        <li className='process-card text-center'>
                            <h3>4</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Dui feugiat facilisis orci.
                            </p>
                            <img src={Message} alt='illustration' />
                        </li>
                    </ul>
                </Container>
            </section>
        </main>
    );
}
