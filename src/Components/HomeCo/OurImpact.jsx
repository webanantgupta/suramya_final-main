import CountUp from "react-countup";
import { Container, Row, Col } from "reactstrap";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageHeader from "../../Common/PageHeader";



const OurImpact = () => {
    return (
        <>
            <section
            // style={{backgroundColor:"orange"}}
                className="pb-2 pt-3"
                id="contact-sec">
                <Container className="" >
                    <Row>
                        <Col sm={12} className=" bottommargin_0  text-center mb-5"   >
                            <h1 className="section_header color mb-3">Our Impact At a Glance</h1>
                        </Col>
                    </Row>
                    <Row className="text-center countup_section">
                        <Col lg="4" md="4" sm="12" className="mb-4">
                            <h1>
                                <CountUp end={400} duration={2} /> +
                            </h1>
                            <p>police personnel trained on LGBTQIA+ sensitization</p>
                        </Col>

                        <Col lg="4" md="4" sm="12" className="mb-4">

                            <h1>
                                <CountUp end={250} duration={2} /> +
                            </h1>
                            <p>medical professionals engaged through CME programs</p>
                        </Col>

                        <Col lg="4" md="4" sm="12" className="mb-4">

                            <h1>
                                <CountUp end={35000} duration={2} separator="," /> +
                            </h1>
                            <p>students empowered via Project Phulwari</p>
                        </Col>
                    </Row>
                    <Row className="text-center countup_section">
                        <Col lg="4" md="4" sm="12" className="mb-4">
                            <h1>
                                <CountUp end={2} duration={2} />
                            </h1>
                            <p>LGBTQIA+  Support Cells established in leading UP universities</p>
                        </Col>

                        <Col lg="4" md="4" sm="12" className="mb-4">

                            <h1>
                                Major
                            </h1>
                            <p> collaborations with UP Police, SIRDUP & others</p>
                        </Col>

                        <Col lg="4" md="4" sm="12" className="mb-4">

                            <h1>
                                <CountUp end={100} duration={2} /> +
                            </h1>
                            <p>
                                workshops on mental health, emotional resilience & inclusion
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section
                className="cta-area-2"
                id="contact-sec">
                <div className="bg_layer_here pb-2 section_padding_top_100 section_padding_bottom_100 ">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="title-area text-center mb-0">
                                    <h1 className="sec-title text-light">
                                        Together, we can build a society where every voice is heard, every identity respected, and every individual thrives.
                                    </h1>
                                    <br /><br />
                                    <div className="ourimpact_btn">
                                        {/* <Link to="/about" className="theme_button color2">
                                            read more <FaAngleDoubleRight size={'20px'} />
                                        </Link>&emsp; */}
                                        <Link to="/donate" style={{ background: "transparent", border: "1px solid #f3702b" }} className="theme_button color2" >
                                            Support Our Work <FaAngleDoubleRight size={'20px'} />
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurImpact
