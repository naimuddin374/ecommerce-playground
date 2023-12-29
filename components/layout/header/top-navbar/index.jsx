import HeaderAction from './header-action';
import Logo from "./logo";
import SearchBar from './search-bar';

const TopNavbar = () => {
    return (
        <div id='top-navbar' className='d-flex justify-content-between container px-0 py-3 text-center align-items-center'>
            <Logo />
            <SearchBar />
            <HeaderAction />
        </div>
    )
}
export default TopNavbar;