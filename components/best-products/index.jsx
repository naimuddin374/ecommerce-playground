
import BestProductCardImgA from "../../assets/img/product-39 1.png"
import BestProductCardImgB from "../../assets/img/laptop (1).png"
import BestProductCardImgC from "../../assets/img/prodcut6 1.png"
import BestProductCardImgD from "../../assets/img/product-38.png"
import SectionTitle from "../section-title"
import ProductCard from "../product-card"

const BestProducts = () => {
    return (
        <div className="container">
            <div className="pb-2">
                <SectionTitle subName="Nest" hedName="Best Selling Products"/>
            </div>
            <div className="row">
                <div className="col-3">
                   <ProductCard src={BestProductCardImgA}/>
                </div>
                <div className="col-3">
                   <ProductCard src={BestProductCardImgB}/>
                </div>
                <div className="col-3">
                   <ProductCard src={BestProductCardImgC}/>
                </div>
                <div className="col-3">
                   <ProductCard src={BestProductCardImgD}/>
                </div>
            </div>
        </div>
    )
}
export default BestProducts