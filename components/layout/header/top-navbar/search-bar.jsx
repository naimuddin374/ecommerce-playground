import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form } from 'reactstrap'
import CustomButton from "../../../ui/custom-button"
import CustomInput from "../../../ui/custom-input"

const SearchBar = () => {
    return (
        <Form id="top-search" className='d-flex justify-content-between width-75'>
            <div className='search-input-icon'>
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <CustomInput
                classes={'search-bar-input'}
            />
            <CustomButton
                classes={'search-bar-button'}
                btnText='Search'
            />
        </Form>
    )
}
export default SearchBar;