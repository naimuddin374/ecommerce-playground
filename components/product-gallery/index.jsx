
import { useEffect, useState } from 'react'
import productImg from '../../assets/img/product-38.png'
import CustomImage from '../ui/custom-image'

const ProductGallery = ({ images }) => {
    const [img, setImg] = useState()

    const changHandler = (imgSrc) => {
        setImg(imgSrc)
    }

    useEffect(() => {
        setImg(images[0])
    }, [images])

    return (
        <div id="product-gallery">
            <div className="row p-4">
                <div className="col-3">
                    {images?.map(item =>
                        <CustomImage
                            onClick={() => changHandler(item)}
                            classes={"sub-img"}
                            src={item}
                            alt={"Product detail"}
                        />)}
                </div>
                <div className="col-9">
                    <CustomImage
                        src={img ? img : productImg}
                        classes={"main-pdt"}
                        alt={'Shoptonix'}
                    />
                </div>
            </div>
        </div>
    )
}
export default ProductGallery