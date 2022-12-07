import Link from "next/link"

const ProductTitle = (props) => {
    return (
        <div id="product-title">
            <Link href="#">
                <p>{props.ProductTitle}</p>
            </Link>
        </div>
    )
}
export default ProductTitle