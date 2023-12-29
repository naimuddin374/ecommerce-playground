import { faEyeSlash, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TrandingProductCardImg from "../../assets/img/product-38.png"
import DiscountPrice from '../discount-price'
import RegularPrice from '../regular-price'
import StarRating from "../star-rating"
import CustomButton from '../ui/custom-button'
import CustomHeading from '../ui/custom-heading'
import CustomImage from '../ui/custom-image'

const TrandingProductCard = () => {
    return (
        <div className="card" id="trandingProductCard">
            <div className="Tranding-product-card-img-area p-4 text-center">
                <CustomImage classes="Tranding-product-card-img" src={TrandingProductCardImg.src} />
            </div>
            <div className="card-body pt-3">
                <StarRating />
                <CustomHeading hedName="Smart Digital Watch" classes="mb-0 tranding-product-heading" />
                <div className="d-flex justify-content-between">
                    <RegularPrice regularPrice="$320" />
                    <DiscountPrice dicPrice="$343" />
                </div>
            </div>
            <div className="hover-area d-flex justify-content-center align-items-center">
                <FontAwesomeIcon className="icon" icon={faEyeSlash} />
                <CustomButton classes="mx-2" btnText="Add To Cart" />
                <FontAwesomeIcon className="icon" icon={faHeart} />
            </div>
        </div>
    )
}
export default TrandingProductCard