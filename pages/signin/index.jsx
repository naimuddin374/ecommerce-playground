

import Link from "next/link";
import ShopLink from './../../components/shop-link/index';

const SignIn = () => {

    
    return ( 
        <div id="signin">
        <ShopLink />
            <div className="container">
                <div className="signin-box py-4  mx-auto"> <h5 className="text-center">Sign in</h5>
                    <hr/>
                    <div className="py-3 from-area">
                        <div className="input-area">
                            <label className="mb-1" htmlFor="">User Name Or Email</label>
                            <input type="text" className="container" />
                        </div>

                        <div className="input-area  mt-3">
                            <label className="mb-1" htmlFor="">Password</label>
                            <input type="text" className="container" />
                        </div>
                        <div className="box pt-3 d-flex justify-content-between text-muted">
                            <div className="d-flex ">
                                <input type="checkbox" />
                                <div className="remember">
                                    <h5 className="ms-2">Remember Me</h5>
                                </div>
                            </div>

                            <h5 className="forgotten">Forgotten password?</h5>

                        </div>

                        <div className="pt-5">
                            <Link href="#">
                                <button className="last">Sign in</button>
                            </Link>
                        </div>

                        
                        <div className="account pt-5">
                            <h4>Don't have an account? </h4>
                        </div>
                        <Link href="signup">
                            <div className="pt-3">
                                <button className="up">Sign up</button></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>  
    )
}
export default SignIn;