import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser,faHeart,faCartShopping} from '@fortawesome/free-solid-svg-icons'

const HeaderAction = () => {
    return(
        <div className="text-end d-flex">
            <Link href="signup"><FontAwesomeIcon className="hearderIcon" icon={faUser}/></Link>
            <Link href="wishlist"><FontAwesomeIcon className="hearderIcon" icon={faHeart}/></Link>

            <Link className='tpo-header-icon' href="checkout"><FontAwesomeIcon className="hearderIcon" icon={faCartShopping}/>
                <div className='add-items'>
                    <small>2</small>
                </div>
            </Link>
        </div>
    )
}
export default HeaderAction
