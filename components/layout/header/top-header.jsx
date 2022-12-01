import Image from 'next/image';
import Logo from '../../../assets/img/Shoptronics.svg'
import Link from 'next/link'
import SearchBar from './search-bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser, faMagnifyingGlass, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'



const TopHeader = () => {
    return (
        <div id='top-header' className='d-flex justify-content-between container'>
            <Link href={'/'}>
                <Image src={Logo} alt="Logo" />
            </Link>
            <SearchBar />
            <div>
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
        </div>
    )
}
export default TopHeader;