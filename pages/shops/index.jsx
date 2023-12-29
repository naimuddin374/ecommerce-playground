import Breadcrumb from "../../components/breadcrumb";
import FilterBar from '../../components/filter-bar';
import Pagination from "../../components/pagination";
import ProductCard from "../../components/product-card";
import ShopBar from "../../components/shop-bar";
import useData from "../../hooks/useData";
const Shop = () => {

    const { data: product } = useData(`/products`)
    const pdtData = product?.data

    return (
        <div className='container-fluid'>
            <Breadcrumb
                mainLink={`HOME`}
                subLink={`SHOP`}
            />
            <div className="row">
                <div className="col-3">
                    <FilterBar />
                </div>
                <div className="col-9 mt-2 p-5">
                    <ShopBar />
                    <div className="mt-3">
                        <div className="row ">
                            {pdtData?.map(item =>
                                <div className="col-3">
                                    <ProductCard
                                        key={item._id}
                                        {...item}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <hr />
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default Shop