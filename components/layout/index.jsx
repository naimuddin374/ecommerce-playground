import Footer from "./footer";
import Header from "./header";



const Layout = (props) => {
    return (
        <div>
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}
export default Layout;