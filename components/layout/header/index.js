import { Fragment } from "react";
import Navbar from "./navbar";
import TopHeader from "./top-header";
import Boishakhi from "./jui";
const Header = () => {
  return (
    <Fragment>
      <TopHeader />
      <Navbar />
      <Boishakhi />
    </Fragment>
  );
};
export default Header;
