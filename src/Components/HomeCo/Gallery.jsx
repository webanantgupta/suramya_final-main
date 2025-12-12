import LightGallery from 'lightgallery/react';
import PageHeader from "../../Common/PageHeader";
import galleryImg from "../../data/galleryImgData/galleryData.json"
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import { Link, useNavigate } from 'react-router-dom';

// import plugins if you need
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';







const Gallery = () => {
    const navigate = useNavigate();
    // console.log(galleryImg);
 

    return <div>
        <PageHeader title="Gallery" />
        {/* <div className="container-fluid">
            <div className="collage">
                <LightGallery
                    onInit={onInit}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                >
                    {galleryImg?.map((obj, index) => (
            
                            <a
                                key={index}
                                href={obj.image}
                                className='collage-item gallery_image'
                            >
                                <img src={obj.image} alt="gallery" />
                            </a>
                    
                    ))}
                </LightGallery>
            </div>
        </div> */}
        <div className='gallery_card'>
            {galleryImg?.map((obj, index) => {
                return <div key={index} className='gallery_items' onClick={() => navigate(`/gallery/${obj.id}`, { state: obj })}>
                    <img src={obj.image} alt={obj.title} />
                    <h4 className='text-center'>{obj.title}</h4>
                    <p className='text-primary' >View Details</p>
                </div>
            })}
        </div>
    </div>
}

export default Gallery;