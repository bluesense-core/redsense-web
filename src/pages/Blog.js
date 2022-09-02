import React from 'react';
import { Container, Image, NavLink } from 'react-bootstrap';
import { blogDetails } from '../components/Cards';
import './blog.css';

export default function Blog() {
    return (
        <main id='blog'>
            <section className='blog-hero d-flex text-white justify-content-center align-items-center py-5 text-center'>
                <Container>
                    <h1>Blog</h1>
                    <p>Read about the latest news at RedSense</p>
                </Container>
            </section>

            <section className='blog-list pb-5'>
                <Container>
                    {blogDetails.map((e) => (
                        <div
                            key={e.id}
                            className='py-5 blog-detail border-bottom d-flex flex-md-row flex-column justify-content-between align-items-center'>
                            <Image src={e.img} alt={e.title} className='' />
                            <div className='blog-text m-md-0 mt-3'>
                                <a
                                    href='#'
                                    className='blog-title text-decoration-none'>
                                    <h3>{e.title}</h3>
                                </a>
                                <p className='blog-desc'>{e.desc}</p>
                                <p className='blog-meta'>
                                    <em>Posted on September 1, 2022</em>
                                </p>
                                <a href='#' className='blog-link'>
                                    Read more
                                </a>
                            </div>
                        </div>
                    ))}
                </Container>
            </section>
        </main>
    );
}
