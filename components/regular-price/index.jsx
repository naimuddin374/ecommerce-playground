const RegularPrice = ({ regularPrice, classes }) => {
    return (
        <div className={classes}>
            <strong>৳</strong>
            <strong>{regularPrice}</strong>
        </div>
    )
}
export default RegularPrice