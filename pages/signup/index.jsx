import Breadcrumb from "../../components/breadcrumb";
import Link from "next/link";

const SingUp = () => {
  return (
    <div id="singup">
      <Breadcrumb />
      <div className="container">
        <div className="singup-box mx-auto">
          <h5>Sing Up</h5>
          <div className="input-area">
            <label className="mb-1" htmlFor="">First Name</label>
            <input type="text" className="container"/>
          </div>

          <div className="input-area">
            <label className="mb-1" htmlFor="">Last Name</label>
            <input type="text" className="container"/>
          </div>

          <div className="input-area">
            <label className="mb-1" htmlFor="">User Name Or Email</label>
            <input type="text" className="container"/>
          </div>
          <div className="input-area mt-3">
            <label className="mb-1" htmlFor="">Password</label>
            <input type="text" className="container"/>
          </div>
          <div className="text">
            <p>Your personal data will be used to support your experience throughout this<br></br> website, to manage access to your account, and for other purposes described in<br></br> our privacy policy.</p>
          </div>
          <Link href="singin">
            <button className="sing">Sing Up</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default SingUp;