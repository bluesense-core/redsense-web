import React from 'react';
import './privacy.css';
import { Container } from 'react-bootstrap';

export default function Terms() {
    return (
        <main>
            <section id='terms-sect' className='py-5 bg-gradient bg-light'>
                <Container>
                    <h1 className='text-center mb-3'>Terms and Conditions</h1>
                    <p>
                        Please read these Terms and Conditions carefully before
                        using the https://www.redsensefire.co website operated
                        by RedSense Fire. Your access to and use of the Service
                        is conditioned on your acceptance of and compliance with
                        these Terms. These Terms apply to all visitors, users
                        and others who access or use the Service. By accessing
                        or using the Service you agree to be bound by these
                        Terms. If you disagree with any part of the terms then
                        you may not access the Service.
                    </p>

                    <h4>Links To Other Websites</h4>
                    <p>
                        Our Service may contain links to third-party web sites
                        or services that are not owned or controlled by RedSense
                        Fire. RedSense Fire has no control over, and assumes no
                        responsibility for, the content, privacy policies, or
                        practices of any third party web sites or services. You
                        further acknowledge and agree that RedSense Fire shall
                        not be responsible or liable, directly or indirectly,
                        for any damage or loss caused or alleged to be caused by
                        or in connection with use of or reliance on any such
                        content, goods or services available on or through any
                        such web sites or services
                    </p>

                    <h4>Changes</h4>
                    <p>
                        We reserve the right, at our sole discretion, to modify
                        or replace these Terms at any time. If a revision is
                        material we will try to provide at least 30 days' notice
                        prior to any new terms taking effect. What constitutes a
                        material change will be determined at our sole
                        discretion.
                    </p>

                    <h4>Contact</h4>
                    <p>
                        If you have any questions about these terms, please
                        contact us.
                    </p>
                    <p className=''>Last Updated: 23. 08. 22</p>
                </Container>
            </section>
        </main>
    );
}
