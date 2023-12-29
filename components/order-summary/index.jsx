
import { useStoreState } from "easy-peasy"
import { useRouter } from "next/navigation"
import CustomButton from "../ui/custom-button"
import CustomHeading from "../ui/custom-heading"

const OrderSummary = () => {
    const cartData = useStoreState(state => state.cart.data)
    const shippingFee = useStoreState(state => state.cart.shippingFee)
    const route = useRouter()
    // const shippingFee = cartData[0].shippingFee

    const totalItem = cartData.reduce((acc, cur) => {
        if (cur.quantity && Number(cur.quantity)) {
            acc += Number(cur.quantity)
        }
        return acc;
    }, 0)

    const SubtotalAmount = cartData.reduce((acc, cur) => {
        if (cur.discount && Number(cur.discount)) {
            acc += Number(cur.discount * cur.quantity)
        }
        return acc;
    }, 0)



    const checkoutHandler = () => {
        route.push('/checkout')
    }

    return (
        <div id="OrderSummary">
            <div className="py-4">
                <CustomHeading classes={'order-summary-heading ps-4'} hedName="Order Summary" />
            </div>
            <hr />
            <div className="px-4 pb-4">
                <div className="d-flex justify-content-between align-items-center">
                    <p>Subtotal ({totalItem} items) </p>
                    <p>৳ {SubtotalAmount}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p>Shipping Fee</p>
                    <p>৳ {shippingFee}</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                    <strong>Total</strong>
                    <strong>৳ 828</strong>
                </div>
                <div className="text-center pt-4">
                    <CustomButton
                        classes={'order-summary-button'}
                        btnText="Proceed to cheackout"
                        btnAction={checkoutHandler}
                    />
                </div>
            </div>
        </div>
    )
}
export default OrderSummary