import { Input, Label } from 'reactstrap'
import StarRating from '../star-rating'
import Checkbox from '../checkbox'
import FilterCategory from './filter-category'


const FilterBar = () => {


    return (
        <div id="filter-bar" className="container-fluid">
            <div className=" categories p-3">
                <h4 className="mt-2">Categories</h4>
                <>
                    <FilterCategory />
                    {/* Accordion End  */}
                    {/* Price Range Start */}
                    <div className="price mt-4">
                        <h4>Price</h4>
                        <Input
                            color="primary"
                            type="range"
                        />
                    </div>
                    {/* Price Range End */}

                    {/* Size Start  */}
                    <div className="size mt-5">
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            heading={`Size`}
                            name={`XXL`}
                            CheckId={`13`}
                        />
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            name={`XL`}
                            CheckId={`12`}
                        />
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            name={`L`}
                            CheckId={`14`}
                        />
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            name={`M`}
                            CheckId={`16`}
                        />
                    </div>
                    {/* Size SEnd  */}

                    {/* Brand Start  */}
                    <div className="brand mt-5">
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            heading={`brand`}
                            name={`Apple`}
                            CheckId={`21`}

                        />
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            name={`Samsung`}
                            CheckId={`22`}

                        />
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            name={`Realme`}
                            CheckId={`23`}

                        />
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            name={`Nokia`}
                            CheckId={`24`}
                        />
                    </div>
                    {/* Brand SEnd  */}
                    {/* Rating Range Start */}
                    <div className="Rating mt-5">
                        <h4>Rating</h4>
                        <div>
                            <StarRating rating={''} />
                            <StarRating rating={'And Up'} />
                            <StarRating rating={'And Up'} />
                            <StarRating rating={'And Up'} />
                            <StarRating rating={'And Up'} />

                        </div>
                    </div>
                    {/* Rating Range End */}
                    {/* Color-Family Start  */}
                    <div className="color-family mt-5">
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            heading={`Color-Family`}
                            name={`Red`}
                            CheckId={`17`}

                        />
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            name={`White`}
                            CheckId={`18`}

                        />
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            name={`Green`}
                            CheckId={`19`}
                        />
                        <Checkbox
                            type={`checkbox`}
                            className={`checkbox`}
                            name={`Blue`}
                            CheckId={`20`}
                        />
                    </div>
                    {/* Color-Family End  */}
                </>
            </div>
        </div>

    )
}
export default FilterBar
