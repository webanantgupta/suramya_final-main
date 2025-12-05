import React from 'react'
import { Link } from 'react-router-dom'
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <>

      <footer className="page_footer template_footer ds ms parallax overlay_color section_padding_top_40 section_padding_bottom_40 columns_padding_25">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">

            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 col-md-push-4 text-center">
              <div className="widget widget_text widget_about">
                <div className="logo logo_with_text bottommargin_10">

                  <img src="/wlogo.png" alt="" />
                </div>
                <p>
                  Every person deserves to feel emotionally supported, mentally strong, and socially accepted — no matter who they are or where they come from.</p>
                <p className="topmargin_25">
                  <div className="page_social d-flex justify-content-center gap-3">
                    <Link to="https://www.facebook.com/p/Suramya-Life-Foundation-100080958570012/" title="Facebook" target='_blank'><FaFacebookF /></Link>
                    <Link to="https://x.com/LifeSuramya" title="Twitter" target='_blank' ><FaXTwitter /></Link>
                    <Link to="https://www.instagram.com/suramyalife" target='_blank' title="Instagram" ><FaInstagram /></Link>
                    <Link to="https://www.youtube.com/@suramyalifefoundation" target='_blank' title="Youtube" ><FaYoutube /></Link>
                  </div>

                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 col-md-pull-4">
              <div className="widget widget_text">
                <h3 className="widget-title">Our Contacts</h3>
                <ul className="list-unstyled greylinks">
                  <li className="media ">
                    <Link to="https://maps.app.goo.gl/KNTvTbyMRBEx4eUQ9" target='_blank'>
                      <IoLocationSharp className='highlight' />&nbsp;
                      1002, Tower – 4, Metro City, Gate No. 1
                      Nishatganj, Lucknow – 226006, Uttar Pradesh
                    </Link>
                  </li>
                  <li className="media">

                    <Link to="tel:+91 97415 15018">
                      <IoCall className='highlight' />&nbsp;
                      +91 97415 15018
                    </Link>
                  </li>
                  <li className="media">


                    <Link to="mailto:info@suramyalife.com">
                      <FaEnvelope className='highlight' />&nbsp;&nbsp;
                      info@suramyalife.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 hidden-xs  text-center">
              <div className="widget widget_recent_posts">
                <h3 className="widget-title">Quick Links</h3>
                <ul className="list-unstyled greylinks">
                  <li>   <Link to="/about">Who We Are   </Link> </li>
                  <li> <Link  to="/viewevents">Events </Link></li>
                  <li>   <Link to="/impact">Our Impact    </Link> </li>
                  <li>   <Link to="/contact">Contact Us </Link> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="ds ms parallax page_copyright overlay_color section_padding_top_30 section_padding_bottom_30">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <p> Copyright © 2025 <span style={{ color: "#f3702b" }}>Suramya Life Foundation </span>  All Rights Reserved | Powered By - <Link to="https://onebigbit.com/" style={{ color: "#f3702b" }} target='_blank'>OneBigBit Technologies Private Limited</Link></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
