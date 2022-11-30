
import Link from 'next/link'
import Image from 'next/image'

function Categories (props){
    return( 
            
        <Link className="p-4 text-decoration-none" id="categoryCard" href={`#`}>
            
            <Image className="categoryCardImg" src={props.Img}/>
            <h1>{props.name}</h1>
         
        </Link>

        
    )
}
export default Categories