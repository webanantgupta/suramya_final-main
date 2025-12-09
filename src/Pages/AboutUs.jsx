import React from 'react'
import PageHeader from '../Common/PageHeader'
import { Card, CardBody, CardTitle, Col, Row } from 'reactstrap'

const AboutUs = () => {
    const value = [
        {
            title: "Compassion",
            text: "We meet people where they are — with empathy, not judgment."
        },
        {
            title: "Dignity",
            text: "Every voice matters. Every identity deserves respect."
        },
        {
            title: "Integrity",
            text: "We work with honesty, transparency, and accountability."
        },
        {
            title: "Inclusion",
            text: "We celebrate diversity and ensure no one is left behind."
        },
        {
            title: "Impact",
            text: "Action that transforms lives — one workshop, one conversation, one community at a time."
        }
    ]
    return (
        <>
            <div id="canvas">
                <div id="box_wrapper">
                    <PageHeader title="Who we are" />


                    <section className="ls section_padding_top_110  section_padding_bottom_110 columns_padding_30" id="about">
                        <div className="container">
                            <div className="row">
                                {/* <div
                                    className="col-md-6 col-md-push-6"
                                    data-animation="fadeInUp"
                                    data-delay="600">
                                    <div className="embed-responsive embed-responsive-3by2">
                                        <img alt="" src="images/gallery/01.jpg" />
                                    </div>
                                </div> */}
                                <div
                                    className="col-md-12 "
                                    data-animation="fadeInRight"
                                    data-delay="300">
                                    <h2 className="section_header color4">                                        Suramya Life Foundation is a Section 8 non-profit organization established in 2022 in Lucknow, Uttar Pradesh.
                                    </h2>

                                    <p className='aboutus_text'>
                                        <strong> We were born from a simple belief:</strong><br />
                                        Every person deserves to feel emotionally supported, mentally strong, and socially accepted — no matter who they are or where they come from.
                                        At Suramya, we work every day to build a society where emotional wellbeing is not a privilege, but a basic right.
                                        Our work extends across generations and identities — supporting women, adolescents, elderly individuals, LGBTQIA+ community members, survivors of emotional abuse, students, professionals, and government institutions.
                                        We are more than an organization.
                                        We are a movement for empathy, resilience, dignity, and inclusion.

                                    </p>
                                </div><br />
                                <br />
                                <div
                                    className="col-md-12 mt-5 "
                                    data-animation="fadeInRight"
                                    data-delay="300">
                                    <h2 className="section_header color4"> Our Vision </h2>
                                    <p className='aboutus_text'>To create an ecosystem where emotional and mental wellbeing is universal, stigma-free,
                                        and accessible, enabling every individual to live with dignity, clarity, and purpose. </p>
                                </div>
                                <div
                                    className="col-md-12 mt-5 "
                                    data-animation="fadeInRight"
                                    data-delay="300">
                                    <h2 className="section_header color4"> Our Mission </h2>
                                    <p className='aboutus_text'>To empower individuals and communities by providing: </p>

                                    <ul>
                                        <li>Mental health resources</li>
                                        <li>Awareness and sensitization programs</li>
                                        <li>Inclusive support systems</li>
                                        <li>Capacity-building interventions</li>
                                        <li>Safe spaces for healing and expression</li>
                                    </ul>
                                    <p className='aboutus_text'>We aim to nurture a society built on compassion, understanding, respect, and equal opportunity.</p>
                                </div>
                                <div
                                    className="col-md-12 mt-5"
                                    data-animation="fadeInRight"
                                    data-delay="300">
                                    <h2 className="section_header color4"> Our Values</h2>
                                    <p className='aboutus_text'>To create an ecosystem where emotional and mental wellbeing is universal, stigma-free,
                                        and accessible, enabling every individual to live with dignity, clarity, and purpose. </p>
                                </div>
                            </div>
                            <Row className=" d-flex justify-content-center pt-4">
                                {value?.map((data, idx) => (
                                    <Col className="mb-3" key={idx}>
                                        <Card className='value_card' style={{ height: "180px" }}>
                                            <CardBody>
                                                <h4 style={{ color: "#f3702b" }}>{data.title} </h4>
                                                <p className='aboutus_text'>{data.text}</p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                            <Row>
                                <Col md={12}
                                    data-animation="fadeInRight"
                                    data-delay="300">
                                    <h2 className="section_header color4">Suramya Life Foundation is a Section 8 non-profit organization established in 2022 in Lucknow, Uttar Pradesh.
                                    </h2>

                                    <p className='aboutus_text'>
                                        <strong> We were born from a simple belief:</strong><br />
                                        Every person deserves to feel emotionally supported, mentally strong, and socially accepted — no matter who they are or where they come from.
                                        At Suramya, we work every day to build a society where emotional wellbeing is not a privilege, but a basic right.
                                        Our work extends across generations and identities — supporting women, adolescents, elderly individuals, LGBTQIA+ community members, survivors of emotional abuse, students, professionals, and government institutions.
                                        We are more than an organization.
                                        We are a movement for empathy, resilience, dignity, and inclusion.

                                    </p>
                                </Col>
                            </Row>
                            <div className='col-md-12 mt-5'>
                                <h2 className='section_header color4'>Our Approach</h2>
                                <p className='aboutus_text'>We bridge gaps in mental health, emotional support, and social inclusion through:</p>

                                <div className='aboutus_text'>
                                    <p>
                                        <strong>Awareness & Sensitization</strong>
                                        <p>Changing mindsets through workshops, community interactions, and real-world conversations.</p>
                                    </p>
                                    <p>
                                        <strong>Training & Capacity Building</strong>
                                        <p>Developing leaders, educators, police personnel, healthcare providers, and institutions through ToT models.</p>
                                    </p>
                                    <p>
                                        <strong>Advocacy & Policy Support</strong>
                                        <p>Working with government bodies and stakeholders to strengthen systems of care.</p>
                                    </p>
                                    <p>
                                        <strong>Community Programs</strong>
                                        <p>Safe spaces, peer circles, mental health sessions, and leadership development for all age groups.</p>
                                    </p>
                                    <p>
                                        <strong>Collaborations & CSR</strong>
                                        <p>Co-creating impact through corporate partnerships, educational institutions, and international organizations.</p>
                                    </p>
                                </div>
                                <div className='col-md-12 mt-5'>
                                    <h2 className='section_header color4'>What We Offer</h2>
                                    <ul className='aboutus_text'>
                                        <li>Sensitization & awareness workshops</li>
                                        <li>Mental health training and life-skills programs</li>
                                        <li>Trauma-informed emotional support</li>
                                        <li>LGBTQIA+ sensitization for police, educators & hospitals</li>
                                        <li>Elderly wellbeing workshops and engagement activities</li>
                                        <li>Women-centric wellbeing & empowerment programs</li>
                                        <li>Research-based consultancy & advisory</li>
                                        <li>CSR partnerships and corporate wellbeing programs</li>
                                        <li>ToT-based modules for schools, colleges & govt. departments</li>
                                    </ul>
                                </div>
                                <div className='col-md-12 mt-5'>
                                    <h2 className='section_header color4'>Who We Serve</h2>
                                    <ul className='aboutus_text'>
                                        <li>Women navigating life transitions</li>
                                        <li>Adolescents & youth discovering identity and confidence</li>
                                        <li>Corporate employees dealing with stress, burnout, or imbalance</li>
                                        <li>LGBTQIA+ individuals seeking dignity, safety & acceptance</li>
                                        <li>Elderly individuals needing connection and emotional support</li>
                                        <li>Survivors of emotional & mental abuse</li>
                                        <li>Schools, universities & educators</li>
                                        <li>Government departments, law enforcement & medical professionals</li>
                                    </ul>
                                    <p className='aboutus_text'>Because every life stage and every identity deserves emotional strength, safe spaces, and supportive ecosystems.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default AboutUs
