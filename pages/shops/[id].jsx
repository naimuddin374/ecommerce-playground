import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import Breadcrumb from '../../components/breadcrumb/index';
import ProductContent from "../../components/product-content";
import RelatedProduct from "../../components/related-product";
const Product = () => {
    const router = useRouter()
    const id = router.query.id
    console.log('id', id)
    return (
        < div className="product " >
            <Breadcrumb
                mainLink={`HOME`}
                subLink={`SHOP`}
                icon={faArrowRight}
                title={`Flexible WareLess Head Phone`}
            />
            <div className="container">
                <ProductContent id={id} />
                <RelatedProduct />
            </div>
        </div >
    )
}
export default Product