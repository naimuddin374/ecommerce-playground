import FilterBar from "../../components/shop-bar"
import ProductList from './../../components/product-list';
import Pagination from "../../components/pagination"
import ShopBar from '../../components/filter-bar';
import Breadcrumb from "../../components/breadcrumb";

const Shop = () => {
    return (
        <div className='container-fluid'>
            <Breadcrumb
                mainLink={`HOME`}
                subLink={`SHOP`}
            />
            <div className="row">
                <div className="col-3">
                    <ShopBar />
                </div>
                <div className="col-9 mt-2 p-5">
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
        </div >
    )
}

export default Shop