import ProductContent from "../../components/product-content"
import RelatedProduct from "../../components/related-product"
import ShopLink from "../shop/shop-link"

const Product = () => {
    return (
        <div className="product ">
            <ShopLink />
            <div className="container">
                <ProductContent />
                <RelatedProduct />
            </div>
        </div>
    )
}
export default Product