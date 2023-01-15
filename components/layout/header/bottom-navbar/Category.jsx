import ModelManuItem from "./model-manu-item";
import ModelManuItemImgA from "../../../../assets/img/product-40 1.png"
import useData from "../../../../hooks/useData";



const Category = () => {
    const { loading, data } = useData('/categories');

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
        <div className="modal-area">
            <div className='row p-4'>
                {data && data.length > 0 && data.map(row =>
                    <div className='col-4 text-center' key={row._id}>
                        <ModelManuItem
                            img={ModelManuItemImgA}
                            title={row.name}
                        />
                    </div>)}
            </div>
        </div>
    )
}
export default Category;