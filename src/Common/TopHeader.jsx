import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input, Button, } from "reactstrap";
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const TopHeader = () => {
    return (
        <>
            <section className="page_topline ds table_section table_section_lg section_padding_top_5 py-1 section_padding_bottom_5 columns_margin_0">
                <Container>
                    <Row>
                        <Col lg="6" className="text-center text-lg-left hidden-xs">
                            <div className="inline-content big-spacing">
                                <div className="page_social d-flex gap-3">
                                    <Link to="https://www.facebook.com/p/Suramya-Life-Foundation-100080958570012/" title="Facebook" target='_blank'><FaFacebookF /></Link>
                                    <Link to="https://x.com/LifeSuramya" title="Twitter" target='_blank' ><FaXTwitter /></Link>
                                    <Link to="https://www.instagram.com/suramyalife" target='_blank' title="Instagram" ><FaInstagram /></Link>
                                    <Link to="https://www.youtube.com/@suramyalifefoundation" target='_blank' title="Youtube" ><FaYoutube /></Link>
                                </div>
                            </div>
                        </Col>

                        {/* RIGHT SIDE */}
                        <Col lg="6" className="text-end text-lg-right">
                            <div id="topline-animation-wrap">
                                <div id="topline-hide" className="inline-content big-spacing">
                                    <span className="hidden-xs">
                                        <Link to="tel:+91- 9741 51 5018">
                                            <IoCall className="highlight2 fs-5" />&nbsp;
                                            +91- 9741 51 5018
                                        </Link>
                                    </span>
                                    <span className="greylinks hidden-xs">
                                        <Link to="mailto:info@suramyalife.com">
                                            <FaEnvelope className="highlight2 fs-5" />&nbsp; &nbsp;
                                            <span>info@suramyalife.com</span>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default TopHeader
