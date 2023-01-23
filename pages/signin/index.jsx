import Link from "next/link";
import Breadcrumb from "../../components/breadcrumb";
import CustomInput from "../../components/ui/custom-input";
import CustomButton from "../../components/ui/custom-button";
import Checkbox from "../../components/checkbox"
import useAuth from "../../hooks/useAuth";



const SignIn = () => {
    const { changeHandler, state, loading, handleLogin, error } = useAuth()

    return (
        <div id="signin">
            <Breadcrumb />
            <div className="container">
                <div className="signin-box py-4  mx-auto"> <h5 className="text-center">Sign in</h5>
                    <hr />
                    {error && <h3 className="ps-5 text-danger">{error}</h3>}
                    <form onSubmit={handleLogin} className="py-3 from-area">
                        <CustomInput
                            type={'email'}
                            label={'Email'}
                            name='email'
                            changeHandler={changeHandler}
                            value={state.email}
                        />
                        <CustomInput
                            type={'password'}
                            label={'Password'}
                            name='password'
                            changeHandler={changeHandler}
                            value={state.password}
                        />
                        <div className="box pt-3 d-flex justify-content-between text-muted">
                            <Checkbox type="checkbox" CheckId="checkbox" name="Remember Me" />
                            <Link className="forgotten text-muted" href="#">Forgotten password?</Link>
                        </div>

                        <div className="pt-5">
                            <button type="submit" className="last" >{loading ? 'Loading...' : 'Sign in'}</button>
                        </div>

                        <div className="account text-center text-muted pt-5">
                            <h4>Don't have an account? </h4>
                        </div>
                        <Link href={"/signup"}>
                            <CustomButton classes={'white-outline-btn'} btnText="Sign Up" />
                        </Link>
                        
                        {/* <Link className="white-outline-btn" href="/signup">Sign Up</Link> */}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignIn;