import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
const PaginationBar = () => {
    return (
        <div>
            <div className="left-side p-2">
                <a href="#">1</a>
                <span className="px-1">/</span>
                <a href="#">4</a>
                <FontAwesomeIcon className="ms-1" icon={faAngleRight} />
            </div>
        </div>
    )
}
export default PaginationBar