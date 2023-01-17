import Link from "next/link";
import { useState } from "react";

import Breadcrumb from "../../components/breadcrumb";
import CustomInput from "../../components/ui/custom-input";
import CustomButton from "../../components/ui/custom-button"




const ForgetPassword = () => {
    
    const [state, setState] = useState({
        email: '',
        password: '',
    })
      
    const changeHandler = (e) => {
        setState({
        [e.target.name]: e.target.value
        })
    }
    return (
        <div id="signin">
            <Breadcrumb />
            <div className="container">
                <div className="signin-box py-4  mx-auto">
                    <h5 className="text-center">Forget Password</h5>
                    <hr />
                    <div className="py-3 from-area">
                        <CustomInput
                            type={'email'}
                            label={'Email'}
                            name='email'
                            changeHandler={changeHandler}
                            value={state.email}
                        />

                        <CustomInput
                            type={"password"}
                            label={'Reset Password'}
                            name='password'
                            changeHandler={changeHandler}
                            value={state.password}
                        />

                        <div className="pt-5">
                            <CustomButton classes={'primary-outline-btn'} btnText={'Reset Password'}/>
                        </div>

                        <div className="account pt-5">
                            <h4>Don't have an account? </h4>
                        </div>
                        <div className="pt-3">
                            <Link href={"/signin"}>
                                <CustomButton classes={'white-outline-btn'} type="submit" btnText="Sign In" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ForgetPassword;