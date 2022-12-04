import NextButton from "./next-button"
import NumberPagination from "./pagination-number"
import PrevButton from "./prev-button"


const Pagination = () => {
    return (
        <div id="pagination">
            <div className="pagination-body d-flex mt-4">
                <PrevButton />
                <NumberPagination />
                <NextButton />
            </div>
        </div>

    )
}
export default Pagination