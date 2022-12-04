import { Input, Label } from 'reactstrap'

const FilterCheckbox = (props) => {
    return (
        <div className="checkbox">
            <h4>{props.heading}</h4>
            <div>
                <Input
                    className="shadow-none"
                    type="checkbox"
                    id={props.CheckId}
                />
                <Label for={props.CheckId} role="button" className="ms-2 mb-0">{props.name}</Label>
            </div>
        </div>
    )
}
export default FilterCheckbox