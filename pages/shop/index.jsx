import FilterBar from "./filter-bar"
import ShopBar from "./shop-bar"
import ShopLink from "./shop-link"
import Pagination from "../../components/pagination"
import ProductList from "./product-list"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    return (
        <div className=''>
            <ShopLink
                link={`HOME`}
                subLink={`SHOP`}
                icon={faArrowRight}
            />
            <div>
                <div className="row">
                    <div className="col-3">
                        <ShopBar />
                    </div>
                    <div className="col-9">
                        <FilterBar />
                        <div className="mt-3">
                            <div className="row">
                                <div className="col-4">
                                    <ProductList heading={'Smart Digital Watch'} title={'Head Phone'} />
                                </div>
                                <div className="col-4">
                                    <ProductList heading={'Smart Digital Watch'} title={'Head Phone'} />
                                </div>
                                <div className="col-4">
                                    <ProductList heading={'Smart Digital Watch'} title={'Head Phone'} />
                                </div>
                                <div className="col-4">
                                    <ProductList heading={'Smart Digital Watch'} title={'Head Phone'} />
                                </div>
                                <div className="col-4">
                                    <ProductList heading={'Smart Digital Watch'} title={'Head Phone'} />
                                </div>
                                <div className="col-4">
                                    <ProductList heading={'Smart Digital Watch'} title={'Head Phone'} />
                                </div>
                                <div className="col-4">
                                    <ProductList heading={'Smart Digital Watch'} title={'Head Phone'} />
                                </div>
                                <div className="col-4">
                                    <ProductList heading={'Smart Digital Watch'} title={'Head Phone'} />
                                </div>
                                <div className="col-4">
                                    <ProductList heading={'Smart Digital Watch'} title={'Head Phone'} />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <Pagination />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Shop