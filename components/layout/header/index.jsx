

import BottomNavbar from "./bottom-navbar";

import TopNavbar from "./top-navbar";

const Header = () => {
    return (
        <div className="sticky-top">
            <div className="container ">  
                < TopNavbar/>
                <BottomNavbar />
            </div>
        </div>  
    )
}
export default Header;