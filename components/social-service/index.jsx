
import SocialServiceImgA from "../../assets/img/BasicSel.png"
import SocialServiceImgB from "../../assets/img/IconFic.png"
import SocialServiceImgC from "../../assets/img/LeyaK.png"
import SocialServiceImgD from "../../assets/img/Meta.png"
import CustomImage from "../ui/custom-image"

const SocialService = () => {
    return (
        <div className="container" id="SocialService">
            <div className="row">
                <div className="col-3 imgAera">
                    <CustomImage classes={'social-service-img'} src={SocialServiceImgA.src} actionLink={`#`} />
                </div>
                <div className="col-3 imgAera">
                    <CustomImage classes={'social-service-img'} src={SocialServiceImgB.src} actionLink={`#`} />
                </div>
                <div className="col-3 imgAera">
                    <CustomImage classes={'social-service-img'} src={SocialServiceImgC.src} actionLink={`#`} />
                </div>
                <div className="col-3 imgAera">
                    <CustomImage classes={'social-service-img'} src={SocialServiceImgD.src} actionLink={`#`} />
                </div>
            </div>
        </div>
    )
}
export default SocialService