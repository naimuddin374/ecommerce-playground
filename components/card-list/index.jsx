import Image from "next/image"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

import CardListImg from "../../assets/img/product-38.png"

const CardList = () =>{
    return(
        <div className="d-flex justify-content-between align-items-center py-4 px-3" id="CardList"> 
            <div className="d-flex align-items-center">
                <Image className="CardListImg" src={CardListImg}/>
                <div className="ps-3">
                    <h4>Flexible WareLess Head Phone</h4>
                    <p className="mb-0">$399</p>
                </div>
            </div>
            <div>
                <p>Quality</p>
                <button>2</button>
                <div className="pt-2">
                    <FontAwesomeIcon className="cardListIcon" icon={faXmark}/>
                    <a className="ps-2" href="3">Remove</a>
                </div>
            </div>
        </div>
    )
}
export default CardList