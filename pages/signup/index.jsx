
import Link from "next/link";
import { useState } from "react";
import Breadcrumb from "../../components/breadcrumb";
import CustomInput from "../../components/ui/custom-input";


const SignUp = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })


  const changeHandler = (e) => {
    setState({
      [e.target.name]: e.target.value
    })
  }

  return (
    <div id="signup">
      <Breadcrumb />
      <div className="container">
        <form className="signup-box mx-auto">
          <h5 className="">Sign Up</h5>

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


          <div className="input-area mt-3">
            <label className="mb-1" htmlFor="">User Name Or Email</label>
            <input type="text" className="container" />
          </div>

          <div className="input-area mt-3">
            <label className="mb-1" htmlFor="">Password</label>
            <input type="text" className="container" />
          </div>

          <div className="text">
            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described inour privacy policy.</p>
          </div>
          <Link href="#">
            <div className="pt-3">
              <button className="sign">Sign Up</button>
            </div>
          </Link>
          <div className="account pt-5">
            <h4>Don't have an account? </h4>
          </div>

          <div className="pt-3">
            {/* <Link href="signin"><button className="last">Sign in</button></Link> */}
            <Link href="signin">Sign in</Link>
          </div>

        </form>
      </div>
    </div>
  )
}
export default SignUp;