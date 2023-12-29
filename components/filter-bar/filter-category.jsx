import { faSearch, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useState } from 'react'
import { Input } from 'reactstrap'
import useData from '../../hooks/useData'


const FilterCategory = () => {
    const { loading, data: categories } = useData('/categories')
    const { data: subcategories } = useData('/subcategories')
    const [open, setOpen] = useState(0)
    const [keyword, setKeyword] = useState(null);


    const getSubcategories = (catId) => {
        if (!subcategories) return [];

        if (!keyword) {
            return subcategories.filter(scat => scat.category._id === catId);
        }
        return subcategories.filter(scat => scat.category._id === catId && scat.name.toLowerCase().includes(keyword.toLowerCase()));
    }


    return (
        <div className="accordion">
            {loading ? <h1>Loading...</h1> :
                categories?.length > 0 && categories?.map((cat, index) =>
                    <div className="accordion-item" key={cat._id}>
                        <div className={open === index ? "accordion-header active" : "accordion-header"} onClick={() => setOpen(index)}>
                            <button className="accordion-button shadow-none">
                                {cat.name}
                            </button>
                        </div>
                        <div className={open === index ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                            <div className="accordion-body">
                                {index === open && getSubcategories(cat._id).length > 0 &&
                                    <>
                                        <div className=' category-search d-flex align-items-center'>
                                            <Input
                                                className="shadow-none"
                                                type="search"
                                                onChange={(e) => setKeyword(e.target.value)}
                                                value={keyword}
                                            >
                                                Search
                                            </Input>
                                            <FontAwesomeIcon className=" searchIcon pe-2" icon={faSearch} />
                                        </div>
                                        <div className="sub-categories p-3">
                                            {getSubcategories(cat._id).map(scat =>
                                                <p key={scat._id}><Link href="#">{scat.name} </Link>{/*<span>1</span>*/}</p>
                                            )}
                                        </div>
                                    </>}
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}
export default FilterCategory