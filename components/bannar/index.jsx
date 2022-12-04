import Image from "next/image"
import Button from "./button"
import Subheading from "./subheading"
import BannarImg from "../../assets/img/poster-03 1.png"


const Bannar = () =>{
    return(
        <div id="homeBannar">
            <div className="row d-flex align-items-center ">
                <div className="col-6 ">
                    <Subheading/>
                    <h1 className="pb-4">Enhance Your Music Experience</h1>
                    <Button/>
                </div>
                <div className="col-6 text-center ">
                    <Image src={BannarImg} />
                </div>
            </div>
        </div>
    )
}
export default Bannar