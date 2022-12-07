import { Card, CardBody, CardTitle } from 'reactstrap';
import productImg from '../../assets/img/shop/product-list/product-38.png'
import StarRating from '../star-rating';
import AddToCartButton from "./add-to-cart-button";
import DiscountPrice from "./discount-price";
import ProductImg from "./product-img"
import ProductTitle from './product-title';
import RegularPrice from "./regular-price";
import SubHeading from "./sub-heading";

const ProductCard = () => {
    return (
        <div id="product-card" className="my-3">
            <Card className="pdt-card">
                <ProductImg image={productImg} />
                <CardBody>
                    <CardTitle >
                        <SubHeading subHeading={`Head Phone`} />
                    </CardTitle>
                    <h4><ProductTitle ProductTitle={`Smart Digital Watch`} /></h4>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex">
                            <RegularPrice regularPrice={`$223`} />
                            <DiscountPrice dicPrice={`$333`} />
                        </div>
                        <div>
                            <StarRating rating='(95%)' />
                        </div>
                    </div>
                    <AddToCartButton />
                </CardBody>
            </Card>
        </div>
    )
}
export default ProductCard