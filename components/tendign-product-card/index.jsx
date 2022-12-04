
import Image from "next/image"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEyeSlash, faHeart} from '@fortawesome/free-solid-svg-icons'
import StarReating from "../../components/global/starReating"

const TrandingProductCard = (props) =>{
    return(
        <div className="card" id="trandingProductCard" >
            <div className="ffsf p-4 text-center">
                <Image className="TrandingProductCardImg" src={props.img} />
            </div>
            <div className="card-body pt-3">
                <StarReating reatingRang="95%"/>
                <p className="mb-0 py-2">{props.title}</p>
                <div className="d-flex justify-content-between">
                    <strong>{props.newPrice}</strong>
                    <strong className="ps-5 text-muted text-decoration-line-through">{props.oldPrice}</strong>
                </div>
            </div>
            <div className="hoverArea">
                <FontAwesomeIcon className="icon" icon={faEyeSlash} />
                <button className="mx-3">Add To Card</button>
                <FontAwesomeIcon className="icon" icon={faHeart} />
            </div>
        </div>
    )
}
export default TrandingProductCard