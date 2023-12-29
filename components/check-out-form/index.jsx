
import { useFormik } from "formik"
import Checkbox from "../checkbox"
import CustomInput from "../ui/custom-input"

const CheckOutForm = () => {
    const initialValues = {
        name: '',
        number: '',
        state: '',
        city: '',
        streetAddress: '',
        area: '',
        location: [
            {
                home: '',
                office: ''
            }
        ]
    }
    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues,
        onSubmit: (values) => {

        }
    })
    return (
        <form
            className="p-4"
            id="CheckOutForm"
            onSubmit={handleSubmit}
        >
            <div className="row pb-2">
                <div className="col-6">
                    <CustomInput
                        classes={'checkout-input shadow-none'}
                        type={'text'}
                        label={'Receiver Name'}
                        name=' name'
                        placeholder='Full Name'
                        changeHandler={handleChange}
                        value={values.name}

                    />
                </div>
                <div className="col-6">
                    <CustomInput
                        classes={'checkout-input shadow-none'}
                        type={'number'}
                        label={'Receiver Number'}
                        name='number'
                        placeholder='Number'
                        changeHandler={handleChange}
                        value={values.number}
                    />
                </div>
            </div>
            <div className="row pb-2">
                <div className="col-6">
                    <CustomInput
                        classes={'checkout-input shadow-none'}
                        type={'text'}
                        label={'State'}
                        name='state'
                        placeholder='State'
                        changeHandler={handleChange}
                        value={values.state}
                    />
                </div>
                <div className="col-6">
                    <CustomInput
                        classes={'checkout-input shadow-none'}
                        type={'text'}
                        label={'City'}
                        name='city'
                        placeholder='City'
                        changeHandler={handleChange}
                        value={values.city}
                    />
                </div>
            </div>
            <div className="row pb-2">
                <div className="col-6">
                    <CustomInput
                        classes={'checkout-input shadow-none'}
                        type={'text'}
                        label={'Area'}
                        name='area'
                        placeholder='Area'
                        changeHandler={handleChange}
                        value={values.area}
                    />
                </div>
                <div className="col-6 location mt-4">
                    <p>Receiver location</p>
                    <div className="d-flex selectBox">
                        <Checkbox
                            type={'radio'}
                            name="Home"
                            CheckId={'Home'}
                            classes={'checkbox'}
                            changeHandler={handleChange}
                            value={values.location}
                        />
                        <Checkbox
                            type={'radio'}
                            name="Office"
                            CheckId={'Office'}

                        />
                    </div>
                </div>
            </div>
            <div className="row pb-2">
                <CustomInput
                    classes={'checkout-input shadow-none'}
                    type={'text'}
                    label={'Street address'}
                    name='streetAddress'
                    placeholder='Street Address'
                    changeHandler={handleChange}
                    value={values.streetAddress}
                />
            </div>
        </form >
    )
}
export default CheckOutForm    