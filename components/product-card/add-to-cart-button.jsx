import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'reactstrap';

const AddToCartButton = () => {
    return (
        <div id="addToCard">
            <Button className=" button w-100 rounded-0">
                <FontAwesomeIcon className="pe-2" icon={faCartShopping} />
                Add to cart</Button>
        </div>
    )
}
export default AddToCartButton