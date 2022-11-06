import {useRouter} from 'next/router'


const Shop = () => {
    const router = useRouter();
    const productId = router.query.id
    
    return (
        <h1>Product Id: {productId}</h1>
    )
}
export default Shop;