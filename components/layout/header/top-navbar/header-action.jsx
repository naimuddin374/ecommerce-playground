import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser,faHeart,faCartShopping} from '@fortawesome/free-solid-svg-icons'
const HeaderAction = () => {
    return(
        <div className="text-end d-flex">
            <Link href="signin"><FontAwesomeIcon className="header-action-icon" icon={faUser}/></Link>
            <Link href="wishlist"><FontAwesomeIcon className="header-action-icon" icon={faHeart}/></Link>

            <Link className='tpo-header-icon' href="cart"><FontAwesomeIcon className="header-action-icon" icon={faCartShopping}/>
                <div className='add-items'>
                    <small>2</small>
                </div>
            </Link>
        </div>
    )
}
export default HeaderAction
