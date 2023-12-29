import Link from "next/link";
import { shortText } from "../../../../helper";
import useData from "../../../../hooks/useData";
import ModelManuItem from "./modal-menu-item";

const Category = () => {
    const { loading, data: category } = useData('/categories');
    const catData = category?.data


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
                {catData && catData.length > 0 && catData.map(row =>
                    <div className='col-4 text-center' key={row._id}>
                        <ModelManuItem
                            img={row.image}
                            title={shortText(row.name, 15)}
                        />
                    </div>)}
            </div>
        </Link>
    )
}
export default Category;