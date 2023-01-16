
import Link from "next/link";
import { useState } from "react";
import Breadcrumb from "../../components/breadcrumb";
import CustomInput from "../../components/ui/custom-input";
import useAuth from "../../hooks/useAuth";


const SetPassword = () => {
  const [password,setPassword]=useState(false)
  const [conFirmPass,setConFirmPass]=useState(false)
  const { state, error, changeHandler, handleRegistration } = useAuth()

  // const [state, setState] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: ''
  // })


  // const changeHandler = (e) => {
  //   setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  return (
    <div id="signup">
      <Breadcrumb />
      <div className="container">
        <form className="signup-box mx-auto">
          <h5 className="">Set Password</h5>
          <hr/>
          {error && <h3 className="ps-5 text-danger">{error}</h3>}

         
          <CustomInput
            type={password ? "text":"password"}
            label={'Password'}
            name='password'
            changeHandler={changeHandler}
            value={state.password}
          />
          <div style={{display:"flex"}}>
          <span style={{cursor:"pointer"}} onClick={()=>setPassword(!password)}>
          {password ? "Hide Password":"Show Password"}
          </span>
          </div>
          <CustomInput
             type={conFirmPass ? "text":"password"}
            label='Confirm Password'
            name='confirmPassword'
            changeHandler={changeHandler}
            value={state.confirmPassword}
          />
          <div style={{display:"flex"}}>
          <span style={{cursor:"pointer"}} onClick={()=>setConFirmPass(!conFirmPass)}>
          {conFirmPass ? "Hide Password":"Show Password"}
          </span>
          </div>

          {/* <div className="text">
            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described inour privacy policy.</p>
          </div> */}
          <Link href="#">
            <div className="pt-3">
              <button className="sign" onClick={handleRegistration}>Submit</button>
            </div>
          </Link>
          <div className="account pt-5">
            <h4>Don't have an account? </h4>
          </div>
          <Link className="btn mt-3 w-100 auth-button d-flex align-items-center justify-content-center" href="/signin">Sign in</Link>
        </form>
      </div>
    </div>
  )
}
export default SetPassword;