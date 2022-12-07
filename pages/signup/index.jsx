
import Link from "next/link";
import ShopLink from './../../components/shop-link/index';


const SignUp = () => {

  return (
    <div id="signup">
      <ShopLink />
      <div className="container">
        <div className="signup-box  mx-auto">
          <h5 className="">Sign Up</h5>
          <div className="input-area  mt-3">
            <label className="mb-1" htmlFor="">First Name</label>
            <input type="text" className="container"/>
          </div>

          <div className="input-area  mt-3">
            <label className="mb-1" htmlFor="">Last Name</label>
            <input type="text" className="container"/>
          </div>

          <div className="input-area  mt-3">
            <label className="mb-1" htmlFor="">User Name Or Email</label>
            <input type="text" className="container"/>
          </div>
          <div className="input-area mt-3">
            <label className="mb-1" htmlFor="">Password</label>
            <input type="text" className="container"/>
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
                <Link href="signin"><button className="last">Sign in</button></Link>
            </div>
        </div>
      </div>
    </div>
  )
}
export default SignUp;