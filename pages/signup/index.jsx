
import Link from "next/link";
import { useState } from "react";
import Breadcrumb from "../../components/breadcrumb";
import CustomInput from "../../components/ui/custom-input";
import CustomButton from "../../components/ui/custom-button"
import useAuth from "../../hooks/useAuth";


const SignUp = () => {
  const [password, setPassword] = useState(false)
  const [conFirmPass, setConFirmPass] = useState(false)
  const { state, error, changeHandler, handleRegistration } = useAuth()

  return (
    <div id="signup">
      <Breadcrumb />
      <div className="container">
        <div className="signup-box mx-auto">
          <h5 className="">Sign Up</h5>
          <hr />
          {error && <h3 className="ps-5 text-danger">{error}</h3>}
          <form onSubmit={handleRegistration}>
            <CustomInput
              type={'input'}
              label={'First Name'}
              name='firstName'
              changeHandler={changeHandler}
              value={state.firstName}
            />

            <CustomInput
              type={'input'}
              label={'Last Name'}
              name='lastName'
              changeHandler={changeHandler}
              value={state.lastName}
            />
            <CustomInput
              type={'email'}
              label={'Email'}
              name='email'
              changeHandler={changeHandler}
              value={state.email}
            />
            <CustomInput
              type={'text'}
              label={'Contact Number'}
              name='contact'
              changeHandler={changeHandler}
              value={state.contact}
            />
            <CustomInput
              type={password ? "text" : "password"}
              label={'Password'}
              name='password'
              changeHandler={changeHandler}
              value={state.password}
            />
            <div style={{ display: "flex" }}>
              <span style={{ cursor: "pointer" }} onClick={() => setPassword(!password)}>
                {password ? "Hide Password" : "Show Password"}
              </span>
            </div>
            <CustomInput
              type={conFirmPass ? "text" : "password"}
              label='Confirm Password'
              name='confirmPassword'
              changeHandler={changeHandler}
              value={state.confirmPassword}
            />
            <div style={{ display: "flex" }}>
              <span style={{ cursor: "pointer" }} onClick={() => setConFirmPass(!conFirmPass)}>
                {conFirmPass ? "Hide Password" : "Show Password"}
              </span>
            </div>
            <div className="text">
              <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described inour privacy policy.</p>
            </div>
            <div className="pt-3">
              <CustomButton classes={'sign'} type="submit" btnText="Sign Up" />
            </div>
            <div className="account text-center pt-5">
              <h4>Don't have an account? </h4>
            </div>
            <div className="pt-3">
              <Link href="/signin">
                  <CustomButton  classes={'white-outline-btn'} type="submit" btnText="Sign In" />
              </Link> 
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SignUp;