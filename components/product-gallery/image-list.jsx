import Image from "next/image"


const ImageList = ({ images, changHandler }) => {

    return (
        <div>
            {images?.map(item =>
                <Image onClick={() => changHandler(item)} className="sub- w-75 h-auto  p-3" src={item} alt="" />)}
        </div>
    )
}
export default ImageList