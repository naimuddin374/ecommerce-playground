import Button from "../ui/button"
import SubHeading from "../ui/sub-heading"
import Heading from "../ui/heading"
import Img from "../ui/image"

const Bannar = (props) =>{
    return(
        <div id="homeBannar">
            <div className="row d-flex align-items-center">
                <div className="col-6">
                    <SubHeading className={`banner-p`} SubHeading={props.SubHeading}/>
                    <Heading className={`pb-4 m-0 p-0`} Heading={props.Heading}/>
                    <Button className={`banner-button`} buttonName={props.buttonName}/>
                </div>
                <div className="col-6 text-center">
                    <Img img={props.img}/>
                </div> 
            </div>
        </div>
    )
}
export default Bannar