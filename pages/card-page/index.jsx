



import CardList from "../../components/card-list"
import OrderSummary from "../../components/order-summary"

const CardPage = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-md-7 col-6">
                    <CardList/>
                </div>
                <div className="col-lg-5 col-md-5 col-6">
                    <OrderSummary/> 
                </div>
            </div>
            
        </div>
    )
}
export default CardPage