

const CheckOutForm = ()=>{
    return(
        <form className="p-4" id="CheckOutForm">
            <div className="row pb-4">
                <div className="col-6">
                    <label className="pb-2">First name</label>
                    <input type="text"/>
                </div>
                <div className="col-6">
                    <label className="pb-2">Last name</label>
                    <input type="text"/>
                </div>
            </div>
            <div className="row pb-4">
                <div className="col-6">
                    <label className="pb-2">Phone number</label>
                    <input type="text"/>
                </div>
                <div className="col-6">
                    <label className="pb-2">Email</label>
                    <input type="text"/>
                </div>
            </div>
            <div className="pb-4">
                <label className="pb-2">First name</label>
                <input type="text"/>
            </div>
            <div>
                <label className="pb-2">First name</label>
                <input type="text"/>
            </div>
        </form> 
    )
}
export default CheckOutForm    