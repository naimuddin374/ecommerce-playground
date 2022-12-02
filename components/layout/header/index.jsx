
import { Fragment } from "react";
import Navbar from "./navbar";
import TopHeader from "./top-header";

const Header = () => {
    return (
        <Fragment>
            <div className="container">  
                <TopHeader />
                <Navbar />
            </div>
        </Fragment>
    )
}
export default Header;