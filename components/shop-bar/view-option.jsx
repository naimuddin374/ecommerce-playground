import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList, faGamepad } from "@fortawesome/free-solid-svg-icons"

const ViewOptions = () => {
    return (
        <div className="d-flex align-items-center ps-3">
            <p className="mb-0 ps-2">View:</p>
            <FontAwesomeIcon className="mx-3" icon={faGamepad} />
            <FontAwesomeIcon icon={faList} />

        </div>
    )
}

export default ViewOptions