
import Image from "next/image"
import SocialServiceImgA from "../../assets/img/BasicSel.png"
import SocialServiceImgB from "../../assets/img/IconFic.png"
import SocialServiceImgC from "../../assets/img/LeyaK.png"
import SocialServiceImgD from "../../assets/img/Meta.png"

    const SocialService = () =>{
        return(
            <div className="container" id="SocialService">
                <div className="row">
                    <div className="col-3 imgAera">
                        <a href="#"><Image className="SocialServiceImg" src={SocialServiceImgA} /></a>
                    </div>
                    <div className="col-3 imgAera">
                        <a href="#"><Image className="SocialServiceImg" src={SocialServiceImgB} /></a>
                    </div>
                    <div className="col-3 imgAera">
                        <a href="#"><Image className="SocialServiceImg" src={SocialServiceImgC} /></a>
                    </div>
                    <div className="col-3 imgAera">
                        <a href="#"><Image className="SocialServiceImg" src={SocialServiceImgD} /></a>
                    </div>       
                </div>
            </div>
        )
    }
    export default SocialService