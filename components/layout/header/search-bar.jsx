import { Box, TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';





const SearchBar = () => {
    return (
        <Box>
            <TextField
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start" sx={{ml: 2}}>
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                variant="standard"
                size="medium"
                placeholder='Search for Products'
                sx={{ width: "750px", border: "1px solid #3C1FF4" }}
                inputProps={{
                    style: {
                        height: "40px",
                    },
                }}
            />
            <Button
                sx={{
                    backgroundColor: "#3C1FF4",
                    color: "#fff",
                    borderRadius: 0,
                    px: 5,
                    lineHeight: "40px"
                }}
            >Search</Button>
        </Box>
    )
}
export default SearchBar;