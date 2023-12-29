
import { useStoreState } from "easy-peasy"
import { useRouter } from "next/navigation"
import CheckOutCardImg from "../../assets/img/poster-03 1.png"
import { shortText } from "../../helper"
import Checkbox from "../checkbox"
import CustomButton from "../ui/custom-button"
import CustomHeading from "../ui/custom-heading"
import CustomImage from "../ui/custom-image"
const CheckOutCard = () => {
    const cartData = useStoreState(state => state.cart.data)
    const shippingFee = useStoreState(state => state.cart.shippingFee)
    const isAuth = useStoreState(state => state.auth.isAuth)

    const route = useRouter()
    const totalItem = cartData?.reduce((acc, cur) => {
        if (cur.quantity && Number(cur.quantity)) {
            acc += Number(cur.quantity)
        }
        return acc
    }, 0)
    const subTotalAmount = cartData?.reduce((acc, cur) => {
        if (cur.discount && Number(cur.discount)) {
            acc += Number(cur.discount * cur.quantity)
        }
        return acc;
    }, 0)

    const orderHandler = () => {
        console.log('isAuth', isAuth)
        isAuth ? route.push('/order') : route.push('/signin')
    }

    return (
        <div className="py-4 mb-5" id="checkOutCard">
            <h4 className="text-center">Your order</h4>
            <hr />
            <div className={cartData.length > 2 ? "checkoutItems" : "checkoutItem"}>
                {cartData?.map(item =>
                    <div key={item._id} className="d-flex p-2 ">
                        <CustomImage classes={'check-out-card-img'} src={item.image ? item.image : CheckOutCardImg.src} />
                        <div className="ps-3">
                            <CustomHeading classes={'check-out-card-heading'} hedName={shortText(item.title, 25)} />
                            <p className="check-out-card-price">৳ {item.discount} x {item.quantity}</p>
                        </div>
                    </div>
                )}
            </div>
            <hr />
            <div className="d-flex justify-content-between px-4">
                <strong>Subtotal ({totalItem} items)</strong>
                <strong>৳ {subTotalAmount}</strong>
            </div>
            <div className="pt-3 px-4">
                <h4 className="text-center font-weight-bold">Shipping</h4>
                <Checkbox
                    classes={'py-2'}
                    type={'checkbox'}
                    name={`Shipping Fee ৳ ${shippingFee}`}
                    CheckId={'shipping'}
                />
            </div>
            <hr />
            <div className="d-flex justify-content-between px-4">
                <strong>Total</strong>
                <strong>$698</strong>
            </div>
            <div className="pt-4 px-4">
                <h4 className="text-center">Payment</h4>
                <Checkbox
                    classes={''}
                    type={'checkbox'}
                    name={'Bkash'}
                    CheckId={'Bkash'}
                />
                <Checkbox
                    classes={''}
                    type={'checkbox'}
                    name={'Nogod'}
                    CheckId={'Nogod'}
                />
                <Checkbox
                    classes={''}
                    type={'checkbox'}
                    name={'Card'}
                    CheckId={'Card'}
                />
            </div>
            <div className="text-center pt-3">
                <CustomButton
                    classes={'check-out-card-button'}
                    btnText="Please Order"
                    btnAction={orderHandler}
                />
            </div>
        </div>
    )
}
export default CheckOutCard    