import Footer from "./footer";
import Header from "./header";



const Layout = (props) => {
    return (
        <div className="">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}
export default Layout;