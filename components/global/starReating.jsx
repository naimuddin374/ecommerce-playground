
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

function StarReating(props){
    return(
        <div>
            <div className="d-flex">   
                <div>
                    <FontAwesomeIcon className="starIcon" icon={faStar} />
                    <FontAwesomeIcon className="starIcon" icon={faStar} />
                    <FontAwesomeIcon className="starIcon" icon={faStar} />
                    <FontAwesomeIcon className="starIcon" icon={faStar} />
                    <FontAwesomeIcon className="starIcon" icon={faStar} />
                </div>
                <div>
                    <p className="ps-2 mb-0">{props.reatingRang}</p>
                </div>
            </div>
        </div>
    )
}
export default StarReating