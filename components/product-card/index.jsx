import { Card, CardBody, CardTitle } from 'reactstrap';
import productImg from '../../assets/img/product-38.png';
import DiscountPrice from "../discount-price";
import RegularPrice from "../regular-price";
import StarRating from '../star-rating';
import CustomImage from '../ui/custom-image';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useStoreActions } from 'easy-peasy';
import { useRouter } from 'next/navigation';
import { shortText } from '../../helper';
import CustomButton from '../ui/custom-button';
import CustomSubHeading from '../ui/custom-sub-heading';
import CustomHeading from './../ui/custom-heading';



const ProductCard = (props) => {
    const { image, _id, discount, title, price, subName } = props
    const route = useRouter()
    const createCart = useStoreActions(action => action.cart.create)

    const addToCartHandler = () => {
        createCart({
            ...props,
            quantity: 1,
        })
        // route.push('/cart')
    }
    return (
        <div id="product-card" className="my-3">
            <Card className="pdt-card">
                <CustomImage
                    src={image ? image : productImg}
                    classes={`product-img`}
                    actionLink={`/shops/${_id}`}
                />
                <CardBody>
                    <CardTitle>
                        <CustomSubHeading
                            subName={subName ? subName : ''}
                        />
                    </CardTitle>
                    <CustomHeading
                        actionLink={`/shops/${_id}`}
                        classes={`heading`}
                        hedName={title ? shortText(title, 20) : ''}
                    />
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                            <RegularPrice
                                classes={" "}
                                regularPrice={discount} />
                            <DiscountPrice
                                classes={`ps-2 mb-0`}
                                dicPrice={price} />
                        </div>
                        <div>
                            <StarRating />
                        </div>
                    </div>
                    <CustomButton
                        btnIcon={faCartShopping}
                        btnText="Add to cart"
                        size='full'
                        classes={`button`}
                        btnAction={addToCartHandler}
                    />
                </CardBody>
            </Card>
        </div>
    )
}
export default ProductCard