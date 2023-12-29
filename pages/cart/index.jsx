import { Fragment } from "react";
import Breadcrumb from "../../components/breadcrumb";
import CardList from "../../components/card-list";
import OrderSummary from "../../components/order-summary";
const CardPage = () => {

    return (
        <Fragment>
            <Breadcrumb mainLink={`Cart`} title={`Products`} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 ">
                        <CardList />
                    </div>
                    <div className="col-lg-5 col-md-5 col-6">
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default CardPage