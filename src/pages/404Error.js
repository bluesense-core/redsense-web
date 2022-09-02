import React from 'react';
import './privacy.css';
import { Container } from 'react-bootstrap';

export default function ErrorPage() {
    return (
        <main>
            <section
                id='error-sect'
                className='bg-gradient bg-light text-center py-5'>
                <Container>
                    <h1>PAGE NOT FOUND</h1>
                    <p className='py-1 py-lg-3'>
                        The page you're looking for does not exist. Click{' '}
                        <a href='/'>here</a> to go to return to the homepage
                    </p>
                </Container>
            </section>
        </main>
    );
}
