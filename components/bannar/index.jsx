import Image from "next/image"
import Button from "../global/button"
import BannarImg from "../../assets/img/poster-03 1.png"

const Bannar = () =>{
    return(
        <div id="homeBannar">
            <div className="row d-flex align-items-center ">
                <div className="col-6 ">
                    <p className="mb-0">Enhance Your Music Experience</p>
                    <h1>Enhance Your Music Experience</h1>
                    <Button name="Check it Out"/>
                </div>
                <div className="col-6 text-center ">
                    <Image src={BannarImg} />
                </div>
            </div>
        </div>
    )
}
export default Bannar