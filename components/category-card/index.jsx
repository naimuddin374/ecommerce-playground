import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";




const CategoryCard = ({ title, image, url }) => {
    return (
        <Link
            href={url}
            style={{
                color: "#000",
                textDecoration: "none",
                fontSize: "20px",
                textAlign: "center",
                padding: "10px",
                "&:hover": {
                    backgroundColor: "#3C1FF4",
                    color: "#fff",
                }
            }}
        >
            <Box>
                <img src={image} alt={title} width={200} />
            </Box>
            <Typography sx={{ fontSize: "20px" }}>
                {title}
            </Typography>
        </Link>
    )
}
export default CategoryCard;