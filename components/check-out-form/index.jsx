

import InputField from "./input-field"
import LabelField from "./lable-field"

const CheckOutForm = ()=>{
    return(
        <form className="p-4" id="CheckOutForm">
            <div className="row pb-4">
                <div className="col-6">
                    <LabelField className={`padding-bottom`} name={`First Name`} for={`1`}/>
                    <InputField className={``} type={`text`} placeholder={``} id={`1`}/>
                </div>
                <div className="col-6">
                     <LabelField className={`padding-bottom`} name={`Last name`} for={`2`}/>
                    <InputField className={``} type={`text`} placeholder={``} id={`2`}/>
                </div>
            </div>
            <div className="row pb-4">
                <div className="col-6">
                    <LabelField className={`padding-bottom`} name={`Phone number`} for={`3`}/>
                    <InputField className={``} type={`number`} placeholder={``} id={`3`}/>
                </div>
                <div className="col-6">
                    <LabelField className={`padding-bottom`} name={`Email`} for={`4`}/>
                    <InputField className={``} type={`email`} placeholder={``} id={`4`}/>
                </div>
            </div>
            <div className="pb-4">
                <LabelField className={`padding-bottom`} name={`Street address`} for={`5`}/>
                <InputField className={``} type={`text`} placeholder={``} id={`5`}/>
            </div>
            <div>
                <LabelField className={`padding-bottom`} name={`Note`} for={`6`}/>
                <InputField className={``} type={`text`} placeholder={``} id={`6`}/>
            </div>
        </form> 
    )
}
export default CheckOutForm    