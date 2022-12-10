import Image from "next/image";
import Link from "next/link";
import StarRating from "../star-rating";




const SingleItem = ({ title, subTitle, buttonText, buttonAction, imgSrc }) => {
    return (
        <div className="slider" >
            <div className="container slick">
                <div className="row d-flex align-items-center">
                    <div className="col-6">
                        <p className="mb-0">{subTitle}</p>
                        <h1>{title}</h1>
                        <div className="pt-3 d-flex align-items-center">
                            <div className='d-flex align-items-center'>
                                <Link href={buttonAction}>
                                    <button className="buyNow">{buttonText}</button>
                                </Link>

                                <div className='float-left ps-4 align-items-center'>
                                    <StarRating />
                                    <p className='mb-0'>100 Review</p>
                                </div>
                            </div>
                            <div className="d-flex ps-1 ps-md-4 ps-lg-4">
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <Image className="w-100" src={imgSrc} />
                    </div>
                </div>
                <div className="circleArea">
                    <div className="circle">
                        <h4>$:95</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleItem;