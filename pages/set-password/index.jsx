
import Link from "next/link";
import { useState } from "react";
import Breadcrumb from "../../components/breadcrumb";
import CustomInput from "../../components/ui/custom-input";
import CustomButton from "../../components/ui/custom-button";
import useAuth from "../../hooks/useAuth";


const SetPassword = () => {
  const [password, setPassword] = useState(false)
  const [conFirmPass, setConFirmPass] = useState(false)
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
          <hr />
          {error && <h3 className="ps-5 text-danger">{error}</h3>}


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
            <div className="pt-3">
            <CustomButton classes={'primary-outline-btn'} type="submit" onClick={handleRegistration} btnText="Submit" />
            </div>
          <div className="account pt-5">
            <h4>Don't have an account? </h4>
          </div>
          <div className="pt-3">
              <Link href={"/signin"}>
                  <CustomButton classes={'white-outline-btn'} type="submit" btnText="Sign In" />
              </Link>
          </div>
          
        </form>
      </div>
    </div>
  )
}
export default SetPassword;