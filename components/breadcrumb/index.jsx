import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Breadcrumb = (props) => {
    return (
        <div id="breadcrumb">
            <div className="container">
                <div className="shop-route">
                    {/* <Link> HOME </Link> */}
                    <a href="#">{props.mainLink}</a>
                    <FontAwesomeIcon icon={faAngleRight} className="FontAwesomeIcon px-2" />
                    <a href="#">{props.subLink}</a>
                    <p className="h4 text-light mt-5">{props.title}</p>
                </div>
            </div>
        </div>
    )
}
export default Breadcrumb