import "bootstrap/dist/css/bootstrap.min.css";
import { StoreProvider } from "easy-peasy";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Layout from "../components/layout";
import store from "../store";
import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <StoreProvider store={store}>
      <Layout>
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          pauseOnHover
        />
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}
export default MyApp;
