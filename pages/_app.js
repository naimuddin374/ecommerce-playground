import Layout from '../components/layout'
import { StoreProvider } from 'easy-peasy'
import store from '../store'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.scss'


function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  )
}
export default MyApp
