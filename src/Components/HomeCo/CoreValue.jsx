import { Container, Row, Col, } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const CoreValue = () => {
    const services = [
        {
            icon: "https://cdn-icons-png.flaticon.com/512/6587/6587020.png",
            title: "Mental & Emotional Well-Being",
            text: "Workshops, counseling support, school and college programs, trauma-healing sessions, resilience-building, and life-skills development."
        },
        {
            icon: "https://png.pngtree.com/png-clipart/20250207/original/pngtree-elderly-care-and-nursing-services-enhanced-by-3d-icon-isolated-on-png-image_20374281.png",
            title: "Women, Adolescents & Elder Support",
            text: "Holistic programs addressing emotional wellbeing, life transitions, identity development, safety, and personal empowerment."
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmJzdt4MeGiUfY5BZCOyHiiox6HciH1h6vA&s",
            "title": "LGBTQIA+ Inclusion",
            text: "Police sensitization, medical training, university support cells, cultural advocacy, legal awareness, and community engagement initiatives."
        },
        {
            icon: "https://cdn-icons-png.freepik.com/256/7521/7521601.png?semt=ais_white_label",
            "title": "Capacity Building",
            text: "Training of Trainers (ToT) modules for schools, colleges, rural development institutions, government departments, and healthcare bodies."
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/3097/3097991.png",
            "title": "Supporting Survivors",
            text: "Dedicated interventions for survivors of emotional and mental abuse—restoring confidence, autonomy, and self-worth."
        }
    ];
    return (
        <>
            <section id="team" className=" section_padding_top_65  core_pillers_section bg-light">
                <Container >
                    <Row>
                        <Col sm={12} className=" bottommargin_0 to_animate text-center mb-5" data-animation="fadeInUp"  >
                            <h2 className="section_header color">Our Core Pillars</h2>
                        </Col>
                    </Row>
                    <Row className=" gy-30 gx-30 justify-content-center">
                        <Col>
                            <Swiper
                                spaceBetween={20}
                                modules={[Pagination, Autoplay, EffectFade]}
                                // pagination={{ clickable: true }}
                                autoplay={{ delay: 2000 }}
                                loop={true}
                                breakpoints={{
                                    576: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    992: { slidesPerView: 3 },
                                }}
                            >
                                {services?.map((s, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="service-card" >
                                            <div className="box-icon">
                                                <img src={s.icon} alt={s.title} />
                                            </div>
                                            <div className="box-content">
                                                <h3 className="box-title">{s.title}</h3>
                                                <p className="box-text">{s.text}  </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CoreValue
