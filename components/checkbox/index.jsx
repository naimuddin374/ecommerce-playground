import { Input, Label } from 'reactstrap'

const Checkbox = ({ classes, heading, type, CheckId, name, value, changeHandler }) => {
    return (
        <div className={classes}>
            <h4>{heading}</h4>
            <div>
                <Input
                    className="shadow-none"
                    type={type}
                    id={CheckId}
                    value={value}
                    onChange={changeHandler}
                />
                <Label htmlFor={CheckId} role="button" className="ms-2 mb-0">{name}</Label>
            </div>
        </div>
    )
}
export default Checkbox