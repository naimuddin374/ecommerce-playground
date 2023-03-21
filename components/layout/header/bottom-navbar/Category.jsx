import ModelManuItem from "./modal-menu-item";
import ModelManuItemImgA from "../../../../assets/img/product-40 1.png"
import useData from "../../../../hooks/useData";
import Link from "next/link";


const Category = () => {
    const { loading, data } = useData('/categories');
    console.log(data)
    if (loading) {
        return (
            <div className="modal-area">
                <div className='row p-4'>
                    Loading...
                </div>
            </div>
        )
    }
  
    return (
        <Link href="#" className="modal-area">
            <div className='row p-4'>
                {data && data.length > 0 && data.map(row =>
                    <div className='col-4 text-center' key={row._id}>
                        <ModelManuItem
                            img={ModelManuItemImgA}
                            title={row.name}
                        />
                    </div>)}
            </div>
        </Link>
    )
}
export default Category;