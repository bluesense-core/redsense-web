import React from 'react';
import { Container } from 'react-bootstrap';
import './privacy.css';

export default function Privacy() {
    return (
        <main>
            <section id='privacy-sect' className=' bg-gradient bg-light py-5'>
                <Container>
                    <h1 className='text-center mb-3'>Privacy Policy</h1>
                    <p>
                        RedSense Fire takes client privacy seriously. In this
                        stead we have provided a guideline for our policies in
                        relation to how we handle your information as you use
                        our website. RedSense Fire keeps everything simple; thus
                        we have also used simple terms and avoided legal jargons
                        to make it easy to understand.
                    </p>

                    <h4>What information do we collect?</h4>
                    <p>
                        RedSense Fire collects information from you when you
                        register on our site or fill out a form. When
                        registering on the RedSense Fire site you may be asked
                        to enter your name or email address. You may however
                        visit the RedSense Fire site anonymously.
                    </p>

                    <h4>What do we use your information for?</h4>
                    <p className='mb-1'>
                        Any of the information we collect from you may be used
                        in one of the following ways:
                    </p>
                    <ul>
                        <li>To improve RedSense Fire website</li>
                        <li>To improve RedSense Fire customer service</li>
                        <li>
                            To send periodic emails to RedSense Fire clientele
                        </li>
                        <li>
                            To administer a contest, promotion, survey or other
                            site feature on the RedSense Fire website
                        </li>
                    </ul>
                    <p>
                        <strong>Note:</strong> If at any time you would like to
                        unsubscribe from receiving future emails, we include
                        detailed unsubscribe instructions at the bottom of each
                        email.
                    </p>

                    <h4>Do we disclose any information to outside parties?</h4>
                    <p>
                        RedSense Fire does not sell, trade, or otherwise
                        transfer to outside parties your personally identifiable
                        information. This does not include trusted third parties
                        who assist us in operating our website, conducting our
                        business, or servicing you, so long as those parties
                        agree to keep this information confidential. RedSense
                        Fire may also release your information when we believe
                        release is appropriate to comply with the law, enforce
                        our site policies, or protect ours or others rights,
                        property, or safety.
                    </p>

                    <h4>Third-party links</h4>
                    <p>
                        Occasionally, at our discretion, we may include or offer
                        third-party products or services on our website. These
                        third-party sites have separate and independent privacy
                        policies. We therefore have no responsibility or
                        liability for the content and activities of these linked
                        sites. Nonetheless, RedSense Fire seeks to protect the
                        integrity of our site and welcome any feedback about
                        these sites.
                    </p>

                    <h4>Your Consent</h4>
                    <p>
                        By using the RedSense Fire site you consent to our
                        privacy policy.
                    </p>

                    <h4>Changes to our Privacy Policy</h4>
                    <p>
                        If RedSense Fire decides to change our privacy policy,
                        we will post those changes on this page. This policy was
                        last modified on 23. 08. 2022
                    </p>
                </Container>
            </section>
        </main>
    );
}
