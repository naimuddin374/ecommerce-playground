import Link from "next/link";
import Img from "../ui/image";
// import Heading from '../ui/heading'

function Categories(props) {
  return (
    <Link
      className="py-5 px-4 text-decoration-none"
      id="categoryCard"
      href={`#`}
    >
      <Img className="categoryCardImg" img={props.img} />
      <h1 className="pt-5">{props.name}</h1>
      {/* <Heading Heading={props.Heading}/> */}
    </Link>
  );
}
export default Categories;
