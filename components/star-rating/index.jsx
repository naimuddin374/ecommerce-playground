import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRating = (props) => {
    return (
        <div id="star-rating" className="d-flex">
            <div className="star-icon">
                <FontAwesomeIcon className="icon" icon={faStar}/>
                <FontAwesomeIcon className="icon" icon={faStar}/>
                <FontAwesomeIcon className="icon" icon={faStar}/>
                <FontAwesomeIcon className="icon" icon={faStar}/>
                <FontAwesomeIcon className="icon" icon={faStar}/>
            </div>
            <div className='ps-2 '>
                <p className="mb-0">{props.rating}</p>
            </div>
        </div>
    )
}

export default StarRating