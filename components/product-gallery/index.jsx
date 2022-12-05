import Image from "next/image"
import Link from "next/link"
import singlePdtImg from "../../assets/img/shop/product-list/product-38.png"

const ProductGallery = (props) => {
    return (
        <div id="product-gallery">
            <div className="row p-4">
                <div className="col-3">
                    <Link href="#">
                        <Image className="sub- w-75 h-auto p-3" src={singlePdtImg}/>
                    </Link>
                    <Link href="#">
                        <Image className="sub- w-75 h-auto p-3" src={singlePdtImg}/>
                    </Link>
                    <Link href="#">
                        <Image className="sub- w-75 h-auto p-3" src={singlePdtImg}/>
                    </Link>
                    <Link href="#">
                        <Image className="sub- w-75 h-auto p-3" src={singlePdtImg}/>
                    </Link>
                </div>
                <div className="col-9">
                    <Image className="main-pdt" src={singlePdtImg}/>
                </div>
                <p>{props.pdtText}</p>
            </div>
        </div>
    )
}
export default ProductGallery