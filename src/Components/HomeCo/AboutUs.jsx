import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade,Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const AboutUs = () => {
  return (
    <>
      <section
        id="services"
        className="ls section_intro_overlap columns_padding_0 columns_margin_0 container_padding_0"
      >
        <div className="container-fluid">
          <Swiper
            modules={[Navigation, Autoplay,Pagination, EffectFade]}
            // navigation={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            // rewind={true}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            <SwiperSlide className="col-lg-3 col-sm-6 col-xs-12">
              <div className="teaser main_bg_color transp with_padding big-padding margin_0 about_card" >
                <div className="media xxs-media-left">
                  <div className="media-left media-middle">
                    <div className="teaser_icon size_small round light_bg_color thick_border_icon big_wrapper">
                      <i className="fa fa-twitter highlight" />
                    </div>
                  </div>
                  <div className="media-body media-middle">
                    <h4>Senior Service</h4>
                    <p>Tri-tip short loin andouille corned beef pork loin.</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="col-lg-3 col-sm-6 col-xs-12">
              <div className="teaser main_bg_color2 transp with_padding big-padding margin_0 about_card" >
                <div className="media xxs-media-left">
                  <div className="media-left media-middle">
                    <div className="teaser_icon size_small round light_bg_color thick_border_icon big_wrapper">
                      <i className="fa fa-rocket highlight2" />
                    </div>
                  </div>
                  <div className="media-body media-middle">
                    <h4>Youth Service</h4>
                    <p>Bresaola meatloaf tongue pastrami chuck.</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="col-lg-3 col-sm-6 col-xs-12 h-100">
              <div className="teaser main_bg_color3 transp with_padding big-padding margin_0 about_card">
                <div className="media xxs-media-left">
                  <div className="media-left media-middle">
                    <div className="teaser_icon size_small round light_bg_color thick_border_icon big_wrapper">
                      <i className="fa fa-users highlight3" />
                    </div>
                  </div>
                  <div className="media-body media-middle">
                    <h4>Family Service</h4>
                    <p>Tail doner chicken bacon. Sausage alcatra bacon.</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="col-lg-3 col-sm-6 col-xs-12 h-100">
              <div className="teaser main_bg_color4 transp with_padding big-padding margin_0 about_card" >
                <div className="media xxs-media-left">
                  <div className="media-left media-middle">
                    <div className="teaser_icon size_small round light_bg_color thick_border_icon big_wrapper">
                      <i className="fa fa-briefcase highlight4" />
                    </div>
                  </div>
                  <div className="media-body media-middle">
                    <h4>Legal Assistance</h4>
                    <p>Pork sirloin corned beef landjaeger brisket.</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
