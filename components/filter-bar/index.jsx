import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleRight,faAngleLeft} from "@fortawesome/free-solid-svg-icons"
import {Label} from "reactstrap"


const FilterBar = () => {
    return (

        <div id="filter-bar" className="d-flex justify-content-between px-3 py-2">
            <div className="left-side p-2">
                <a href="#">1</a>
                <span className="px-1">/</span>
                <a href="#">4</a>
                <FontAwesomeIcon className="ms-1" icon={faAngleRight}/>
            </div>
            <div className="right-side d-flex">
                <div>
                    <Label>Short by:</Label>
                    <select className="p-1">
                        <option value="0">High to Low</option>
                        <option value="0">High</option>
                        <option value="0">Low</option>
                    </select>
                </div>
                <div className="d-flex align-items-center ps-3">
                    <p className="mb-0 ps-2">View:</p>
                    <FontAwesomeIcon className="mx-2" icon={faAngleLeft} />
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </div>
        </div>
    )
}
export default FilterBar