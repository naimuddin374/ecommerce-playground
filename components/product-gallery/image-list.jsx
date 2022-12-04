import Image from "next/image"
import Link from "next/link"
import singlePdtImg2 from "../../assets/img/product-39 1.png"
import singlePdtImg3 from "../../assets/img/poster-03 1.png"
import singlePdtImg from "../../assets/img/shop/product-list/product-38.png"


const ImageList = () => {
    return (
        <div>
            <Link href="#">
                <Image className="sub- w-75 h-auto  p-3" src={singlePdtImg} />
            </Link>
            <Link href="#">
                <Image className="sub- w-75 h-auto  p-3" src={singlePdtImg2} />
            </Link>
            <Link href="#">
                <Image className="sub- w-75 h-auto  p-3" src={singlePdtImg} />
            </Link>
            <Link href="#">
                <Image className="sub- w-75 h-auto  p-3" src={singlePdtImg3} />
            </Link>
        </div>
    )
}
export default ImageList