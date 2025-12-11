import { useParams } from "react-router-dom";
import eventData from "../../data/eventData/eventData.json";
import PageHeader from "../../Common/PageHeader";

const EventDetails = () => {
  const { id } = useParams();

  const event = eventData.find((e) => e.id === parseInt(id));

  if (!event) return <p className="text-center mt-5">Event Not Found!</p>;

  return (
    <div>
      <PageHeader title={"Events"} subTitle={event.title} path="/viewevents"/>
      <div className="container my-5">
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
      </div>
    </div>
  );
};

export default EventDetails;
