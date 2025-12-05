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

                                    <p>
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
                                    <p>To create an ecosystem where emotional and mental wellbeing is universal, stigma-free,
                                        and accessible, enabling every individual to live with dignity, clarity, and purpose. </p>
                                </div>
                                <div
                                    className="col-md-12 mt-5 "
                                    data-animation="fadeInRight"
                                    data-delay="300">
                                    <h2 className="section_header color4"> Our Mission </h2>
                                    <p>To empower individuals and communities by providing: </p>

                                    <ul>
                                        <li>Mental health resources</li>
                                        <li>Awareness and sensitization programs</li>
                                        <li>Inclusive support systems</li>
                                        <li>Capacity-building interventions</li>
                                        <li>Safe spaces for healing and expression</li>
                                    </ul>
                                    <p>We aim to nurture a society built on compassion, understanding, respect, and equal opportunity.</p>
                                </div>
                                <div
                                    className="col-md-12 mt-5"
                                    data-animation="fadeInRight"
                                    data-delay="300">
                                    <h2 className="section_header color4"> Our Values</h2>
                                    <p>To create an ecosystem where emotional and mental wellbeing is universal, stigma-free,
                                        and accessible, enabling every individual to live with dignity, clarity, and purpose. </p>
                                </div>
                            </div>
                            <Row className=" d-flex justify-content-center pt-4">
                                {value?.map((data, idx) => (
                                    <Col className="mb-3" key={idx}>
                                        <Card className='value_card' style={{ height: "180px" }}>
                                            <CardBody>
                                                <h4 style={{ color: "#f3702b" }}>{data.title} </h4>
                                                <p>{data.text}</p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                            <Row>
                                <Col md={12}
                                    data-animation="fadeInRight"
                                    data-delay="300">
                                    <h2 className="section_header color4">                                        Suramya Life Foundation is a Section 8 non-profit organization established in 2022 in Lucknow, Uttar Pradesh.
                                    </h2>

                                    <p>
                                        <strong> We were born from a simple belief:</strong><br />
                                        Every person deserves to feel emotionally supported, mentally strong, and socially accepted — no matter who they are or where they come from.
                                        At Suramya, we work every day to build a society where emotional wellbeing is not a privilege, but a basic right.
                                        Our work extends across generations and identities — supporting women, adolescents, elderly individuals, LGBTQIA+ community members, survivors of emotional abuse, students, professionals, and government institutions.
                                        We are more than an organization.
                                        We are a movement for empathy, resilience, dignity, and inclusion.

                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default AboutUs
