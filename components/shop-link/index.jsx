import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from 'next/link'

const ShopLink = (props) => {
    return (
        <div id="shop-link">
            <div className="container">
                <div className="shop-route">
                    {/* <Link> HOME </Link> */}
                    <a href="#">{props.link}</a>
                    <FontAwesomeIcon icon={props.icon} className="FontAwesomeIcon px-2" />
                    <a href="#">{props.subLink}</a>

                </div>
            </div>
        </div>
    )
}
export default ShopLink