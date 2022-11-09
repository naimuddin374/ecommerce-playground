import { Fragment } from "react";
import Navbar from "./navbar";
import TopHeader from "./top-header";

const Header = () => {
    return (
        <Fragment>
            <TopHeader />
            <Navbar />
        </Fragment>
    )
}
export default Header;