import CategoryCard from "../category-card";
import { Box } from "@mui/material";
import {useStoreState} from 'easy-peasy'




const Categories = () => {
    const catList = useStoreState(state => state.category.data);
    
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {catList.map(row => <CategoryCard
                key={row.url}
                title={row.title}
                image={row.image}
                url={row.url}
            />)}
        </Box>
    )
}
export default Categories;