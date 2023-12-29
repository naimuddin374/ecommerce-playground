import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { toast } from 'react-toastify';
import CardListImg from "../../assets/img/poster-03 1.png";
import { shortText } from '../../helper';
import CustomButton from '../ui/custom-button';
import RegularPrice from './../regular-price/index';
import CustomHeading from './../ui/custom-heading';
import CustomImage from './../ui/custom-image';
import CustomInput from './../ui/custom-input';

const CardList = () => {
    const cartData = useStoreState(state => state.cart.data)
    const removeItems = useStoreActions(action => action.cart.delete)
    const updateQuantity = useStoreActions(action => action.cart.create)
    const quantityHandler = (quantity, pdt) => {
        if (quantity < 1 || quantity > 20) {
            toast.error('Please provide a valid quantity!')
            return;
        }
        updateQuantity({
            ...pdt,
            quantity
        })

    }

    return (
        <>
            {cartData?.map(item =>
                < div className="d-flex justify-content-between align-items-center py-4 px-3" id="CardList" key={item._id}>
                    <div className="d-flex align-items-center">
                        <CustomImage
                            classes={"card-list-img"}
                            src={item.image ? item.image : CardListImg.scr}
                            alt={'cardProductImg'}
                        />
                        <div className="ps-3">
                            <CustomHeading
                                classes={'heading'}
                                hedName={shortText(item.title, 30)} />
                            <RegularPrice classes='price' regularPrice={item.discount} />
                        </div>
                    </div>
                    <div>
                        <div className='pe-2 align-items-center'>
                            <CustomInput
                                type="number"
                                name={item.quantity}
                                value={item.quantity}
                                classes={'quantity'}
                                changeHandler={(e) => quantityHandler(e.target.value, item)}

                            />
                        </div>
                        <CustomButton
                            btnAction={() => removeItems(item._id)}
                            btnIcon={faXmark}
                            btnText={'Remove'}
                            classes={'card-list-icon'}
                            variant={'light'}
                            size={'full'}
                        />
                    </div>
                </div >)
            }
        </>
    )
}
export default CardList