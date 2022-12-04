

import Image from 'next/image'
function CategoriesImg (props){
    return(     
        <Image className="categoryCardImg" src={props.Img}/>    
    )
}
export default CategoriesImg


