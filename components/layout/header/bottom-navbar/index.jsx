import {Fragment} from 'react'
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars,faAngleDown} from '@fortawesome/free-solid-svg-icons'
import ModelManuItemImgA from "../../../../assets/img/product-40 1.png"
import ModelManuItemImgB from "../../../../assets/img/widetv-300x300 1.png"
import ModelManuItemImgC from "../../../../assets/img/WirelessSound-600x550 1.png"
import ModelManuItemImgD from "../../../../assets/img/GoldPhone-1-300x300 1.png"
import ModelManuItemImgE from "../../../../assets/img/prodcut6 1.png"
import ModelManuItemImgF from "../../../../assets/img/product-40 1.png"
import ModelManuItem from './model-manu-item'

const BottomNavbar = () => {
    return (
        <Fragment>
            <nav className="navbar-expand d-flex" id="navbar">
                <div className="d-flex align-items-center department ">
                    <Link href="#"><FontAwesomeIcon className='DeparitemsAreaOpen' icon={faBars}/></Link>
                    <h5 className="px-2">Departments</h5>
                    <FontAwesomeIcon icon={faAngleDown} />
                    <span className="ps-4">|</span>

                    <div className="modal-area">
                        <div className='row p-4'>
                            <div className='col-4 text-center'>
                                <ModelManuItem
                                img={ModelManuItemImgA}
                                title={`Smart WatchSmart`}
                                />
                            </div>
                            <div className='col-4 text-center'>
                                <ModelManuItem
                                img={ModelManuItemImgB}
                                title={`Smart WatchSmart`}
                                />
                            </div>
                            <div className='col-4 text-center'>
                                <ModelManuItem
                                img={ModelManuItemImgC}
                                title={`Smart WatchSmart`}
                                />
                            </div>
                            <div className='col-4 text-center'>
                                <ModelManuItem
                                img={ModelManuItemImgD}
                                title={`Smart WatchSmart`}
                                />
                            </div>
                            <div className='col-4 text-center'>
                                <ModelManuItem
                                img={ModelManuItemImgE}
                                title={`Smart WatchSmart`}
                                />
                            </div>
                            <div className='col-4 text-center'>
                                <ModelManuItem
                                img={ModelManuItemImgF}
                                title={`Smart WatchSmart`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <ul className="navbar-nav "> 
                        <li className="nav-item"><Link className="nav-link px-3" href='/'>Home</Link></li>
                        <li className="nav-item"><Link className="nav-link px-3" href='#'>About</Link></li>
                        <li className="nav-item"><Link className="nav-link px-3" href='shop'>Shop</Link></li>
                        <li className="nav-item"><Link className="nav-link px-3" href='#'>Account</Link></li>
                        <li className="nav-item"><Link className="nav-link px-3" href='#'>Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}
export default BottomNavbar;