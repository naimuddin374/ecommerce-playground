import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faCartShopping, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../../hooks/useAuth'
import { useStoreState } from 'easy-peasy'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';


const HeaderAction = () => {
    // Global state
    const isAuth = useStoreState(state => state.auth.isAuth)

    const { handleLogout } = useAuth();


    return (
        <div className="header-icon text-end d-flex justify-content-between">

            <Link href="/wishlist"><FontAwesomeIcon className="header-action-icon" icon={faHeart} /></Link>

            <Link className='tpo-header-icon' href="cart"><FontAwesomeIcon className="header-action-icon" icon={faCartShopping} />
                <div className='add-items'>
                    <small>2</small>
                </div>
            </Link>
            <p>
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
            </p>
        </div >
    )
}
export default HeaderAction


