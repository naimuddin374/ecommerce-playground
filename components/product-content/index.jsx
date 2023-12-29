import { faCartShopping, faHeart, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStoreActions } from 'easy-peasy';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useData from '../../hooks/useData';
import DiscountPrice from '../discount-price';
import ProductGallery from '../product-gallery';
import RegularPrice from '../regular-price';
import StarRating from '../star-rating/index';
import CustomButton from '../ui/custom-button';
import CustomHeading from '../ui/custom-heading';
import CustomInput from '../ui/custom-input';

const ProductContent = ({ id }) => {
    const [quantity, setQuantity] = useState(0)

    const { getDetails } = useData(`/produts`)
    const pdtDetails = getDetails(`/products/${id}`)
    const createCart = useStoreActions(action => action.cart.create)
    const route = useRouter()

    const addToCartHandler = () => {
        if (quantity < 1 || quantity > 20) {
            toast.error('Provied a valid Quntity!')
            return;
        }
        const obj = { ...pdtDetails, quantity }
        console.log('adTocart=', obj)
        createCart(obj)
        route.push('/cart')


    }

    const changeHandler = (e) => {
        if (e.target.value < 1 || e.target.value > 20) {
            toast.error('Provied a valid Quntity!')
        } else {
            setQuantity(e.target.value)
        }

    }

    return (
        <div id="pdt-content">

            <div className="row">
                <div className="col-7">
                    <ProductGallery
                        images={[pdtDetails?.image]}
                    />
                </div>
                <div className="col-5 ">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <p className="me-2 mb-0">Review:</p>
                            <StarRating />
                        </div>
                        <div >
                            <FontAwesomeIcon className="me-2" icon={faShareNodes} />
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                    </div>
                    <div className="pdt-info">
                        <CustomHeading
                            classes={"h4 text-dark text-decoration-none"}
                            hedName={pdtDetails?.title}
                        />
                        <p>Product Id:<span className="text-muted"> {pdtDetails?._id} </span></p>
                        <p>{pdtDetails?.description}</p>
                        <p>Brand:<span className="text-muted">HP</span></p>
                        <h5>Quick Overview</h5>
                        <div>
                            <ul >
                                <li className="m-0">RAM - 16GB</li>
                                <li className="m-0">Processor Type - Apple M1 Chip</li>
                                <li className="m-0">Graphics Memory - Shared</li>
                                <li className="m-0">Display Size(Inch) - 13.3</li>
                            </ul>
                        </div>
                        <div className="price d-flex align-items-center">
                            <RegularPrice
                                classes={"h4 me-3 "}
                                regularPrice={pdtDetails?.price}
                            />
                            <DiscountPrice
                                classes={'text-muted mb-0'}
                                dicPrice={pdtDetails?.discount}
                            />
                        </div>

                        <div className=" quantity row align-items-center ">
                            <div className=" input col-2 p-0 text-center">
                                <CustomInput
                                    classes="shadow-none"
                                    type="number"
                                    name={quantity}
                                    value={quantity}
                                    changeHandler={changeHandler}
                                />
                            </div>
                            <div className="col-9">
                                <CustomButton
                                    size={'full'}
                                    btnAction={addToCartHandler}
                                    btnText={"Add To Cart"}
                                    btnIcon={faCartShopping}
                                    type={'btn'}
                                    classes={'add-to-cart'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductContent