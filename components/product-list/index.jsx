import Image from 'next/image';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import productImg from '../../assets/img/shop/product-list/product-38.png'
import StarRating from '../star-rating';

const ProductList = (props) => {
    return (
        <div id="product-list" className="my-3">
            <div>
                <div>
                    <Card>
                        <Image className="pdt-img align-items-center  w-100 h-auto" src={productImg} />
                        <CardBody>
                            <CardTitle>{props.title}</CardTitle>
                            <h4>{props.heading}</h4>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex">
                                    <strong>$50.75</strong>
                                    <p className="ps-3 text-decoration-line-through text-muted">$20.00</p>
                                </div>
                                <div>
                                    <StarRating rating='(95%)' />
                                </div>
                            </div>
                            <Button className="w-100">
                                <FontAwesomeIcon className="pe-2" icon={faCartShopping} />
                                Add to cart</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ProductList