import { faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStoreState } from 'easy-peasy'
import Link from 'next/link'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'
import useAuth from '../../../../hooks/useAuth'
import CartHover from '../../../cart-hover'


const HeaderAction = () => {
    // Global state
    const isAuth = useStoreState(state => state.auth.isAuth)
    const cartItems = useStoreState(state => state.cart.data)

    const { handleLogout } = useAuth();


    return (
        <div className="header-icon text-end align-items-center d-flex justify-content-between">

            <Link href="/wishlist"><FontAwesomeIcon className="header-action-icon" icon={faHeart} /></Link>
            <div className='tpo-header-icon'>
                <Link href="/cart"><FontAwesomeIcon className="header-action-icon" icon={faCartShopping} />
                    {cartItems.length > 0 &&
                        <div className='add-items'>
                            <small>{cartItems.length}</small>
                        </div>}
                </Link>
                <CartHover />
            </div>
            {isAuth ? <UncontrolledDropdown>
                <DropdownToggle caret>
                    <FontAwesomeIcon className="header-action-icon" icon={faUser} />
                    Dropdown
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownItem>My Orders</DropdownItem>
                    <DropdownItem>My Point</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem >
                        <p type='button' className='w-100 logoutBtn'/* onClick={handleLogout}*/>LogOut</p>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown> :
                <Link href={'/signin'}><FontAwesomeIcon className="header-action-icon" icon={faUser} /></Link>}
        </div >
    )
}
export default HeaderAction


