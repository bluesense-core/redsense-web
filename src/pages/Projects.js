import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { cardDetails } from '../components/Cards';
import './projects.css';

export default function Projects() {
    return (
        <main>
            <section id='projects-hero' className='text-white text-center'>
                <h1>Our Projects</h1>
                <p className=''>
                    We provide fire fighting equipment design, supply,
                    installation, commissioning, and service. We offer top-notch
                    training, advice, fire building designs, and fire strategy
                    services. Since we offer customised solutions to safety
                    issues, our clients are actively involved in the processes.
                </p>
            </section>

            <section id='projects-cards' className=''>
                <Container>
                    <Row xs={1} md={2} className='g-5'>
                        {cardDetails.map((e) => (
                            <Col>
                                <Card key={e.id} className='h-100'>
                                    <Card.Img variant='top' src={e.img} />
                                    <Card.Body className=''>
                                        <Card.Title>{e.title}</Card.Title>
                                        <Card.Text className='my-3'>
                                            {e.subtitle}
                                        </Card.Text>
                                        <a href={e.link}>Learn More</a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </main>
    );
}
