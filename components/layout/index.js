import { Container } from "@mui/material";
import Footer from "./footer";
import Header from "./header";



const Layout = (props) => {
    return (
        <Container maxWidth="xl" sx={{pt: 3}}>
            <Header />
            {props.children}
            <Footer />
        </Container>
    )
}
export default Layout;