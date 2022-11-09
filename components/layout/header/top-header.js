import { Box, TextField, InputAdornment, Button } from "@mui/material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Logo from "../../../assets/img/Shoptronics.svg";
import Link from "next/link";

const TopHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Image className="top-logo" src={Logo} />
      </Box>

      <Box>
        <TextField
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          size="medium"
          placeholder="Search for Products"
        />
        <Button
          size="small"
          sx={{
            backgroundColor: "#3C1FF4",
            color: "#fff",
            borderRadius: 0,
            px: 5,
          }}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Link href="/">
          <PersonOutlineIcon />
        </Link>
        <Link href="/">
          <FavoriteBorderIcon />
        </Link>
        <Link href="/">
          <ShoppingCartOutlinedIcon />
        </Link>
      </Box>
    </Box>
  );
};
export default TopHeader;
