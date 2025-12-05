import PageHeader from "../../Common/PageHeader";
import galleryImg from "../../data/galleryImgData/galleryData.json"

const Gallery = () =>{

console.log(galleryImg);

    
    return <div>
        <PageHeader title="Gallery"/> 
       <div className="container-fluid">
    <div className="collage p-1 p-sm-3 p-lg-5">
        {galleryImg?.map((obj, index) => (
            <div key={index} className="collage-item">
                <img src={obj.image} alt="gallery" />
            </div>
        ))}
    </div>
</div>

    </div>
}

export default Gallery;