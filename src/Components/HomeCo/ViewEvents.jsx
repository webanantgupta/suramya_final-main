import { Link, useNavigate } from "react-router-dom";
import PageHeader from "../../Common/PageHeader";
import viewEventsData from "../../data/eventData/eventData.json"
import * as motion from "motion/react-client";


const ViewEvents = () => {
    // console.log(viewEventsData);
    const navigate = useNavigate();

    if (!viewEventsData) return <p>Details Not Found</p>

    return <div>
        <PageHeader title={"Events"} />
        <div className="container p-3 mt-2 mt-sm-4  ">
            <div className="my-5">
                <h2 className="text-center">At Suramya Life Foundation, every initiative is more than an event —
                    it is a step toward dignity, awareness, and emotional empowerment.
                </h2>
                <p className="text-center lead">In just a few years, we have become one of Uttar Pradesh’s most active organisations working at the intersection of mental health, inclusion, community empowerment, and capacity building.
                    Our journey reflects our commitment to touch lives, shift mindsets, and build a compassionate world.
                </p>
            </div>
            <div className="row">
                {viewEventsData.map((obj, index) => {
                    return <div key={index} className="col-12 col-sm-6 col-lg-4 mb-4 pb-4 ">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            style={{ height: "100%" }}
                        >
                            <div className="d-flex flex-column h-100 viewEvent_card" onClick={() => navigate(`/event/${obj.id}`, { state: obj })} style={{ border: "1px solid black", borderRadius: "10px",cursor:"pointer" }}>
                                <img src={obj.image} alt="image" style={{ height: "300px" }} />
                                <h3 className="mt-auto text-center mt-2">{obj.title}</h3>
                                <p className="mt-auto text-justify">{obj.description}</p>
                                <div className="mt-auto text-center mb-2" style={{ cursor: "pointer", color: "blue" }} >Read More</div>
                            </div>
                        </motion.div>

                    </div>
                })}
            </div>
        </div>
    </div>
}

export default ViewEvents;









