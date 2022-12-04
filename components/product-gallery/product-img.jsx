import Image from "next/image"
import singlePdtImg from "../../assets/img/shop/product-list/product-38.png"

const ProductImage = () => {
    return (
        <div>
            <Image className="main-pdt" src={singlePdtImg} />
        </div>
    )
}
export default ProductImage
