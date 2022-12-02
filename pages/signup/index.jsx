import Breadcrumb from "../../components/breadcrumb";
import Link from "next/link";


const SingUp = () => {

  return (
    <div id="singup">
      <Breadcrumb />
      <div className="container">
        <div className="singup-box  mx-auto">
          <h5 className="">Sing Up</h5>
          <div className="input-area  mt-3">
            <label className="mb-1" htmlFor="">First Name</label>
            <input type="text" className="container" />
          </div>

          <div className="input-area  mt-3">
            <label className="mb-1" htmlFor="">Last Name</label>
            <input type="text" className="container" />
          </div>

          <div className="input-area  mt-3">
            <label className="mb-1" htmlFor="">User Name Or Email</label>
            <input type="text" className="container" />
          </div>
          <div className="input-area  mt-3">
            <label className="mb-1" htmlFor="">Password</label>
            <input type="text" className="container" />
          </div>
          <div className="text">
            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described inour privacy policy.</p>
          </div>
          <Link href="#">
            <div className="pt-3">
              <button className="sing">Sing Up</button>
            </div>

          </Link>
          <div className="account pt-5">
            <h4>Don't have an account? </h4>
          </div>

            <div className="pt-3">
                <Link href="/singin"><button className="last">Sign in</button></Link>
            </div>
        </div>
      </div>
    </div>
  )
}
export default SingUp;