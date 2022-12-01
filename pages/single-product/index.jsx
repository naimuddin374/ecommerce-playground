import ProductContent from "../../components/product-content"
import RelatedProduct from "../../components/related-product"
import ShopLink from './../../components/shop-link/index';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Product = () => {
    return (
        <div className="product ">
            <ShopLink
                mainLink={`HOME`}
                subLink={`SHOP`}
                icon={faArrowRight}
                title={`Flexible WareLess Head Phone`}
            />
            <div className="container">
                <ProductContent />
                <RelatedProduct />
            </div>
        </div>
    )
}
export default Product