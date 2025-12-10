import { useParams } from "react-router-dom";
import PageHeader from "../../Common/PageHeader";


const GalleryDetails = () =>{
const {id} = useParams();
// const gallery = data.find((items)=> items.id === parseInt(id))
// console.log(gallery);
console.log(id);


    return <div>
<PageHeader title={"Gallery"}/>
<div>
    efef
</div>
    </div>
}

export default GalleryDetails;