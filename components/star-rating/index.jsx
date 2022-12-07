import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import ReactStars from 'react-stars'

const StarRating = (props) => {
    return (
        <div id="star-rating" className=" d-flex">
            <div className="star-icon">
                <ReactStars
                    count={5}
                    size={24}
                    color2={'#ffd700'} />
            </div>
            <div className='ps-2 mt-2'>
                <p className="mb-0">{props.rating}</p>
            </div>
        </div>
    )
}

export default StarRating
