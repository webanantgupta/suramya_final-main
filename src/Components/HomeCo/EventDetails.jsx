import {useLocation } from "react-router-dom";
import PageHeader from "../../Common/PageHeader";
import * as motion from "motion/react-client";

const EventDetails = () => {
  const locate = useLocation()
  // console.log(locate.state);
  const state = locate.state



  if (!state) return <p className="text-center mt-5">Event Not Found!</p>;
  // console.log(state);

  return (
    <div>
      <PageHeader title={"Events"} subTitle={state.title} path="/viewevents" />
      {/* <div className="container my-5">
        <div className="row align-items-center mb-5">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <img
              src={event.image}
              alt="Event"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "450px", objectFit: "cover", width: "100%" }}
            />
          </div>


          <div className="col-12 col-md-6">
            <h2 className="mb-3 fw-bold">{event.title}</h2>
            <p className="text-muted text-justify">{event.description}</p>
          </div>
        </div>


        <div className="mb-4">
          <h4 className="fw-semibold">About the Event</h4>
          <p className="mt-2 text-justify">{event.content}</p>
        </div>

        {event.highlights && (
          <div className="mb-5">
            <h4 className="fw-semibold">Event Highlights</h4>
            <ul className="mt-3">
              {event.highlights.map((obj, index) => (
                <li key={index} className="mb-2">
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        )}


        {/* {event.content && (
          <div className="mb-5">
            <h4 className="fw-semibold">Event Highlights</h4>
            <ul className="mt-3">
              {event.content.map((obj, index) => (
                <li key={index} className="mb-2">
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        )} */}

      {/* {event.content2 && (
          <div className="mb-5">
            <h4 className="fw-semibold">Event Highlights</h4>
            <ul className="mt-3">
              {event.content2.map((obj, index) => (
                <li key={index} className="mb-2">
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        )} */}


      {/* {event.content3 && (
          <div className="mb-5">
            <h4 className="fw-semibold">Event Highlights</h4>
            <ul className="mt-3">
              {event.content3.map((obj, index) => (
                <li key={index} className="mb-2">
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        )} */}
      {/* <div className="eventDetails_btn">
        <Link to={'/viewevents'}  className="theme_button color2 margin_0">Back To Events</Link>
        </div> */}
      {/* </div>  */}

      <div className="container-fluid d-flex flex-column align-items-center gap-3">
        <div className="event_title text-justify">
          {state?.title && (
          <h2>{state.title}</h2>
          )}
        </div>
        <div className="event_content">
          <div className="event_image">
            {state?.image && (
              <motion.div
                  whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.97 }}
              >

            <img src={state.image} alt={state.title} />
              </motion.div>

            )}
          </div>
          <div className="event_description text-justify">
            {state?.description && (
            <p>{state.description}</p>
            )}
          </div>
          <div className="event_description text-justify"> 
            {state?.content1 && (
              <ul>
                {state.content1.map((obj,index)=>{
                  return <div key={index}>
                        <li>{obj}</li>
                  </div>
                })}
              </ul>
            )}
          </div>
          <div>
            {state?.content2 && (
              <p>{state.content2}</p>
            )}
          </div>
           <div>
            {state?.content3 && (
              <p>{state.content3}</p>
            )}
          </div>
          <div>
            {state?.highlights && (
              <ul>
                {state.highlights.map((obj, index) => {
                  return <div key={index} className="text-justify">
                    <li>{obj}</li>
                  </div>
                })}
              </ul>
            )}

          </div>
          <div className="text-justify">
            {state?.impact && (
            <p>{state.impact}</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventDetails;
