import SectionTitle from "../section-title"
import ProductList from './../../components/product-list';


const RelatedProduct = () => {
    return (
        <div id="related-product">
            <SectionTitle subHeading={`Product`} heading={`Related Product`} />
            <div className="row">
                <div className="col-3">
                    <ProductList heading={'Smart Digital Watch'} title={'Head Phone'} />
                </div>
                <div className="col-3">
                    <ProductList heading={'Smart Digital Watch'} title={'Head Phone'} />
                </div>
                <div className="col-3">
                    <ProductList heading={'Smart Digital Watch'} title={'Head Phone'} />
                </div>
                <div className="col-3">
                    <ProductList heading={'Smart Digital Watch'} title={'Head Phone'} />
                </div>
            </div>
        </div>
    )
}
export default RelatedProduct