import FilterBar from "../../components/filter-bar"
import ShopLink from "../../components/shop-link"
import ProductList from './../../components/product-list';
import Pagination from "../../components/pagination"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ShopBar from './../../components/shop-bar';

const Shop = () => {
    return (
        <div className=''>
            <ShopLink
                mainLink={`HOME`}
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