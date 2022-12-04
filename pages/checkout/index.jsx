
import { Fragment } from "react"
import CheckOutForm from "../../components/check-out-form"
import CheckOutCard from "../../components/chaeck-out-card"
import ShopLink from "../../components/shop-link"

const CheckPage = ()=>{
    return(
        <Fragment >
            <ShopLink/>
            <div className="container checkout">
                <div className="row">
                    <div className="col-lg-8 col-md-6 col-12">
                        <CheckOutForm/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <CheckOutCard/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default CheckPage    