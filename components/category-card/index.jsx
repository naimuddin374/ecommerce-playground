
import CustomImage from "../ui/custom-image";
import CustomHeading from "../ui/custom-heading"
import dfsdf from "../../assets/img/545245.png"

function Categories() {
  return (
    <div className="py-5 px-4" id="categoryCard">
      <CustomImage classes={'category-card-img d-block mb-4'} actionLink={''} src={dfsdf} />
      <CustomHeading classes={'category-card-heading mt-4'} hedName='Mobile' />
    </div>
  );
}
export default Categories;
