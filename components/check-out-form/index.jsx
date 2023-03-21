
import CustomInput from "../ui/custom-input"
import { useState } from "react"

const CheckOutForm = ()=>{
    const {state, setState} = useState({
        firstName:'',
        firstName:'',
        phoneNumber:'',
        email:'',
        StreetAddress:'',
        note:'',
    })
    const changeHandler=(e)=>{
        setState({
            [e.terget.name]: e.terget.value
        })
    }
    
    return(
        <form className="p-4" id="CheckOutForm">
            <div className="row pb-4">
                <div className="col-6">
                    <CustomInput
                        classes={'checkout-input shadow-none'}
                        type={'text'}
                        label={'First Name'}
                        name='firstName'
                        changeHandler={changeHandler}
                        value={state.firstName}

                    />
                </div>
                <div className="col-6">
                    <CustomInput
                        classes={'checkout-input shadow-none'}
                        type={'text'}
                        label={'Last Name'}
                        name='lastName'
                        changeHandler={changeHandler}
                        value={state.lastName}

                    />
                </div>
            </div>
            <div className="row pb-4">
                <div className="col-6">
                    <CustomInput
                        classes={'checkout-input shadow-none'}
                        type={'number'}
                        label={'Phone Number'}
                        name='phoneNumber'
                        changeHandler={changeHandler}
                        value={state.phoneNumber}

                    />
                </div>
                <div className="col-6">
                    <CustomInput
                        classes={'checkout-input shadow-none'}
                        type={'email'}
                        label={'Email'}
                        name='email'
                        changeHandler={changeHandler}
                        value={state.email}

                    />
                </div>
            </div>
            <div className="pb-4">
                <CustomInput
                    classes={'checkout-input shadow-none'}
                    type={'text'}
                    label={'Street address'}
                    name='StreetAddress'
                    changeHandler={changeHandler}
                    value={state.StreetAddress}

                />  
            </div>
            <div>
                <CustomInput
                    classes={'checkout-input shadow-none'}
                    type={'text'}
                    label={'Note'}
                    name='note'
                    changeHandler={changeHandler}
                    value={state.note}

                /> 
            </div>
        </form> 
    )
}
export default CheckOutForm    