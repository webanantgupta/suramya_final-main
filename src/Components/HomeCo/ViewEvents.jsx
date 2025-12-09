import { Link } from "react-router-dom";
import PageHeader from "../../Common/PageHeader";
import viewEventsData from "../../data/eventData/eventData.json"


const ViewEvents = () => {
    console.log(viewEventsData);

    if (!viewEventsData) return <p>Details Not Found</p>

    return <div>
        <PageHeader title={"Events"} />
        <div className="container p-3 mt-2 mt-sm-4  ">
            <div className="my-5">
                <h5 className="text-center lead">At Suramya Life Foundation, every initiative is more than an event —
                    it is a step toward dignity, awareness, and emotional empowerment.
                </h5>
                <p className="text-justify">In just a few years, we have become one of Uttar Pradesh’s most active organisations working at the intersection of mental health, inclusion, community empowerment, and capacity building.
                    Our journey reflects our commitment to touch lives, shift mindsets, and build a compassionate world.
                </p>
            </div>
            <div className="row">
                {viewEventsData.map((obj, index) => {
                    return <div key={index} className="col-12 col-sm-6 col-lg-4 mb-4 pb-4 ">
                        <div className="d-flex flex-column h-100 p-2"  style={{ border: "1px solid black", borderRadius: "10px" }}>
                            <img src={obj.image} alt="image" style={{ height: "300px" }} />
                            <h3 className="mt-auto text-center mt-2">{obj.title}</h3>
                            <p className="mt-auto text-justify">{obj.description}</p>
                            <Link className="mt-auto text-center" to={`/event/${obj.id}`}>Read More</Link>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}

export default ViewEvents;









