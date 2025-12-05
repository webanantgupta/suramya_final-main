import { useParams } from "react-router-dom"
import eventData from "../../data/eventData/eventData.json"
import PageHeader from "../../Common/PageHeader";


const EventDetails = () => {

  const { id } = useParams();
  // console.log(id);

  const event = eventData.find(e => e.id === parseInt(id));
  console.log(event);

  if (!event) return <p className="text-center">Event Not Found!</p>

  return (<div>

<PageHeader title={"Events"}/>
    <div className="container-fluid my-5 d-flex flex-column align-items-center" >
      <img src={event.image} alt="image" style={{height:"450px",width:"600px" }} />
      <h2 className="text-center mt-2">{event.title}</h2>
      <p className="text-center">{event.description}</p>
    </div>
  </div>

  )
}

export default EventDetails
