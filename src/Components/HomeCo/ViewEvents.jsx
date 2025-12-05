import PageHeader from "../../Common/PageHeader";
import viewEventsData from "../../data/eventData/eventData.json"


const ViewEvents = () => {
    console.log(viewEventsData);

    if (!viewEventsData) return <p>Details Not Found</p>

    return <div>
        <PageHeader title={"Events"} />
        <div className="container p-3 mt-2 mt-sm-4 ">
            <div className="row">
                {viewEventsData.map((obj, index) => {
                    return <div key={index} className="col-12 col-sm-6 col-lg-4 mb-4">
                        <img src={obj.image} alt="image" style={{ height:"300px"}}/>
                        <h3 className="text-center mt-2">{obj.title}</h3>
                        <p className="text-center">{obj.description}</p>
                    </div>
                })}
            </div>
        </div>
    </div>
}

export default ViewEvents;









