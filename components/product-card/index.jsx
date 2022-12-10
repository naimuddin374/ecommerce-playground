import { Card, CardBody, CardTitle } from 'reactstrap';
import productImg from '../../assets/img/shop/product-list/product-38.png'
import Buttons from '../button';
import StarRating from '../star-rating';
import DiscountPrice from "../discount-price";
import ProductImg from "./product-img"
import RegularPrice from "../regular-price";
import SubHeading from "../sub-heading";
// import Images from './../image/index';
import Heading from '../heading';

const ProductCard = () => {
    return (
        <div id="product-card" className="my-3">
            <Card className="pdt-card">
                <ProductImg image={productImg} />

                {/* <Images /> */}
                <CardBody>
                    <CardTitle >
                        <SubHeading subHeading={`Head Phone`} />
                    </CardTitle>
                    <h4><Heading id={`heading`} heading={`Smart Digital Watch`} /></h4>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex">
                            <RegularPrice regularPrice={`$223`} />
                            <DiscountPrice
                                className={`ps-3 mb-0 text-decoration-line-through text-muted`}
                                dicPrice={`$333`} />
                        </div>
                        <div>
                            <StarRating rating='(95%)' />
                        </div>
                    </div>
                    <Buttons
                        id={`addToCard`}
                        className={`button w-100 rounded-0`}
                    />
                </CardBody>
            </Card>
        </div>
    )
}
export default ProductCard