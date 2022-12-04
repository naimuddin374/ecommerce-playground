import Heading from "./heading"
import SubHeading from "./subheading"


const SectionTitle = (props) => {
    return (
        <div id="section-title">
            <SubHeading subHeading={props.subHeading} />
            <Heading heading={props.heading} />
        </div>
    )
}

export default SectionTitle
