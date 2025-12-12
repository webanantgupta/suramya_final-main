import { Link, useLocation } from "react-router-dom";
import PageHeader from "../../Common/PageHeader";
import * as motion from "motion/react-client";


const GalleryDetails = () => {
    const location = useLocation();
    // console.log(location.state, 'state data')
    const galleryData = location.state;
    // console.log(galleryData);

    // const gallery = data.find((items)=> items.id === parseInt(id))
    // console.log(gallery);

    return <div>
        <PageHeader title={"Gallery"} subTitle={galleryData.title} path={"/gallery"} />
        <div>
            <div className="container">
                <div className="row justify-content-center gallery_box">
                    {galleryData.images.map((obj, index) => {
                        return <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 gallery_grid">
                            <motion.div 
                               whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                            >

                            <img src={obj} alt="image" />
                            </motion.div>

                        </div>
                    })}
                    <div className="galleryBack_btn">
                        <Link to={'/gallery'} className="theme_button color2 margin_0">Back To Gallery</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default GalleryDetails;