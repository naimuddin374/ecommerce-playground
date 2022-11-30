



const OrderSummary = ()=>{
    return(
        <div className="" id="OrderSummary">
            <div className="py-4">
                <h4 className="text-center">Order Summar</h4>
            </div>
            <hr/>
            <div className="px-4 pb-4">
                <div className="d-flex justify-content-between align-items-center">
                    <p>Subtotal (2 items) </p>
                    <p>$698 </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p>Shipping Fee</p>
                    <p>$20</p>
                </div>
                <hr/>
                <div className="d-flex justify-content-between align-items-center">
                    <strong>Total</strong>
                    <strong>$828</strong>
                </div>
                <div className="text-center pt-4">
                    <button className="">Proceed to cheackout</button>
                </div>
            </div>
        </div>
    )
}
export default OrderSummary