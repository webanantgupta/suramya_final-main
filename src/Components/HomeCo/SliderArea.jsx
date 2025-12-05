import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay,EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Container, Row } from "reactstrap";


const SliderArea = () => {
  return (
    <>
      {/* <section className="intro_section page_mainslider ds all-scr-cover bottom-overlap-teasers">
        <div className="flexslider" data-dots="true" data-nav="true">
          <ul className="slides">
            <li>
              <div className="slide-image-wrap">

                <img src="img/bg1.jpg" alt="" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <div className="slide_description_wrapper">
                      <div className="slide_description">
                        <div
                          className="intro-layer"
                          data-animation="fadeInRight"
                        >

                          LGBT Community Center
                        </div>
                        <div
                          className="intro-layer"
                          data-animation="fadeInLeft"
                        >
                          <h2>

                            <span className="highlight3">
                              Become The Change
                            </span>
                            <br /> You Want To See
                          </h2>
                        </div>
                        <div
                          className="intro-layer"
                          data-animation="fadeInRight"
                        >
                          <p className="thin">
                            <em>
                              Details on the huge Calvin Sandoval celebration
                              coming to Hillcrest on February 27, 2018
                            </em>
                          </p>
                        </div>
                        <div className="intro-layer" data-animation="fadeInUp">
                          <div className="slide_buttons">

                            <a
                              href="contact.html"
                              className="theme_button color1 min_width_button"
                            >
                              Be Proud!
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slide-image-wrap">

                <img src="images/slide02.jpg" alt="" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <div className="slide_description_wrapper">
                      <div className="slide_description">
                        <div
                          className="intro-layer"
                          data-animation="fadeInRight"
                        >

                          LGBT Community Center
                        </div>
                        <div
                          className="intro-layer"
                          data-animation="fadeInLeft"
                        >
                          <h2>

                            <span className="highlight3">
                              Become The Change
                            </span>
                            <br /> You Want To See
                          </h2>
                        </div>
                        <div
                          className="intro-layer"
                          data-animation="fadeInRight"
                        >
                          <p className="thin">
                            <em>
                              Details on the huge Calvin Sandoval celebration
                              coming to Hillcrest on February 27, 2018
                            </em>
                          </p>
                        </div>
                        <div className="intro-layer" data-animation="fadeInUp">
                          <div className="slide_buttons">

                            <a
                              href="contact.html"
                              className="theme_button color1 min_width_button"
                            >
                              Be Proud!
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slide-image-wrap">

                <img src="images/slide03.jpg" alt="" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <div className="slide_description_wrapper">
                      <div className="slide_description">
                        <div
                          className="intro-layer"
                          data-animation="fadeInRight"
                        >

                          LGBT Community Center
                        </div>
                        <div
                          className="intro-layer"
                          data-animation="fadeInLeft"
                        >
                          <h2>

                            <span className="highlight3">
                              Become The Change
                            </span>
                            <br /> You Want To See
                          </h2>
                        </div>
                        <div
                          className="intro-layer"
                          data-animation="fadeInRight"
                        >
                          <p className="thin">
                            <em>
                              Details on the huge Calvin Sandoval celebration
                              coming to Hillcrest on February 27, 2018
                            </em>
                          </p>
                        </div>
                        <div className="intro-layer" data-animation="fadeInUp">
                          <div className="slide_buttons">

                            <a
                              href="contact.html"
                              className="theme_button color1 min_width_button"
                            >
                              Be Proud!
                            </a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section> */}
      <section className="intro_section page_mainslider ds all-scr-cover bottom-overlap-teasers">

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          className="flexslider"
        >

          <SwiperSlide>
            <li>
              <div className="slide-image-wrap slider_image">
                <img src="https://news.uoregon.edu/sites/default/files/2024-07/lgbtq-with-flag.jpg" alt=""  />
              </div>
              <Container>
                <Row>
                  <div className="col-sm-12 text-center">
                    <div className="slide_description_wrapper">
                      <div className="slide_description">

                        <div className="intro-layer" data-animation="fadeInRight">
                          LGBT Community Center
                        </div>

                        <div className="intro-layer" data-animation="fadeInLeft">
                          <h2>
                            <span className="highlight3">Become The Change</span>
                            <br /> You Want To See
                          </h2>
                        </div>

                        <div className="intro-layer" data-animation="fadeInRight">
                          <p className="thin">
                            <em>
                              Details on the huge Calvin Sandoval celebration
                              coming to Hillcrest on February 27, 2018
                            </em>
                          </p>
                        </div>

                        <div className="intro-layer" data-animation="fadeInUp">
                          <div className="slide_buttons">
                            <a href="contact.html" className="theme_button color1 min_width_button">
                              Be Proud!
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </Row>
              </Container>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <div className="slide-image-wrap slider_image">
                <img src="https://img.freepik.com/free-photo/closeup-diverse-people-joining-their-hands_53876-96081.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              </div>
              <Container>
                <Row>
                  <div className="col-sm-12 text-center">
                    <div className="slide_description_wrapper">
                      <div className="slide_description">

                        <div className="intro-layer" data-animation="fadeInRight">
                          LGBT Community Center
                        </div>

                        <div className="intro-layer" data-animation="fadeInLeft">
                          <h2>
                            <span className="highlight3">Become The Change</span>
                            <br /> You Want To See
                          </h2>
                        </div>

                        <div className="intro-layer" data-animation="fadeInRight">
                          <p className="thin">
                            <em>
                              Details on the huge Calvin Sandoval celebration
                              coming to Hillcrest on February 27, 2018
                            </em>
                          </p>
                        </div>

                        <div className="intro-layer" data-animation="fadeInUp">
                          <div className="slide_buttons">
                            <a href="contact.html" className="theme_button color1 min_width_button">
                              Be Proud!
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </Row>
              </Container>
            </li>
          </SwiperSlide>






        </Swiper>
      </section>
    </>
  )
}

export default SliderArea
