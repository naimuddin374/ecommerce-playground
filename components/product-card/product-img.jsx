import Image from 'next/image';
import Link from 'next/link';

const ProductImg = (props) => {
    return (
        <div id="product-img">
            <Link href="#">
                <Image className="pdt-img align-items-center  w-100 h-auto" src={props.image} />
            </Link>
        </div>
    )
}
export default ProductImg