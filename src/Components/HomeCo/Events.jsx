import { Card, CardBody } from "reactstrap";
import homeEvents from "../../data/eventData/eventData.json"
import { Link } from "react-router-dom";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
const Events = () => {
    console.log(homeEvents);

    const newData = homeEvents.slice(0, 4);
    console.log(newData);




    return (
        <>
            <section
                id="blog"
                className="container my-5"
            >
                <div>
                    <div className="text-start mb-4 d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="fs-1">Events</h2>
                        </div>
                        <div>
                            <Link to="/viewevents" className="theme_button color2 margin_0">View All</Link>
                        </div>
                    </div>
                    <div className='row'>
                        <Swiper
                            cssMode={false}
                            loop={true}
                            rewind={true}
                            autoplay={{
                                delay: 1800,
                                disableOnInteraction: false
                            }}
                            navigation={true}
                            pagination={false}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2, spaceBetween: 30 },
                                1024: { slidesPerView: 3, spaceBetween: 30 },
                            }}
                        >

                            {newData.map((obj, index) => {
                                return <SwiperSlide>
                                    <div className="col-12 col-sm-6 col-lg-3 mb-4 w-100 h-100" key={index}>
                                        <Card className="card_container h-100">
                                            <img src={obj.image} alt="image" style={{ height: "300px", objectFit: "cover" }} />
                                            <CardBody className="d-flex flex-column">
                                                <h4 className="mt-auto text-center">{obj.title}</h4>
                                                <p className="mt-auto text-justify">{obj.description}</p>
                                                <Link to={`/event/${obj.id}`} className="mt-auto">Read more</Link>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </SwiperSlide>

                            })}
                        </Swiper>

                    </div>
                </div>



                {/* <div className="container">
                    <div className="row flex-wrap v-center">
                        <div className="col-sm-8 to_animate" data-animation="fadeInRight">
                            <h2 className="section_header">Events </h2>
                        </div>
                        <div
                            className="col-sm-4 text-right hidden-xs to_animate"
                            data-animation="fadeInRight"
                        >

                            <Link to="/viewevents" className="view-more">
                                View More
                            </Link>
                        </div>
                        <div className="col-sm-12 topmargin_30">
                            <div className="loop-colors">
                                <article
                                    className="post format-small-image to_animate"
                                    data-animation="fadeInRight"
                                >
                                    <div className="side-item side-md content-padding big-padding with_border bottom_color_border left">
                                        <div className="row">
                                            <div className="col-md-5 col-lg-4">
                                                <div className="item-media entry-thumbnail">

                                                    <img src="images/gallery/07.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-7 col-lg-8">
                                                <div className="item-content">
                                                    <header className="entry-header">
                                                        <h3 className="entry-title small">

                                                            <a href="/" rel="bookmark">
                                                                Two-Day Symposium with RMLNLU & High Commission of Canada
                                                            </a>
                                                        </h3>
                                                        <div className="entry-meta inline-content greylinks">

                                                            <span>
                                                                <i
                                                                    className="fa fa-calendar highlight rightpadding_5"
                                                                    aria-hidden="true"
                                                                />
                                                                <a href="/">
                                                                    <time dateTime="2017-10-03T08:50:40+00:00">
                                                                        17 Nov, 2025
                                                                    </time>
                                                                </a>
                                                            </span>
                                                            <span>
                                                                <i
                                                                    className="fa fa-user highlight rightpadding_5"
                                                                    aria-hidden="true"
                                                                />
                                                                <a href="/">Admin</a>
                                                            </span>
                                                            <span className="categories-links">
                                                                <i
                                                                    className="fa fa-tags highlight rightpadding_5"
                                                                    aria-hidden="true"
                                                                />
                                                                <a href="/">Community</a>
                                                            </span>
                                                        </div>
                                                    </header>
                                                    <div className="entry-content md-content-3lines-ellipsis">
                                                        <p>A landmark event that brought legal experts, government leaders, and community voices together. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article
                                    className="post format-small-image topmargin_30 to_animate"
                                    data-animation="fadeInLeft"
                                >
                                    <div className="side-item side-md content-padding big-padding with_border bottom_color_border right">
                                        <div className="row">
                                            <div className="col-md-5 col-lg-4">
                                                <div className="item-media entry-thumbnail">

                                                    <img src="images/gallery/08.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-7 col-lg-8">
                                                <div className="item-content">
                                                    <header className="entry-header">
                                                        <h3 className="entry-title small">

                                                            <a href="/" rel="bookmark">
                                                                Holiday Resources for LGBT, Interfaith Families
                                                            </a>
                                                        </h3>
                                                        <div className="entry-meta inline-content greylinks">

                                                            <span>
                                                                <i
                                                                    className="fa fa-calendar highlight rightpadding_5"
                                                                    aria-hidden="true"
                                                                />
                                                                <a href="/">
                                                                    <time dateTime="2017-10-03T08:50:40+00:00">
                                                                        17 jan, 2018
                                                                    </time>
                                                                </a>
                                                            </span>
                                                            <span>
                                                                <i
                                                                    className="fa fa-user highlight rightpadding_5"
                                                                    aria-hidden="true"
                                                                />
                                                                <a href="/">Admin</a>
                                                            </span>
                                                            <span className="categories-links">
                                                                <i
                                                                    className="fa fa-tags highlight rightpadding_5"
                                                                    aria-hidden="true"
                                                                />
                                                                <a href="/">Services</a>
                                                            </span>
                                                        </div>
                                                    </header>
                                                    <div className="entry-content md-content-3lines-ellipsis">
                                                        <p>
                                                            Qui laboris ut, duis excepteur fatback boudin
                                                            nostrud esse ea pork chop cupidatat cupim. Picanh
                                                            landjaeger buffalo consequat jerky brisket, cupim
                                                            ribeye magna beef occaecat. Venison salami
                                                            pancetta t-bone ut, exercitation aliqua.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article
                                    className="post format-small-image topmargin_30 to_animate"
                                    data-animation="fadeInRight"
                                >
                                    <div className="side-item side-md content-padding big-padding with_border bottom_color_border left">
                                        <div className="row">
                                            <div className="col-md-5 col-lg-4">
                                                <div className="item-media entry-thumbnail">

                                                    <img src="images/gallery/09.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-7 col-lg-8">
                                                <div className="item-content">
                                                    <header className="entry-header">
                                                        <h3 className="entry-title small">

                                                            <a href="/" rel="bookmark">
                                                                Transgender 101. America With You
                                                            </a>
                                                        </h3>
                                                        <div className="entry-meta inline-content greylinks">

                                                            <span>
                                                                <i
                                                                    className="fa fa-calendar highlight rightpadding_5"
                                                                    aria-hidden="true"
                                                                />
                                                                <a href="/">
                                                                    <time dateTime="2017-10-03T08:50:40+00:00">
                                                                        17 jan, 2018
                                                                    </time>
                                                                </a>
                                                            </span>
                                                            <span>
                                                                <i
                                                                    className="fa fa-user highlight rightpadding_5"
                                                                    aria-hidden="true"
                                                                />
                                                                <a href="/">Admin</a>
                                                            </span>
                                                            <span className="categories-links">
                                                                <i
                                                                    className="fa fa-tags highlight rightpadding_5"
                                                                    aria-hidden="true"
                                                                />
                                                                <a href="/">Transgender</a>
                                                            </span>
                                                        </div>
                                                    </header>
                                                    <div className="entry-content md-content-3lines-ellipsis">
                                                        <p>
                                                            Nostrud ham hock fatback aute tri-tip sausage
                                                            doner mollit quis laboris. Jerky meatball cupim
                                                            filet mignon. Prosciutto rump eu fatback andouille
                                                            eiusmod strip steak. Fugiat shoulder salami chuck
                                                            in mollit. Minim nulla beef ribs adipisicing.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>
        </>
    )
}

export default Events
