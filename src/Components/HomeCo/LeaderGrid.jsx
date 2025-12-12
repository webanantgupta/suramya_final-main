import PageHeader from "../../Common/PageHeader";
import leaderData from "../../data/leaderData/leaderData.json"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const LeaderGrid = () => {

    // console.log(leaderData)
    const DirectorsData = leaderData?.filter((d) => d.category === 'Directors');
    console.log(DirectorsData, 'data');

    const advisor = leaderData?.filter((obj) => obj.category === "Advisory Board");
    console.log(advisor);

    const leader = leaderData?.filter((obj) => obj.category === "leadership");
    console.log(leader);


    return (
        <div>
            <PageHeader title={"Our Leadership Team"} />
            <div className="container mb-5 pb-5">
                <div className="row bg-white">
                    <h2 className="mt-5 mb-4">Our Team Leaders</h2>
                    <Swiper className="mySwiper"
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        loop={true}
                        rewind={true}
                        // pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            576: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                        }}
                    >

                        {leader.map((obj, index) => {
                            return <SwiperSlide key={index}>
                                <div className="d-flex flex-column">
                                    <img src={obj.image} alt="image" style={{ height: "300px",objectFit:'contain' }} />
                                    <h4 className="mt-2 text-center">{obj.heading}</h4>
                                    <h5 className="small-text text-center highlight">{obj.subheading}</h5>
                                    <p className=" my-auto text-justify">{obj.description}</p>
                                </div>
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>

                <div className="row justify-content-center">
                    <h2 className="mt-5 mb-4">Our Advisory Board</h2>
                    {advisor.map((obj, index) => {
                        return <div key={index} className="col-12 col-sm-6 col-lg-4 h-70 mb-5">
                            <div className="d-flex flex-column">
                                <img src={obj.image} alt="image" style={{ height: "300px", objectFit:"contain" }} />
                                <h4 className="mt-2 text-center">{obj.heading}</h4>
                                <h5 className="small-text text-center highlight">{obj.subheading}</h5>
                                <p className="my-auto text-justify">{obj.description}</p>
                            </div>
                        </div>
                    })}
                </div>

                <div className="row">
                    <h2 className="mt-5 mb-4">Honorary Directors</h2>
                    <Swiper
                        className="mySwiper"
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        loop={true}
                        // pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            576: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                        }}
                    >


                        {DirectorsData.map((obj, index) => {
                            return (
                            <SwiperSlide key={index}>
                                <div  className="">
                                    <div className="d-flex flex-column">
                                        <img src={obj.image} alt="image" style={{ height: "300px", objectFit:"contain" }} />
                                        <h4 className="mt-2 text-center">{obj.heading}</h4>
                                        <h5 className="small-text text-center highlight">{obj.subheading}</h5>
                                        <p className="my-auto text-justify">{obj.description}</p>
                                    </div>

                                </div>
                            </SwiperSlide>

)
                        })}
                    </Swiper>

                </div>
            </div>


        </div>
    )
}

export default LeaderGrid
