import StarRating from '../star-rating/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareNodes, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const ProductContent = (props, product) => {
    return (
        <div id="pdt-content">
            <div className="row">
                <div className="col-7">
                    sadf
                </div>
                <div className="col-5 ">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <p className="me-2">Review:</p>
                            <StarRating rating={`(95)`} />
                        </div>
                        <div >
                            <FontAwesomeIcon className="me-2 " icon={faShareNodes} />
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                    </div>
                    <div className="pdt-info">
                        <h4>Flexible WareLess Head Phone</h4>
                        <p className=''>Product Id:<span className="text-muted">12af</span></p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or</p>
                        <p className=''>Brand:<span className="text-muted">HP</span></p>
                        <h5 className=''>Quick Overview</h5>
                        <div>
                            <ul >
                                <li className="m-0">RAM - 16GB</li>
                                <li className="m-0">Processor Type - Apple M1 Chip</li>
                                <li className="m-0">Graphics Memory - Shared</li>
                                <li className="m-0">Display Size(Inch) - 13.3</li>
                            </ul>
                        </div>
                        <div className="price">
                            <span className="h4 me-4" strong>$333</span>
                            <span className='me-4 text-muted'>|</span>
                            <span className="h4 text-muted text-decoration-line-through">$232</span>
                            <span className="less-price">-11%</span>
                        </div>

                        <div className=" quantity row">
                            <div className=" button col-2  text-center">2</div>
                            <div className="add-to-cart col-6 ms-2 text-center btn ">
                                <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                                add to card</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductContent