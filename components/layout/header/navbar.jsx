import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faAngleDown} from '@fortawesome/free-solid-svg-icons'

import Heading from '../../global/headingTitle'

const Navbar = () => {
    return (
        <div>
               <nav className="navbar-expand d-flex" id="navbar">
                    <div className="s d-flex align-items-center ">
                        <FontAwesomeIcon icon={faBars} />
                        <h5 className="px-2">Category</h5>
                        <FontAwesomeIcon icon={faAngleDown} />
                        <span className="ps-4">|</span>
                        </div>
                        <div className="d-flex">
                            <ul className="navbar-nav "> 
                                <li className="nav-item"><Link  className="nav-link px-3" href='/'>Home</Link></li>
                                <li className="nav-item"><Link  className="nav-link px-3" href='#'>About</Link></li>
                                <li className="nav-item"><Link  className="nav-link px-3" href='#'>Shop</Link></li>
                                <li className="nav-item"><Link  className="nav-link px-3" href='#'>Account</Link></li>
                                <li className="nav-item"><Link  className="nav-link px-3" href='#'>Contact</Link></li>
                            </ul>
                        </div>
               </nav>
               <Heading/>
               
            
        </div>
        
    )
}
export default Navbar;