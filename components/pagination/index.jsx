
const Pagination = () => {
    return (
        <div id="pagination">
            <div className="pagination-body d-flex">
                <div className="priv"><a className="px-2" href="#">Priv</a></div>
                <div>
                    <a className="mx-2 px-2" href="#">1</a>
                    <a className="mx-2 px-2" href="#">2</a>
                    <a className="mx-2 px-2" href="#">3</a>
                    <a className="mx-2 px-2" href="#">4</a>
                    <a className="mx-2 px-2" href="#">5</a>
                </div>
                <div className="next"><a className="px-2" href="#">Next</a></div>
            </div>
        </div>

    )
}
export default Pagination