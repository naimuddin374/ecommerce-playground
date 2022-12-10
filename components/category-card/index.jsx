import Link from 'next/link'
import Img from "../ui/image"
// import Heading from '../ui/heading'

function Categories(props) {
    return (
        <Link className="py-5 px-4 text-decoration-none" id="categoryCard" href={`#`}>
            <Img className="categoryCardImg" src={props.Img} alt='category card' />
            <h1 className='pt-5'>{props.name}</h1>
        </Link>
    )
}
export default Categories