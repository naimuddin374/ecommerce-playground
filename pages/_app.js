import Layout from '../components/layout'
import { StoreProvider } from 'easy-peasy'
import store from '../store'
import '../styles/globals.css'


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
