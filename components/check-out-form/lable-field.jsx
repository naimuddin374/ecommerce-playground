const Lable = (props) =>{
    return(
        <label className={props.className} for={props.for}>{props.name}</label>
    )
}
export default Lable