const DiscountPrice = ({ classes, dicPrice }) => {
    return (
        <div>

            <p className={`text-decoration-line-through text-muted ${classes}`}> <span>৳</span>{dicPrice}</p>
        </div>
    )
}
export default DiscountPrice