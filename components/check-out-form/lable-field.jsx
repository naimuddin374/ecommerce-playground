




const Lable = (props) =>{
    return(
       <div>
            <label className={props.className} for={props.for}>{props.name}</label>
       </div>
    )
}
export default Lable