import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { FaAngleDoubleRight } from "react-icons/fa";


const Leaders = () => {
    return (
        <>
            <section id="team" className="ls section_padding_top_90">
                <Container>
                    <Row>
                        <Col sm={12}
                            className=" bottommargin_0 to_animate" data-animation="fadeInUp">
                            <div className="leader_heading">
                                <h2 className="section_header color">Leaders of Our Community</h2>
                                <div className="leader_btn">
                                    <Link to="/leadergrid" className="theme_button color2 margin_0">
                                        view all <FaAngleDoubleRight size={'20px'} />
                                    </Link>
                                </div>
                            </div>
                            <p>The strength of Suramya Life Foundation lies in its leadership — individuals who bring diverse professional experiences, compassion, and unwavering commitment to social change.</p>
                            <Swiper

                                loop={false}
                                spaceBetween={30}
                                slidesPerView={3}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    992: { slidesPerView: 3 },
                                }}
                                className="topmargin_40"
                            >
                                <SwiperSlide>
                                    <article className="vertical-item content-padding big-padding with_border bottom_color_border text-center h-sm-100 leader_card">
                                        <div className="item-media">
                                            <img src="img/anshu.jpg" alt="" />
                                        </div>
                                        <div className="item-content">
                                            <header className="entry-header">
                                                <h3 className="entry-title small bottommargin_0">
                                                    <Link to="/">Ms. Anshu Srivastava</Link>
                                                </h3>
                                                <span className="small-text highlight mt-2">Founder and Director</span>
                                            </header>
                                        </div>
                                    </article>
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <article className="vertical-item content-padding big-padding with_border bottom_color_border text-center leader_card">
                                        <div className="item-media">
                                            <img src="img/darvesh.jpg" alt="" />
                                        </div>
                                        <div className="item-content">
                                            <header className="entry-header">
                                                <h3 className="entry-title small bottommargin_0">
                                                    <Link to="/">Darvesh Singh Yadavendra</Link>
                                                </h3>
                                                <span className="small-text highlight mt-2">Chairperson</span>
                                            </header>
                                        </div>
                                    </article>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <article className="vertical-item content-padding big-padding with_border bottom_color_border text-center leader_card">
                                        <div className="item-media">
                                            <img src="img/Pankaj.jpg" alt="" />
                                        </div>
                                        <div className="item-content">
                                            <header className="entry-header">
                                                <h3 className="entry-title small bottommargin_0">
                                                    <Link to="/">Pankaj Rastogi</Link>
                                                </h3>
                                                <span className="small-text highlight mt-2">Director – Projects</span>
                                            </header>
                                        </div>
                                    </article>
                                </SwiperSlide>

                            </Swiper>

                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Leaders
