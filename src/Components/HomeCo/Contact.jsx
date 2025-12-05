import { Link } from "react-router-dom";
import PageHeader from "../../Common/PageHeader";



const Contact = () => {
    return <div>
        <PageHeader title={"Contact"} />

        <section className="mt-3 mt-md-4 mt-lg-5 ">

            <div className="container ">
                <div className="mb-3 mb-md-4 mb-lg-5">
                    <h2 className="text-center">We Would Love to Hear From You</h2>
                </div>
                <div className="row ">

                    <div className="col-sm-4 to_animate" data-animation="pullDown">
                        <div className="teaser text-center">
                            <div className="teaser_icon highlight size_normal">
                                {" "}
                                <i className="rt-icon2-phone5" />{" "}
                            </div>
                            <p>
                                {" "}
                                <span className="grey">Phone:</span><Link to="tel:+919741515018" style={{color:"orange"}}>+91 97415 15018</Link>   
                                <br /> <span className="grey">Helpline:</span><Link to="tel:0522458309" style={{color:"orange"}}>+0522 – 4583809 </Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-4 to_animate" data-animation="pullDown">
                        <div className="teaser text-center">
                            <div className="teaser_icon highlight size_normal">
                                {" "}
                                <i className="rt-icon2-location2" />{" "}
                            </div>
                            <p>
                                {" "}
                                <Link to="https://maps.app.goo.gl/M1VpjtVhiVx6qnvf8" target="_blank"  style={{color:"orange"}}>
                                   Suramya Life Foundation
                                <br />1002, Tower - 4, Metro City, Gate No. 1
                                <br />Nishatganj, Lucknow - 226006, Uttar Pradesh{" "}
                                </Link>
                             
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-4 to_animate" data-animation="pullDown">
                        <div className="teaser text-center">
                            <div className="teaser_icon highlight size_normal">
                                {" "}
                                <i className="rt-icon2-mail" />{" "}
                            </div>
                            <p>
                                <Link
                                    to="mailto:info@suramyalife.com"  style={{color:"orange"}} >
                                    info@suramyalife.com
                                </Link>
                            </p>
                        </div>
                    </div>
                </div><br />
                <div className="row topmargin_40">
                    <div className="col-sm-12 to_animate">
                        <form
                            className="contact-form columns_padding_5"
                            method="post"
                            action="./"
                        >
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="form-group">
                                        {" "}
                                        <label htmlFor="name">
                                            Full Name <span className="required">*</span>
                                        </label>{" "}
                                        <i className="fa fa-user highlight" aria-hidden="true" />{" "}
                                        <input
                                            type="text"
                                            aria-required="true"
                                            size={30}
                                            defaultValue=""
                                            name="name"
                                            id="name"
                                            className="form-control"
                                            placeholder="Full Name"
                                        />{" "}
                                    </p>
                                    <p className="form-group">
                                        {" "}
                                        <label htmlFor="email">
                                            Email address<span className="required">*</span>
                                        </label>{" "}
                                        <i className="fa fa-envelope highlight" aria-hidden="true" />{" "}
                                        <input
                                            type="email"
                                            aria-required="true"
                                            size={30}
                                            defaultValue=""
                                            name="email"
                                            id="email"
                                            className="form-control"
                                            placeholder="Email Address"
                                        />{" "}
                                    </p>
                                    <p className="form-group">
                                        {" "}
                                        <label htmlFor="subject">
                                            Subject<span className="required">*</span>
                                        </label>{" "}
                                        <i className="fa fa-flag highlight" aria-hidden="true" />{" "}
                                        <input
                                            type="text"
                                            aria-required="true"
                                            size={30}
                                            defaultValue=""
                                            name="subject"
                                            id="subject"
                                            className="form-control"
                                            placeholder="Subject"
                                        />{" "}
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="contact-form-message form-group">
                                        {" "}
                                        <label htmlFor="message">Message</label>{" "}
                                        <i className="fa fa-comment highlight" aria-hidden="true" />{" "}
                                        <textarea
                                            aria-required="true"
                                            rows={8}
                                            cols={45}
                                            name="message"
                                            id="message"
                                            className="form-control"
                                            placeholder="Message"
                                            defaultValue={""}
                                        />{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <p className="contact-form-submit text-center mt-2 mb-4">
                                        {" "}
                                        <button
                                            type="submit"
                                            id="contact_form_submit"
                                            name="contact_submit"
                                            className="theme_button color1 margin_0"
                                        >
                                            Send Message
                                        </button>{" "}
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>



                <div className="row mb-lg-4">
                    <div className="col-sm-12">
                        <section id="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1930441782897!2d80.95634247489339!3d26.86560716211442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd41de476c8b%3A0xa541a0a7d4abe3ae!2sSuramya%20Life%20Foundation!5e0!3m2!1sen!2sin!4v1764920142775!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0", width: "full" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </section>
                    </div>
                </div>

            </div >
        </section>
    </div >
}

export default Contact;