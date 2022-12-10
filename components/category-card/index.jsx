import Link from 'next/link'
import Img from "../ui/image"
// import Heading from '../ui/heading'

function Categories(props) {
    return (
        <Link className="py-5 px-4 text-decoration-none" id="categoryCard" href={`#`}>
<<<<<<< Updated upstream
            <Img className="categoryCardImg" img={props.img}/>
            <h1 className='pt-5'>{props.name}</h1>
            {/* <Heading Heading={props.Heading}/> */}
        </Link>    
=======
            <Image className="categoryCardImg" src={props.Img} alt='category card' />
            <h1 className='pt-5'>{props.name}</h1>
        </Link>
>>>>>>> Stashed changes
    )
}
export default Categories