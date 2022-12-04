

import ImageList from "./image-list"
import ProductImage from "./product-img"

const ProductGallery = (props) => {
    return (
        <div id="product-gallery">
            <div className="row p-4">
                <div className="col-3">
                    <ImageList />
                </div>
                <div className="col-9">
                    <ProductImage />
                </div>
                <p>{props.pdtText}</p>
            </div>
        </div>
    )
}
export default ProductGallery