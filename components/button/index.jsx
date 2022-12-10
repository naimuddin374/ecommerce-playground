import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'reactstrap';

const Buttons = (props) => {
    return (
        <div id={props.id}>
            <Button className={props.className}>
                <FontAwesomeIcon className="pe-2" icon={faCartShopping} />
                Add to cart</Button>
        </div>
    )
}
export default Buttons