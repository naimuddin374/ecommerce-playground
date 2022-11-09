import { Box } from '@mui/material'
import Image from 'next/image';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Logo from '../../../assets/img/Shoptronics.svg'
import Link from 'next/link'
import SearchBar from './search-bar';




const TopHeader = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
        }}>
            <Box>
                <Image src={Logo} />
            </Box>

            <SearchBar />

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                <Box>
                    <Link href='/'>
                        <PersonOutlineIcon />
                    </Link>
                </Box>
                <Box sx={{ mx: 3 }}>
                    <Link href='/'>
                        <FavoriteBorderIcon />
                    </Link>
                </Box>
                <Box>
                    <Link href='/'>
                        <ShoppingCartOutlinedIcon />
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}
export default TopHeader;