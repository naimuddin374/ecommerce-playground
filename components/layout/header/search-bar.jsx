
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Form, Input, Button } from 'reactstrap'



const SearchBar = () => {
    return (
        <Form id="top-search" className='d-flex justify-content-between'>
            <div className='search-input-icon'>
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <Input
                className='shadow-none'
                type="text"
                placeholder='Search for Products'
            />
            <Button type="submit">Search</Button>
        </Form>
    )
}
export default SearchBar;