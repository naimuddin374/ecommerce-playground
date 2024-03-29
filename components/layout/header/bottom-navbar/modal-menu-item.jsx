
import Image from "next/image"

const ModelManuItem = (props) => {
    return (
        <div id="modelManuItem" className="p-4">
            <Image className="Model-manu-item-img"
                src={props.img} />
            <h4 className="pt-3">{props.title}</h4>
        </div>
    )
}
export default ModelManuItem