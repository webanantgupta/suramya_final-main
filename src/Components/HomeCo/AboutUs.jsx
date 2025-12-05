import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
      <section id="services" className="ls section_intro_overlap columns_padding_0 columns_margin_0 container_padding_0">
        <div className="container-fluid">
          <div className="row flex-wrap v-center-content">
            <div
              className="col-lg-3 col-sm-6 col-xs-12 to_animate"
              data-animation="fadeInUp"
            >
              <div className="teaser main_bg_color transp with_padding big-padding margin_0">
                <div className="media xxs-media-left">
                  <div className="media-left media-middle">
                    <div className="teaser_icon size_small round light_bg_color thick_border_icon big_wrapper">

                      <i
                        className="fa fa-twitter highlight"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div className="media-body media-middle">
                    <h4>
                      <a href="#0">Senior Service</a>
                    </h4>
                    <p>
                      Tri-tip short loin andouille corned beef pork loin
                      tri-tip.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 col-xs-12 to_animate"
              data-animation="fadeInUp"
            >
              <div className="teaser main_bg_color2 transp with_padding big-padding margin_0">
                <div className="media xxs-media-left">
                  <div className="media-left media-middle">
                    <div className="teaser_icon size_small round light_bg_color thick_border_icon big_wrapper">

                      <i
                        className="fa fa-rocket highlight2"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div className="media-body media-middle">
                    <h4>
                      <a href="#0">Youth Service</a>
                    </h4>
                    <p>Bresaola meatloaf tongue pastra pastrami chuck.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 col-xs-12 to_animate"
              data-animation="fadeInUp"
            >
              <div className="teaser main_bg_color3 transp with_padding big-padding margin_0">
                <div className="media xxs-media-left">
                  <div className="media-left media-middle">
                    <div className="teaser_icon size_small round light_bg_color thick_border_icon big_wrapper">

                      <i
                        className="fa fa-users highlight3"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div className="media-body media-middle">
                    <h4>
                      <a href="#0">Family Service</a>
                    </h4>
                    <p>
                      Tail doner chicken bacon. Landja sausage alcatra bacon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 col-xs-12 to_animate"
              data-animation="fadeInUp"
            >
              <div className="teaser main_bg_color4 transp with_padding big-padding margin_0">
                <div className="media xxs-media-left">
                  <div className="media-left media-middle">
                    <div className="teaser_icon size_small round light_bg_color thick_border_icon big_wrapper">

                      <i
                        className="fa fa-briefcase highlight4"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div className="media-body media-middle">
                    <h4>
                      <a href="#0">Legal Assistance</a>
                    </h4>
                    <p>Pork sirloin corned beef landjaer brisket hamburger.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* _____ */}

      <section
        id="about"
        className="ls section_padding_top_110 columns_padding_30"
      >
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 col-md-push-6 to_animate"
              data-animation="fadeInUp"
              data-delay={600}
            >
              <div className="embed-responsive about_oneImg embed-responsive-3by2">
                <img src="img/bg1.jpg" alt="" />
              </div>
              <div className="about_two_img">
                <img src="https://media.istockphoto.com/id/1424987910/photo/coworkers-with-stacked-hands-at-the-office.jpg?s=612x612&w=0&k=20&c=VRcFD0Im7myc70YBar1YLBSPL-CtYzenVyd4XRhloQ8=" className="about_two_img_one" alt="" />
                <img src="/favicon.png" className="about_two_img_two" alt="" />
              </div>
            </div>
            <div
              className="col-md-6 col-md-pull-6 to_animate aboutus_heading"
              data-animation="fadeInRight"
              data-delay={300}
            >
              <div>
                <h2 className="section_header color4"> Empowering Hearts Strengthening Minds<br /> Inspiring Change </h2>
                <p>
                  Suramya Life Foundation is a progressive, impact-driven non-profit transforming how communities understand and experience mental health, emotional wellbeing, gender inclusion, women’s empowerment, and elder support.
                  <ul className="AboutListHere mt-3">
                    <li>  <FaCircleCheck style={{ color: "#FF8C00" }} /> From adolescents discovering their identity…</li>
                    <li><FaCircleCheck style={{ color: "#FF8C00" }} />  To women navigating life transitions…</li>
                    <li><FaCircleCheck style={{ color: "#FF8C00" }} /> To elders seeking companionship and care…</li>
                    <li> <FaCircleCheck style={{ color: "#FF8C00" }} /> To LGBTQIA+ persons fighting for dignity… </li>
                    <li>  <FaCircleCheck style={{ color: "#FF8C00" }} /> To professionals striving for balance… </li>
                  </ul>
                  we support every journey.
                  <br />
                  Rooted in Lucknow and reaching across Uttar Pradesh, we work to ensure that every individual—regardless of age, gender, or background—has access to the understanding, tools, and support they need to live with purpose and pride.
                </p>
                <Link to="/about" className="theme_button color2 margin_0">
                  read more <FaAngleDoubleRight size={'20px'} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
