
import CustomHeading from '../ui/custom-heading'
import CustomImage from '../ui/custom-image'
import CategoryCardImg from "../../assets/img/545245.png"

function Categories() {
    return (
         <div className="pt-4" id="categoryCard">
            <CustomImage actionLink={`./shop`} classes={`category-card-img`} src={CategoryCardImg} />
            <CustomHeading actionLink={`./shop`} classes={`pt-5 category-card-heading`} hedName={`Mobile`}/>
        </div> 
    )
}
export default Categories


