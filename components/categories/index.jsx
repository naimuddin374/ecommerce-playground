import CategoryCard from "../category-card";
import {useStoreState} from 'easy-peasy'




const Categories = () => {
    const catList = useStoreState(state => state.category.data);
    
    return (
        <div>
            {catList.map(row => <CategoryCard
                key={row.url}
                title={row.title}
                image={row.image}
                url={row.url}
            />)}
        </div>
    )
}
export default Categories;