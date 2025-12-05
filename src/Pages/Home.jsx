import React from 'react'
import SliderArea from '../Components/HomeCo/SliderArea'
import AboutUs from '../Components/HomeCo/AboutUs'
import CoreValue from '../Components/HomeCo/CoreValue'
import OurImpact from '../Components/HomeCo/OurImpact'
import Leaders from '../Components/HomeCo/Leaders'
import { Link } from 'react-router-dom'
import Events from '../Components/HomeCo/Events'

const Home = () => {
  return (
    <>
      <>
        {/* <div className="preloader">
    <div className="preloader_image" />
  </div> */}
        {/* search modal */}
        <div
          className="modal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="search_modal"
          id="search_modal"
        >

          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <i className="rt-icon2-cross2" />
            </span>
          </button>
          <div className="widget widget_search">
            <form
              method="get"
              className="searchform search-form form-inline"
              action="./"
            >
              <div className="form-group bottommargin_0">

                <input
                  type="text"
                  defaultValue=""
                  name="search"
                  className="form-control"
                  placeholder="Search keyword"
                  id="modal-search-input"
                />
              </div>
              <button type="submit" className="theme_button no_bg_button">
                Search
              </button>
            </form>
          </div>
        </div>
        {/* Unyson messages modal */}
        <div className="modal fade" tabIndex={-1} role="dialog" id="messages_modal">
          <div className="fw-messages-wrap ls with_padding">
            {/* Uncomment this UL with LI to show messages in modal popup to your user: */}
            {/*
		<ul class="list-unstyled">
			<li>Message To User</li>
		</ul>
		*/}
          </div>
        </div>
        <div id="canvas">
          <div id="box_wrapper">
            <SliderArea />
            <AboutUs />
            <CoreValue />
            <OurImpact />
            <Leaders />
            <Events />
          </div>
        </div>
      </>

    </>
  )
}

export default Home
