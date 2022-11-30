

import CheckOutForm from "../../components/check-out-form"
import CheckOutCard from "../../components/chaeck-out-card"

const CheckPage = ()=>{
    return(
        <div >
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6 col-12">
                        <CheckOutForm/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <CheckOutCard/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default CheckPage    