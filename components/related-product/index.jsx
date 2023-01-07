import ProductCard from "../product-card";
import SectionTitle from "../section-title"

const RelatedProduct = () => {
    return (
        <div id="related-product">
            <SectionTitle
                subName='Product'
                hedName={`Related Product`}
                classes={`product-heading`}
            />
            <div className="row">
                <div className="col-3">
                    <ProductCard heading={'Smart Digital Watch'} title={'Head Phone'} />
                </div>
                <div className="col-3">
                    <ProductCard heading={'Smart Digital Watch'} title={'Head Phone'} />
                </div>
                <div className="col-3">
                    <ProductCard heading={'Smart Digital Watch'} title={'Head Phone'} />
                </div>
                <div className="col-3">
                    <ProductCard heading={'Smart Digital Watch'} title={'Head Phone'} />
                </div>
            </div>
        </div>
    )
}
export default RelatedProduct