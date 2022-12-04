
import Image from "next/image"
import CheckOutCardImg from "../../assets/img/product-39 1.png"

const CheckOutCard = ()=>{
    return(
        <div className="py-4 mb-5" id="checkOutCard">
            <h4 className="text-center">Your order</h4>
            <hr/>
            <div className="d-flex p-2">
                <Image className="CheckOutCardImg" src={CheckOutCardImg} />
                <div className="ps-3">
                    <h5>Flexible WareLess Head Phone</h5>
                    <p>$399 x 2</p>
                </div>
            </div>
            <hr/>
            <div className="d-flex justify-content-between px-4">
                <strong>Subtotal (2 items)</strong>   
                <strong>$398</strong>   
            </div>
           <div className="pt-4 px-4">
                <h4 className="text-center">Shipping</h4>
                <div className="pb-2">
                    <input type="radio" id="charg" name="shipping" value="HTML"/>
                    <label for="charg">Shipping Free</label>
                </div>
                <div>
                    <input type="radio" id="charg" name="shipping" value="HTML"/>
                    <label for="charg">Shipping Fee $20</label>
                </div>
           </div>
           <hr/>
           <div className="d-flex justify-content-between px-4  ">
                <strong>Total</strong>   
                <strong>$698</strong>   
            </div>
            <div className="pt-4 px-4">
                <h4 className="text-center">Payment</h4>
                <div className="pb-2">
                    <input type="radio" id="Bkash" name="Payment" value="HTML"/>
                    <label for="Bkash">Bkash</label>
                </div>
                <div>
                    <input type="radio" id="Stripe" name="Payment" value="HTML"/>
                    <label for="Stripe">Stripe</label>
                </div>
           </div>
           <div className="text-center pt-5">
                <button>Please Order</button>
           </div>
            
        </div>
    )
}
export default CheckOutCard    