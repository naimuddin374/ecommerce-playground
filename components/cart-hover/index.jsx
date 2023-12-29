import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useRouter } from 'next/navigation'
import CartImg from "../../assets/img/GoldPhone-1-300x300 1.png"
import { shortText } from '../../helper'
import DiscountPrice from "../discount-price"
import RegularPrice from "../regular-price"
import CustomButton from '../ui/custom-button'
import CustomHeading from "../ui/custom-heading"
import CustomImage from "../ui/custom-image"

const CartHover = () => {
   const cartData = useStoreState(state => state.cart.data)
   const removeItems = useStoreActions(action => action.cart.delete)
   const route = useRouter()

   const checkoutHandler = () => {
      route.push('/checkout')
   }

   return (
      <>
         {cartData.length > 0 &&
            <div className="cartHover ">
               {cartData?.map(item =>
                  <div key={item._id} className='row mt-3'>
                     <div className='col-2'>
                        <CustomImage
                           classes={'cart-img-list'}
                           src={item.image ? item.image : CartImg.src}
                           alt={'cartImg'}
                        />
                     </div>
                     <div className='col-6'>
                        <CustomHeading
                           classes={'cart-hadding '}
                           hedName={shortText(item.title, 20)}
                        />
                     </div>
                     <div className='cartPrice col-2 '>
                        <RegularPrice
                           classes={'cart-item-price '}
                           regularPrice={item.discount}
                        />
                        <DiscountPrice
                           classes={'cart-item-disPrice mb-0'}
                           dicPrice={item.price}
                        />
                     </div>
                     <div className='icon col-2'>
                        <FontAwesomeIcon onClick={() => removeItems(item._id)} className="card-list-icon" icon={faXmark} />
                     </div>
                  </div>
               )}
               <CustomButton
                  btnText={"Process To Checkout"}
                  size={'small'}
                  variant={'primary'}
                  classes={'checkoutBtn'}
                  btnAction={checkoutHandler}
               />
            </div>
         }
      </>
   )
}
export default CartHover